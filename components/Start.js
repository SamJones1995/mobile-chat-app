import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, ImageBackground, TouchableOpacity, Image } from 'react-native';

import BackgroundImage from "../assets/Background-Image.png";
import userIcon from "../assets/icon.png";

export default class Start extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      bgColor: this.colors.black,
    }  
  };

  // function to update the bgColor state with the new background color for Chat Screen chosen by the user
  changeBgColor = (newColor) => {
    this.setState({ bgColor: newColor });
  };

  colors = {
    black: "#090C08",
    navy: "#474056",
    blue: "#8A95A5",
    green: "#B9C6AE",
  };

  render() {

    return (
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImage}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <View style={styles.titleBox}>
            <Text style={styles.title}>Mobile Chat</Text>
          </View>

          <View style={styles.box1}>
            <View style={styles.inputBox}>
              <Image source={userIcon} style={styles.iconStyle}/>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}
                placeholder="Enter Username"
              />
            </View>    
            
            <View style={styles.colorBox}>
              <Text style={styles.chooseColor}>
                {" "}
                Choose a theme:{" "}
              </Text>
            </View>

            {/* All the colors to change the background are here! */}
            <View style={styles.colorArray}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="red blackground"
                accessibilityHint="Allows you to add a black background to the chat"
                accessibilityRole="button"
                style={styles.color1}
                onPress={() => this.changeBgColor(this.colors.black)}
              ></TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="green blackground"
                accessibilityHint="Allows you to add a navy blue background to the chat"
                accessibilityRole="button"
                style={styles.color2}
                onPress={() => this.changeBgColor(this.colors.navy)}
              ></TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="gold blackground"
                accessibilityHint="Allows you to add a light blue background to the chat"
                accessibilityRole="button"
                style={styles.color3}
                onPress={() => this.changeBgColor(this.colors.blue)}
              ></TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="pink blackground"
                accessibilityHint="Allows you to add a light green background to the chat"
                accessibilityRole="button"
                style={styles.color4}
                onPress={() => this.changeBgColor(this.colors.green)}
              ></TouchableOpacity>
              
            </View>

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
        </ImageBackground>   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  titleBox: {
    height: "50%",
    width: "88%",
    alignItems: "center",
    paddingTop: 100,
  },

  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  box1: {
    backgroundColor: "white",
    height: "46%",
    width: "88%",
    justifyContent: "space-around",
    alignItems: "center",
    //padding: 10
  },

  inputBox: {
    borderWidth: 2,
    borderRadius: 1,
    borderColor: "grey",
    width: "88%",
    height: 60,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  input: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
  },

  colorBox: {
    marginRight: "auto",
    paddingLeft: 15,
    width: "88%",
  },

  chooseColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
  },

  colorArray: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingRight: 60
  },

  color1: {
    backgroundColor: "#090C08",
    width: 50,
    height: 50,
    borderRadius: 25,
    //marginLeft: 10,
    marginRight: 10,
  },

  color2: {
    backgroundColor: "#474056",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },

  color3: {
    backgroundColor: "#8A95A5",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },

  color4: {
    backgroundColor: "#B9C6AE",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },

  startButton: {
    width: "88%",
    height: 70,
    backgroundColor: '#757083',
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  iconStyle: {
    height: 20,
    width: 20,
    marginRight: 10
  }
});