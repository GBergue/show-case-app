import Text from '@components/Text'
import AntDesign from '@expo/vector-icons/AntDesign'
import { theme } from '@theme/index'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import OnlineDevices from './components/OnlineDevices'
import Statistics from './components/Statistics'
import FavoriteDevices from './components/FavoriteDevices'

export default function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView style={{ paddingTop: top }} showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeader}>
        <Text type='large'>Home</Text>
        <AntDesign name="plus" size={24} color="black" />
      </View>

      <OnlineDevices />

      <Statistics />

      <FavoriteDevices />

      <View style={{ height: 30 }} />
    </ScrollView>
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