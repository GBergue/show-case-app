import MiniChart from "@components/MiniChart";
import Text from "@components/Text";
import { useTheme } from "@contexts/Theme";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { theme } from "@theme/index";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  color: string;
  name: string;
  date: string;
  value: ReactNode;
  icon: ReactNode;
}

export default function CardGraph({ color, date, name, value,icon }: Props) {
  const colorTheme = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.chartContainer, { backgroundColor: colorTheme.background }]}>
        <View style={styles.rowContainer}>
          <View style={styles.rowContainerCentralized}>
            {icon}
            <View style={{ marginLeft: theme.spacing.shortMargin }} />
            <Text fontColor={color} type="body">{name}</Text>
          </View>
          
          <View style={styles.rowContainerCentralized}>
            <Text type="callout" fontColor={colorTheme.gray}>{date}</Text>
            <View style={{ marginLeft: theme.spacing.margin }}>
              <FontAwesome5 name="chevron-right" size={12} color={colorTheme.gray} />
            </View>
          </View>
        </View>

        <View style={styles.rowContainerGraph}>
          {value}
          <MiniChart color={color} />
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
  },
  chartContainer: {
    borderRadius: theme.spacing.borderRadius,
    padding: theme.spacing.margin,
  },
  rowContainerCentralized: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.containerPadding,
  },
  rowContainerGraph: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
