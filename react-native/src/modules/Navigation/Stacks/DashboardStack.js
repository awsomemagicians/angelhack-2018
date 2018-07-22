import { createStackNavigator } from 'react-navigation';

import DashboardScreen from '../../Dashboard/DashboardScreen';

const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
});

export default DashboardStack;
