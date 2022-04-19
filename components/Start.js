import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      bgColor: this.colors.green,
    }  
  };

  render() {

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput>Hello Screen1!</TextInput>
        <Pressable
          accessible={true}
          accessibilityLabel="Go to the chat page"
          accessibilityHint="Allows you to go to the chat page"
          accessibilityRole="button"
          style={styles.startButton}
          onPress={() =>
            this.props.navigation.navigate("Chat", {
              name: this.state.name,
              bgColor: this.state.bgColor,
            })
          }
        >  
          <Text style={styles.buttonText}>Start Chatting</Text>
        </Pressable>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  startButton: {
    width: "88%",
    height: 70,
    borderRadius: 8,
    backgroundColor: '#757083',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});