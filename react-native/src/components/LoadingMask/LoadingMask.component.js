import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './LoadingMask.component.style';

const LoadingMask = props => (
  <View style={[styles.container, props.style]}>
    <ActivityIndicator />
  </View>
);
LoadingMask.displayName = 'LoadingMask';

export default LoadingMask;
