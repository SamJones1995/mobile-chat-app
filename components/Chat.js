import React from 'react';
import { View, Platform, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Bubble, SystemMessage, Day, GiftedChat } from 'react-native-gifted-chat'
const firebase = require('firebase');
require('firebase/firestore');

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: '',
        name: '',
        avatar: '',
      }
    };

    //initializes Firestore and brings in the SDK
    if (!firebase.apps.length){
      firebase.initializeApp ({
      apiKey: "AIzaSyCaOJnawrIREGHLsJWLtTKRs0p7Zt7M3Ok",
      authDomain: "chat-app-771bf.firebaseapp.com",
      projectId: "chat-app-771bf",
      storageBucket: "chat-app-771bf.appspot.com",
      messagingSenderId: "77964817359",
      appId: "1:77964817359:web:376b1e5ff6df31261658ba",
      measurementId: "G-SESZFZDLHH"
    });
  }
    //reference to 'messages' collection
    this.referenceChatMessages = firebase.firestore().collection("messages");  

    this.refMsgsUser = null;
  }

  //retrieves data in 'messages' Firebase collection and stores it in 'messages' state for rendering
  onCollectionUpdate = QuerySnapshot => {
    const messages = [];
    // go through each document
    QuerySnapshot.forEach(doc => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({
      messages,
    });
  }
  
  componentDidMount() {
    //name state from Start.js is assigned to variable name and set to screen title
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    this.referenceChatMessages = firebase.firestore().collection("messages");

    this.unsubscribe = this.referenceChatMessages.onSnapshot(this.onCollectionUpdate)

    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        return await firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          name: name,
          avatar: 'https://placeimg.com/140/140/any',
        },
      });
      this.refMsgsUser = firebase.firestore().collection('messages').where('uid', '==', this.state.uid);

      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    //stop listening for changes
    this.unsubscribe();
    // stop listening to authentication
    this.authUnsubscribe();
 }

 addMessages() {
   const message = this.state.messages[0];
   //add new messages to Firebase collection
   this.referenceChatMessages.add({
     uid: this.state.uid,
     _id: message._id,
     text: message.text || '',
     createdAt: message.createdAt,
     user: this.state.user,
   });
 }

 

  //function to add sent messages to the messages state/collection
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }), () => {
      this.addMessages();
    })
  }

  //function to customize chat bubble
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          //deliniates which bubble to customize(right for the sent message/left for the receieved message) 
          right: {
            backgroundColor: '#095D43',
          }
        }}
      />  
    )
  }

  //function to customize system message
  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        textStyle={{color: 'white'}}
      />  
    )
  }

  //function to customize Date at the top of the thread
  renderDay(props) {
    return <Day {...props} textStyle={{color: 'white'}}/>
  }

  render() {
    //background color chosen in Start screen is set as const bgColor
    const { bgColor } = this.props.route.params;

    return (
      <View style={{flex:1, backgroundColor: bgColor}}>
        <GiftedChat
          renderDay={this.renderDay.bind(this)}
          renderBubble={this.renderBubble.bind(this)}
          renderSystemMessage={this.renderSystemMessage.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          placeholder= 'Send message'
          user={{
            _id: this.state.user._id,
            name: this.state.name,
            avatar: this.state.user.avatar
          }}
        />
        {/*conditional to fix keyboard overlap for smaller displays*/}
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}

