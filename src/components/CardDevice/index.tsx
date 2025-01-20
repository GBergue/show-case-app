import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Text from '@components/Text';
import { DeviceBean } from './type';
import DeviceStatus from '@components/DeviceStatus';
import { theme } from '@theme/index';

interface Props {
  device: DeviceBean;
  navigateToDetails: VoidFunction;
}

export default function CardDevice({ device, navigateToDetails }: Props) {
  return (
    <TouchableOpacity onPress={navigateToDetails} style={styles.container}>
      <Text type='body'>{device.name}</Text>
      <View style={{ flexDirection: 'row', marginTop: theme.spacing.margin }} >
        <Text type='caption1'>Status: </Text>
        <View style={{ marginLeft: theme.spacing.shortMargin }}>
          <DeviceStatus status={device.status} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
        <Image resizeMode='contain' source={{ uri: device.img }} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    backgroundColor: '#FFF',
    borderRadius: theme.spacing.borderRadius,
    padding: theme.spacing.margin,
  },
  image:{
    height: 75,
    width: 75,
  },
});