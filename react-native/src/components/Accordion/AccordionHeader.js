import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  headerText: {
    marginLeft: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  left: {
    flexDirection: 'row',
  },
});

const AccordionHeader = ({ isActive, title, total }) => (
  <Animatable.View
    duration={400}
    style={[styles.header, isActive ? styles.active : styles.inactive]}
    transition="backgroundColor">
    <View style={styles.left}>
      <Entypo name="triangle-down" color="#000" size={18} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
    <Text style={styles.headerText}>{`${total} VND`}</Text>
  </Animatable.View>
);

export default AccordionHeader;
