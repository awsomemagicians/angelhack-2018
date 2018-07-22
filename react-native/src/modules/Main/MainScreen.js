import React from 'react';
import { StyleSheet, View } from 'react-native';

import NavigationHeaderBackground from '../../components/NavigationHeaderBackground/NavigationHeaderBackground.component';
import NavigationHeaderTitle from '../../components/NavigationHeaderTitle/NavigationHeaderTitle.component';
import Accordion from '../../components/Accordion/Accordion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const MainScreen = props => (
  <View style={styles.container}>
    <Accordion {...props} />
  </View>
);

MainScreen.navigationOptions = {
  headerBackground: <NavigationHeaderBackground />,
  headerTitle: () => <NavigationHeaderTitle title="Your parking activities" />,
};

export default MainScreen;
