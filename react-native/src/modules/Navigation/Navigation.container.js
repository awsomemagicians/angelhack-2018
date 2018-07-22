import React from 'react';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import ProfileStack from './Stacks/ProfileStack';
import MainStack from './Stacks/MainStack';
import DashboardStack from './Stacks/DashboardStack';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const RootNavigator = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        tabBarColor: '#6200ee',
      },
    },
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarColor: '#00796b',
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarColor: '#2962ff',
      },
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    shifting: true,
    labeled: false,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Main') {
          return (
            <MaterialIcons
              name="home"
              size={24}
              style={{ backgroundColor: 'transparent' }}
              color={tintColor}
            />
          );
        } else if (routeName === 'Profile') {
          return (
            <MaterialCommunityIcons
              style={{ backgroundColor: 'transparent' }}
              name="face-profile"
              color={tintColor}
              size={24}
            />
          );
        } else if (routeName === 'Dashboard') {
          return (
            <FontAwesome
              style={{ backgroundColor: 'transparent' }}
              name="dashboard"
              color={tintColor}
              size={24}
            />
          );
        }
      },
    }),
  }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
