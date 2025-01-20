import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from '@components/Text';
import { theme } from '@theme/index';
import { GroupBean } from './type';
import { useTheme } from '@contexts/Theme';

interface Props {
  group: GroupBean;
}

export default function CardGroup({ group }: Props) {
  const colorTheme = useTheme();

  const qtdDevices = group.devices?.length || 0;

  return (
    <View style={styles.container}>
      <Text type='body'>{group.name}</Text>
      <Text type='callout' fontColor={colorTheme.gray}>{qtdDevices} {qtdDevices > 1 ? 'devices': 'device'}</Text>
      
      <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
        <Image resizeMode='contain' source={{ uri: group.img }} style={styles.image} />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    backgroundColor: '#FFF',
    borderRadius: theme.spacing.borderRadius,
    padding: theme.spacing.margin,
  },
  image:{
    height: 75,
    width: 75,
  },
});