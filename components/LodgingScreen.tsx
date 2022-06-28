import { StyleSheet, Pressable, Dimensions } from 'react-native';
import React from 'react';

import { Text, View } from 'react-native';


export default class LodgingScreen extends React.Component<any, any> {
  render() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Lodging</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  mapButton: {
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    left: 0,
    bottom: 0,
    height: '35%',
    width: '50%',
    backgroundColor: 'green'
  },
  foodButton: {
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    right: 0,
    bottom: 0,
    height: '35%',
    width: '50%',
    backgroundColor: 'orange'
  },
  resupplyButton: {
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    left: 0,
    top: 0,
    height: '35%',
    width: '50%',
    backgroundColor: 'orange'
  },
  lodgingButton: {
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    right: 0,
    top: 0,
    height: '35%',
    width: '50%',
    backgroundColor: 'green'
  },
  containerText: {
    position: 'absolute',
    bottom: '41%',
    fontSize: 30,
    fontWeight: 'bold',

  },
});
