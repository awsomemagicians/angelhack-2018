import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
});

const ProfileItem = ({ title, content }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12 }}>
    <Text style={{ fontWeight: '300', color: 'rgba(0,0,0,0.7)' }}>{title}</Text>
    <Text style={{ fontWeight: 'bold' }}>{content}</Text>
  </View>
);

const Profile = props => (
  <View style={styles.container}>
    <View style={{ width: '100%', alignItems: 'center', marginBottom: 12 }}>
      <Avatar
        large
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
        activeOpacity={0.7}
      />
    </View>
    <Text style={{ fontWeight: 'bold', marginBottom: 24 }}>INFO</Text>
    <View>
      <ProfileItem title="Name" content="Vu Ngoc Linh" />
      <ProfileItem title="Plate number" content="51 - 58382" />
      <ProfileItem title="Email" content="linhVu@gmail.com" />
      <ProfileItem title="Phone" content="01646339445" />
      <ProfileItem title="Remaining credit" content="165.000 VND" />
    </View>
  </View>
);

export default Profile;
