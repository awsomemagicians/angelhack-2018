import React from 'react';

import NavigationHeaderBackground from '../../components/NavigationHeaderBackground/NavigationHeaderBackground.component';
import NavigationHeaderTitle from '../../components/NavigationHeaderTitle/NavigationHeaderTitle.component';

import Dashboard from './Dashboard.view';

const DashboardScreen = props => <Dashboard {...props} />;

DashboardScreen.navigationOptions = {
  headerBackground: <NavigationHeaderBackground />,
  headerTitle: () => <NavigationHeaderTitle title="Statistics" />,
};

export default DashboardScreen;
