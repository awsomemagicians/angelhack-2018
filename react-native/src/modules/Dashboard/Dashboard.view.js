import React from 'react';
import { ScrollView } from 'react-native';

import DoughnutCard from './DoughnutCard.component';
import SmoothChart from './SmoothChart.component';

const Dashboard = () => (
  <ScrollView style={{ flex: 1, width: '100%', padding: 24 }}>
    <DoughnutCard style={{ padding: 24, backgroundColor: '#fff' }} />
    <SmoothChart style={{ padding: 24, backgroundColor: '#fff', marginTop: 24 }} />
  </ScrollView>
);

export default Dashboard;
