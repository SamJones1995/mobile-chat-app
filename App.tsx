import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Alert,
} from "react-native";
// import react native gesture handler
import "react-native-gesture-handler";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./components/Start";
import LodgingScreen from "./components/LodgingScreen";
import MapScreen from "./components/MapScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { 
      text: "",
      location: null
     };
  }

  

  // alert the user input
  alertMyText(input: any = []) {
    Alert.alert(input.text);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Lodging" component={LodgingScreen} />
          <Stack.Screen name="Maps" component={MapScreen} />
          

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
