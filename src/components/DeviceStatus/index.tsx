import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from '@components/Text';
import { theme } from '@theme/index';
import { useTheme } from '@contexts/Theme';

interface Props {
  status: 'online' | 'offline',
}

export default function DeviceStatus({ status }: Props) {
  const colorTheme = useTheme();
  const isOnline = status === 'online';
  const backgroundColor = isOnline ? '#B7FDE0': '#F2F2F2';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={isOnline ?  styles.statusOnlineCircle : styles.statusOfflineCircle} />
      <Text type='caption1' fontColor={isOnline ? '#005e37': colorTheme.gray} >{status}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    borderRadius: theme.spacing.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  statusOnlineCircle: {
    backgroundColor: '#005e37',
    borderRadius: 6,
    width: 6,
    height: 6,
    marginRight: 4,
  },
  statusOfflineCircle: {
    backgroundColor: '#979797',
    borderRadius: 6,
    width: 6,
    height: 6,
    marginRight: 4,
  }
});