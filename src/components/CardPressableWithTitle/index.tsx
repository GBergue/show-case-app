import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import Text from '@components/Text';
import { theme } from '@theme/index';

interface Props {
  children: ReactNode,
  title: string,
}

export default function CardPressableWithTitle({ children, title }: Props) {
  return (
    <View style={styles.container}>
      <Text type='title2'>{title}</Text>
      
      {children}
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.containerPadding,
  }
});