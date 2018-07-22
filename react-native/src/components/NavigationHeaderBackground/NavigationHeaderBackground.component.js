import React from 'react';
import { StyleSheet, Image } from 'react-native';

const NavigationHeaderBackground = () => (
  <Image
    style={StyleSheet.absoluteFill}
    source={{
      uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
    }}
  />
);

export default NavigationHeaderBackground;
