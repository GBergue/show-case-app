import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '@components/Text'
import { theme } from '@theme/index';
import { MOCK_DEVICES } from '../../../data/mock';
import HorizontalDeviceList from '@components/HorizontalDeviceList';
import CardTitle from '@components/CardTitle';


function IndicatorQuantityDevices() {
  const qtdOnline = 4;
  const qtdOffline = 5;

  return (
    <View style={styles.containerQtd}>
      <View style={styles.onlineCircle} />
      <Text>{qtdOnline}<Text fontColor='#979797' >/{qtdOffline}</Text></Text>
    </View>
  )
}

export default function OnlineDevices() {
  const ONLINE_DEVICES = MOCK_DEVICES.filter(d => d.status === 'online');

  return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <CardTitle title="Online devices" />
          <IndicatorQuantityDevices />
        </View>
        
        <HorizontalDeviceList data={ONLINE_DEVICES} />
      </View>
    )
}

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.containerPadding,
    marginBottom: theme.spacing.containerPadding,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerQtd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineCircle: {
    backgroundColor: '#01C774',
    width: 6,
    height: 6,
    borderRadius: 6,
    marginRight:theme.spacing.margin,
  },
});