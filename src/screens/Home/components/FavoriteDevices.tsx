import React from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from '@theme/index';
import { MOCK_DEVICES } from '../../../data/mock';
import HorizontalDeviceList from '@components/HorizontalDeviceList';
import CardTitle from '@components/CardTitle';

export default function FavoriteDevices() {
  const FAVORITE_DEVICES = MOCK_DEVICES.filter(d => d.favorite);

  return (
    <View style={styles.container}>
      <CardTitle title='Favorite devices' />

      <HorizontalDeviceList data={FAVORITE_DEVICES} />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.containerPadding,
    paddingBottom: theme.spacing.containerPadding,
  },
});