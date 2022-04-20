import React from 'react';
import { View, Text} from 'react-native';


export default class Screen2 extends React.Component {
  render() {
    //name state from Start.js is displayed on status bar
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
    
    const { bgColor } = this.props.route.params;

    
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor}}>
        <Text>Hello Screen2!</Text>
      </View>
    )
  }
}