import CardGroup from '@components/CardGroup';
import CardTitle from '@components/CardTitle';
import { theme } from '@theme/index';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MOCK_DEVICES } from '../../../data/mock';
import CardDevice from '@components/CardDevice';
import { useNavigation } from '@react-navigation/native';


export default function DevicesList() {
  const navigation = useNavigation();
  
  function navigateToDetails(id: string) {
    navigation.navigate('DeviceDetails', { id });
  }

  return (
    <View style={styles.container}>
      <CardTitle title='Devices' />
      
      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        data={MOCK_DEVICES}
        renderItem={({ item }) => <CardDevice navigateToDetails={() => navigateToDetails(item.id)} device={item} />}
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