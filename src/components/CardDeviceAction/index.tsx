import Text from "@components/Text";
import { useTheme } from "@contexts/Theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "@theme/index";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
  label: string;
  value: string;
  icon: ReactNode;
  onPress: VoidFunction;
}

export default function CardDeviceAction({  label, onPress, value, icon }: Props) {
  const colorTheme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: theme.spacing.borderRadius,
        backgroundColor: colorTheme.white,
        width:'48%',
        height: 150,
        padding: theme.spacing.margin,
        justifyContent: 'space-between'
      }}
    >
        {icon}
        <View>
          <Text type="callout">{label}</Text>
          <Text type="title2">{value}</Text>
        </View>
    </TouchableOpacity>
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
