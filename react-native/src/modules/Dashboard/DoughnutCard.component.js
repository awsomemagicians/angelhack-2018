import React from 'react';
import { View, Dimensions } from 'react-native';
import { RkComponent, RkText, RkStyleSheet } from 'react-native-ui-kitten';
import { VictoryPie } from 'victory-native';
import { Svg } from 'expo';

const { width } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const scale = size => (width / guidelineBaseWidth) * size;

export default class DoughnutChart extends RkComponent {
  constructor(props) {
    super(props);
    this.size = 300;
    this.fontSize = 40;
    this.state = {
      selected: 0,
      data: [
        {
          x: 1,
          y: 240,
          title: '24%',
          name: 'Toong',
          color: '#EA3556',
        },
        {
          x: 2,
          y: 270,
          title: '27%',
          name: 'Up',
          color: '#EDDE45',
        },
        {
          x: 3,
          y: 170,
          title: '17%',
          name: 'Home',
          color: '#ED146F',
        },
        {
          x: 4,
          y: 320,
          title: '32%',
          name: 'Coffee House Dist 10',
          color: '#61D2D6',
        },
      ],
    };
  }

  computeColors() {
    return this.state.data.map(i => i.color);
  }

  handlePress(e, props) {
    this.setState({
      selected: props.index,
    });
  }

  render() {
    return (
      <View style={this.props.style}>
        <RkText rkType="header4">TOP VISITED PLACES</RkText>
        <View style={{ alignSelf: 'center' }}>
          <Svg width={scale(this.size)} height={scale(this.size)}>
            <VictoryPie
              labels={[]}
              width={scale(this.size)}
              height={scale(this.size)}
              colorScale={this.computeColors()}
              data={this.state.data}
              standalone={false}
              padding={scale(25)}
              innerRadius={scale(70)}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPressIn: (evt, props) => this.handlePress(evt, props),
                  },
                },
              ]}
            />
            <Svg.Text
              textAnchor="middle"
              verticalAnchor="middle"
              x={scale(this.size / 2)}
              y={scale(this.size / 2 - this.fontSize / 2)}
              dy={scale(this.fontSize - 10)}
              height={scale(this.fontSize)}
              fontSize={scale(this.fontSize)}
              stroke={'black'}
              fill={'blue'}>
              {this.state.data[this.state.selected].title}
            </Svg.Text>
          </Svg>
        </View>
        <View style={styles.legendContainer}>
          {this.state.data.map(item => (
            <View key={item.name} style={styles.legendItem}>
              <View style={[styles.itemBadge, { backgroundColor: item.color }]} />
              <RkText rkType="primary3">{item.name}</RkText>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
}));
