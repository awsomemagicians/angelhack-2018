import React from 'react';

import NavigationHeaderBackground from '../../components/NavigationHeaderBackground/NavigationHeaderBackground.component';
import NavigationHeaderTitle from '../../components/NavigationHeaderTitle/NavigationHeaderTitle.component';

import ProfileView from './Profile.view';

const ProfileScreen = props => <ProfileView {...props} />;

ProfileScreen.navigationOptions = {
  headerBackground: <NavigationHeaderBackground />,
  headerTitle: () => <NavigationHeaderTitle title="Profile" />,
};

export default ProfileScreen;
