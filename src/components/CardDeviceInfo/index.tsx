import Text from "@components/Text";
import { useTheme } from "@contexts/Theme";
import { theme } from "@theme/index";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  label: string;
  value: string;
  icon: ReactNode;
}

export default function CardDeviceInfo({ label, value, icon }: Props) {
  const colorTheme = useTheme();

  return (
    <View
      style={{
        borderRadius: theme.spacing.borderRadius,
        backgroundColor: colorTheme.white,
        width: '100%',
        height: 71,
        padding: theme.spacing.margin,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
        {icon}
        <View style={{ marginLeft: theme.spacing.margin }}>
          <Text type="callout">{label}</Text>
          <Text type="title2">{value}</Text>
        </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.containerPadding,
    marginTop: theme.spacing.margin,
    paddingHorizontal: theme.spacing.containerPadding,
  },
  centralizeButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.containerPadding,
  },
});
