import CardGroup from '@components/CardGroup';
import CardTitle from '@components/CardTitle';
import { theme } from '@theme/index';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MOCK_GROUPS } from '../../../data/mock';

export default function DeviceGroups() {
  return (
    <View style={styles.container}>
      <CardTitle title='Devices groups' />
      
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        data={MOCK_GROUPS}
        renderItem={({ item }) => <CardGroup group={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.containerPadding,
    paddingBottom: theme.spacing.containerPadding,
  },
});