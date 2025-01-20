import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { theme } from '@theme/index';
import { useTheme } from '@contexts/Theme';
import Text from '@components/Text';
import { useNavigation } from '@react-navigation/native';

type Props = {
  lastScreen: string;
}

export default function HeaderBack({ lastScreen } : Props) {
  const colorTheme = useTheme();
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity onPress={handleGoBack} style={[styles.container, { marginTop: top + theme.spacing.margin }]}>
      <FontAwesome name="chevron-left" size={16} color={colorTheme.blue} />
      <View style={{ marginLeft: theme.spacing.margin }} >
        <Text type='callout' fontColor={colorTheme.blue} >{lastScreen}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});