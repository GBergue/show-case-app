import { View } from 'react-native'
import React from 'react'
import Text from '@components/Text';
import { theme } from '@theme/index';

interface Props {
  title: string;
}

export default function CardTitle({ title }: Props) {
  return (
    <View style={{ marginBottom: theme.spacing.margin }}>
      <Text type='title2'>{title}</Text>
    </View>
  )
}

