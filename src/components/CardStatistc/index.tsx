import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from '@components/Text';

interface Props {
 
}

export default function CardStatistc({  }: Props) {
  return (
    <View style={styles.container}>
      <Text type='text'>{icon}{name}</Text>
      <Text type='text'>date</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
  }
});