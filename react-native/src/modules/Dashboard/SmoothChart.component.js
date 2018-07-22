import React from 'react';
import { View, Dimensions } from 'react-native';
import { RkComponent, RkText, RkTheme } from 'react-native-ui-kitten';
import { VictoryChart, VictoryAxis, VictoryArea } from 'victory-native';

const Colors = {
  followersFirst: '#2942ff',
  followersSecond: '#1b2ba6',
  followersThird: '#081c6e',
  followersFourth: '#09103f',
  text: {
    base: '#fff',
    secondary: '#fff',
  },
};

export default class AreaSmoothedChart extends RkComponent {
  constructor(props) {
    super(props);
    this.colors = [
      Colors.followersFirst,
      Colors.followersSecond,
      Colors.followersThird,
      Colors.followersFourth,
    ];
    this.data = [
      [
        { x: 1, y: 1.0, key: 0 },
        { x: 2, y: 1.5, key: 1 },
        { x: 3, y: 1.0, key: 2 },
        { x: 4, y: 0.5, key: 3 },
        { x: 5, y: 1.0, key: 4 },
        { x: 6, y: 2.0, key: 5 },
        { x: 7, y: 2.5, key: 6 },
      ],
      [
        { x: 1, y: 1.5, key: 0 },
        { x: 2, y: 2.0, key: 1 },
        { x: 3, y: 1.5, key: 2 },
        { x: 4, y: 0.8, key: 3 },
        { x: 5, y: 1.5, key: 4 },
        { x: 6, y: 2.6, key: 5 },
        { x: 7, y: 3.3, key: 6 },
      ],
      [
        { x: 1, y: 2.0, key: 0 },
        { x: 2, y: 2.5, key: 1 },
        { x: 3, y: 2.0, key: 2 },
        { x: 4, y: 1.1, key: 3 },
        { x: 5, y: 2.0, key: 4 },
        { x: 6, y: 3.2, key: 5 },
        { x: 7, y: 4.0, key: 6 },
      ],
      [
        { x: 1, y: 2.5, key: 0 },
        { x: 2, y: 3.0, key: 1 },
        { x: 3, y: 2.5, key: 2 },
        { x: 4, y: 1.4, key: 3 },
        { x: 5, y: 2.5, key: 4 },
        { x: 6, y: 3.7, key: 5 },
        { x: 7, y: 4.7, key: 6 },
      ],
    ];
  }

  componentWillMount() {
    this.size = Dimensions.get('window').width;
  }

  render() {
    return (
      <View style={this.props.style}>
        <RkText rkType="header4">SPEDING PER MONTH</RkText>
        <VictoryChart padding={{ top: 20, left: 40, right: 15, bottom: 40 }} width={this.size - 60}>
          <VictoryAxis
            tickValues={['2', '3', '4', ' 5', '6', '7', '8']}
            style={{
              axis: { stroke: 'transparent' },
              tickLabels: {
                fontSize: 14,
                stroke: RkTheme.current.colors.text.secondary,
                fill: RkTheme.current.colors.text.secondary,
                strokeWidth: 0.5,
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickValues={['50k', '200k', '500k', '1m']}
            style={{
              axis: { stroke: 'transparent' },
              grid: { stroke: RkTheme.current.colors.disabled, strokeWidth: 0.5 },
              tickLabels: {
                fontSize: 14,
                stroke: RkTheme.current.colors.text.secondary,
                fill: RkTheme.current.colors.text.secondary,
                strokeWidth: 0.5,
              },
            }}
          />
          {this.data.reverse().map((a, i) => (
            <VictoryArea
              key={i}
              interpolation="natural"
              style={{
                data: {
                  fill: this.colors[i],
                  stroke: this.colors[i],
                },
              }}
              data={a}
            />
          ))}
        </VictoryChart>
      </View>
    );
  }
}
