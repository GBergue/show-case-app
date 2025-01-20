import { StyleSheet, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Text from '@components/Text';
import { theme } from '@theme/index';
import DeviceGroups from './components/DeviceGroups';
import DevicesList from './components/DevicesList';

export default function Devices() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: top }}>
      <View style={styles.containerHeader}>
        <Text type='large'>Devices</Text>
        <AntDesign name="plus" size={24} color="black" />
      </View>

      <DeviceGroups />

      <DevicesList />

    </View>
  )
}

export const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.margin,
    paddingHorizontal: theme.spacing.containerPadding,
  },
});