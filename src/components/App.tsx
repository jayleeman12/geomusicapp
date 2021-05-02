import React, { useEffect, useState } from 'react';
import geolocation from '@react-native-community/geolocation';
import MusicMap from './MusicMap';
import { Location } from '../types';
import { ActivityIndicator, View } from 'react-native';
import { height, width } from '../dimensions';

const App = () => {
  const [userLocation, setUserLocation] = useState<Location>();
  // TODO: You can solve permissions with MapboxGL.permission w/e
  useEffect(() => {
    geolocation.getCurrentPosition((location) => {
      setUserLocation({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      });
    }, (err) => console.log(err));
  }, []);
  if (!userLocation) return (
    <View style={{ flex: 1, width: width(), height: height(), justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, width: '80%', height: '50%' }}>
        <ActivityIndicator size={100} color='blue' style={{ width: '100%', height: '100%' }} />
      </View>
    </View>);
  return <MusicMap userLocation={userLocation} />;
}

export default App;
