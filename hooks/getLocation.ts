import Location from 'expo-location';
import { useState } from 'react';

export function getLocation() {
  const [location, setLocation] = useState({});


  const setCurrentLocation = async () => {
  let { status } = await Location.requestPermissionsAsync();

    if (status === "granted") {
      let result = await Location.getCurrentPositionAsync({}).catch(
        (error) => {
          console.error(error);
        }
      );
      // Send latitude and longitude to locate the position on the map
      if (result) {
        console.log(result);
        setLocation(result);
      }
    }
  } 
  

};
