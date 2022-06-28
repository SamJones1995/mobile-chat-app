import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Location from "expo-location";




export default class Start extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      location: {}
    };
  }

 

  // function to update the bgColor state with the new background color for Chat Screen chosen by the user
  getLocation = async () => {
    // permission to access user location while the app is in the foreground
    const { status } = await Location.requestForegroundPermissionsAsync();
    
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync()
          this.setState({
            location
          })
        }
    
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.title}>ThruHiker</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

      <Pressable
      style={styles.mapButton}
              accessible={true}
              accessibilityLabel="Go to the map page"
              accessibilityHint="Allows you to go to the map page"
              accessibilityRole="button"
              onPress={() => this.props.navigation.navigate('Maps', {
                location: this.state.location
              })}

              
            ><Text style={styles.containerText}>Map </Text>
              </Pressable>
              <Pressable
      style={styles.foodButton}
              accessible={true}
              accessibilityLabel="Go to the food page"
              accessibilityHint="Allows you to go to the food page"
              accessibilityRole="button"
              onPress={() => this.props.navigation.navigate('food')}
              
            ><Text style={styles.containerText}>Food</Text>
              </Pressable>
              <Pressable
      style={styles.resupplyButton}
              accessible={true}
              accessibilityLabel="Go to the resupply page"
              accessibilityHint="Allows you to go to the resupply page"
              accessibilityRole="button"
              onPress={() => this.props.navigation.navigate('resupply')}
              
            ><Text style={styles.containerText}>Resupply</Text>
              </Pressable>
              <Pressable
      style={styles.lodgingButton}
              accessible={true}
              accessibilityLabel="Go to the lodging page"
              accessibilityHint="Allows you to go to the lodging page"
              accessibilityRole="button"
              onPress={() => this.props.navigation.navigate('Lodging')}
              
            ><Text style={styles.containerText}>Lodging</Text>
              </Pressable>
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
