import { StyleSheet, Pressable, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';

import { Text, View } from 'react-native';


export default class MapScreen extends React.Component<any, any> {

  state = {
    latitude: 0,
    longitude: 0
  };

  

//   componentDidMount() {
//   this.setState({
//     latitude: location.longitude,
//     longitude: location.logitude
//   })
// }
  render() {
    const { location } = this.props.route.params;
  return (
    <View style={styles.container}>
      <MapView
      
        style={{ width: '100%',height: '100%' }}
         mapType='hybrid'
         loadingEnabled = {true}
           initialRegion={{
             latitude: location.coords.latitude,
             longitude: location.coords.longitude,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
        

    />
      
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
