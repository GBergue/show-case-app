import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import CardDevice from '@components/CardDevice';
import { DeviceBean } from '@components/CardDevice/type';
import { useNavigation } from '@react-navigation/native';

interface Props {
  data: DeviceBean[];
}

export default function HorizontalDeviceList({ data }: Props) {
  const navigation = useNavigation();

  function navigateToDetails(id: string) {
    navigation.navigate('DeviceDetails', { id });
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      data={data}
      renderItem={({ item }) => <CardDevice navigateToDetails={() => navigateToDetails(item.id)} device={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
  }
});