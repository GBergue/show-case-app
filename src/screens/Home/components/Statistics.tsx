import CardGraph from "@components/CardGraph";
import CardTitle from "@components/CardTitle";
import MyChart from "@components/Chart";
import Text from "@components/Text";
import { useTheme } from "@contexts/Theme";
import { theme } from "@theme/index";
import React from "react";
import { StyleSheet, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Statistics() {
  const colorTheme = useTheme();

  return (
    <View style={styles.container}>
      <CardTitle title="Statistics" />

      <CardGraph
        color="#005e37"
        name="Energy"
        date="Jan 2025"
        icon={<FontAwesome name="flash" size={16} color={'#005e37'} />}
        value={
          <View>
            <Text type="caption1" fontColor={colorTheme.gray}>Energy waste</Text>
            <Text type="title2">400 <Text type="caption1" fontColor={colorTheme.gray}>kWh</Text></Text>
          </View>
        }
      />

      <View style={{ marginBottom: theme.spacing.margin }}></View>

      <CardGraph
        color="#305CDE"
        name="Time"
        date="Today"
        icon={<FontAwesome5 name="clock" size={16} color={'#305CDE'} />}
        value={
          <View>
            <Text type="caption1" fontColor={colorTheme.gray}>Most time online</Text>
            <Text type="title2">12 <Text type="caption1" fontColor={colorTheme.gray}>h</Text> 40<Text type="caption1" fontColor={colorTheme.gray}> min</Text></Text>
          </View>
        }
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.containerPadding,
    marginBottom: theme.spacing.containerPadding,
  },
  chartContainer: {
    borderRadius: theme.spacing.borderRadius,
    padding: theme.spacing.margin,
  },
});
