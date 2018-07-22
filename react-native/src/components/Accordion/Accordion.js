import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import includes from 'lodash/includes';
import filter from 'lodash/filter';
import toNumber from 'lodash/toNumber';

import Touchable from '../Touchable/Touchable.component';

import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';

const CONTENT = [
  {
    title: 'Today',
    total: '30.0000',
    data: [
      {
        id: '1',
        fee: '19.000',
        beginAt: Date(),
        address: '126 Nguyen Thi Minh Khai, Dist 1, HCM',
        parkTime: '13 min',
      },
      {
        id: '2',
        fee: '11.000',
        beginAt: Date(),
        address: '343 To Hien Thanh, Dist 10, HCM',
        parkTime: '25 min',
      },
    ],
  },
  {
    title: 'This month',
    total: '223.0000',
    data: [
      {
        id: '3',
        fee: '15.000',
        beginAt: new Date(2018, 7, 22, 1, 23),
        address: '13 Phan Huy Ich, Dist 11, HCM',
        parkTime: '15 min',
      },
      {
        id: '4',
        fee: '50.000',
        beginAt: new Date(2018, 7, 20, 5, 2),
        address: '12 Thanh Thai, Dist 1-, HCM',
        parkTime: '50 min',
      },
      {
        id: '5',
        fee: '5.000',
        beginAt: new Date(2018, 7, 18, 17, 5),
        address: '124/46/2 CMT8, Dist 10, HCM',
        parkTime: '15 min',
      },
      {
        id: '6',
        fee: '5.000',
        beginAt: new Date(2018, 7, 15, 3, 23),
        address: '126 Nguyen Thi Minh Khai, Dist 1, HCM',
        parkTime: '15 min',
      },
      {
        id: '7',
        fee: '5.000',
        beginAt: new Date(2018, 7, 14, 13, 23),
        address: '126 Nguyen Thi Minh Khai, Dist 1, HCM',
        parkTime: '10 min',
      },
      {
        id: '8',
        fee: '5.000',
        beginAt: new Date(2018, 7, 12, 13, 23),
        address: '126 Nguyen Thi Minh Khai, Dist 1, HCM',
        parkTime: '35 min',
      },
    ],
  },
];

// const SELECTORS = [
//   {
//     title: 'Today',
//     value: 0,
//   },
//   {
//     title: 'This month',
//     value: 1,
//   },
//   {
//     title: 'All',
//     value: false,
//   },
// ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

// const SelectionMenu = ({ activeSection }) => (
//   <View style={styles.selectors}>
//     <Text style={styles.selectTitle}>Select:</Text>
//     {SELECTORS.map(selector => (
//       <Touchable key={selector.title}>
//         <View style={styles.selector}>
//           <Text style={selector.value === activeSection && styles.activeSelector}>
//             {selector.title}
//           </Text>
//         </View>
//       </Touchable>
//     ))}
//   </View>
// );

class AccordionComponent extends PureComponent {
  state = {
    activeSections: [0, 1],
  };

  _onChange = i => {
    const index = toNumber(i);
    if (includes(this.state.activeSections, index)) {
      this.setState(({ activeSections }) => ({
        activeSections: filter(activeSections, section => section === index),
      }));
    } else {
      this.setState(({ activeSections }) => ({
        activeSections: [...activeSections, index],
      }));
    }
  };
  _renderContent = (section, i, isActive) => <AccordionContent isActive={isActive} {...section} />;

  _renderHeader = (section, i, isActive) => <AccordionHeader isActive={isActive} {...section} />;

  render() {
    return (
      <View style={styles.container}>
        {/*<SelectionMenu />*/}
        <Accordion
          activeSections={this.state.activeSections}
          sections={CONTENT}
          touchableComponent={Touchable}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._onChange}
        />
      </View>
    );
  }
}

export default AccordionComponent;
