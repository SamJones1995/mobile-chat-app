import React from 'react';
import { View, Platform, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Bubble, SystemMessage, Day, GiftedChat } from 'react-native-gifted-chat'


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    //name state from Start.js is assigned to variable name
    let name = this.props.route.params.name;
    this.setState({ 
      messages: [
        {
          _id: 1,
          text:'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'User ' + name + ' has joined the chat',
          createdAt: new Date(),
          system: true,
          color: 'white'
        },
      ],
    })
  }

  //function to add sent messages to the messages state
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
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
    //name state from Start.js is displayed on status bar
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
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
            _id: 1,
          }}
        />
        {/*conditional to fix keyboard overlap for smaller displays*/}
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}

