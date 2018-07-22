import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

import Touchable from '../Touchable/Touchable.component';

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  left: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 12,
  },
  light: { fontWeight: '200', color: 'rgba(0,0,0,0.7)' },
  address: {
    maxWidth: 150,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

const AccordionItem = ({ isActive, content, parkTime, beginAt, address, fee, onPressItem }) => (
  <Touchable style={[styles.content]} onPress={onPressItem}>
    <View style={styles.left}>
      <Ionicons style={styles.icon} name="md-checkmark-circle" color="#19DD89" size={35} />
      <View>
        <Text>{`${parkTime} parking ${moment(beginAt).format('DD/MM')}`}</Text>
        <Text style={[styles.light, styles.address]} ellipsizeMode="tail" numberOfLines={1}>
          {address}
        </Text>
      </View>
    </View>
    <View>
      <Text style={styles.bold}>{moment(beginAt).format('HH:mm A')}</Text>
      <Text style={styles.bold}>{`${fee} VND`}</Text>
    </View>
  </Touchable>
);

class AccordionContent extends PureComponent {
  _keyExtractor = item => item.id;

  _onPressItem = id => {
    // console.log(id);
  };

  _renderItem = ({ item }) => (
    <AccordionItem id={item.id} onPressItem={this._onPressItem} {...item} />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default AccordionContent;
