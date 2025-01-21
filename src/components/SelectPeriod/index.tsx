import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Text from "@components/Text";
import { lightTheme, theme } from "@theme/index";

const PERIODS: Period[] = ["D", "W", "M", "Y"];

export type Period = "D" | "W" | "M" | "Y";

interface Props {
  selected: Period;
  setSelected: (p: Period) => void;
}

interface PropsButton {
  value: Period;
  isSelected: boolean;
  onPress: VoidFunction;
}

export default function SelectPeriod({ selected, setSelected }: Props) {
  function handleSelect(p: Period) {
    setSelected(p);
  }

  return (
    <View style={styles.container}>
      {PERIODS.map((p) => (
        <PeriodButton
          key={p}
          isSelected={p === selected}
          value={p}
          onPress={() => handleSelect(p)}
        />
      ))}
    </View>
  );
}

function PeriodButton({ value, isSelected, onPress }: PropsButton) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isSelected ? styles.containerButtonSelected : styles.containerButton
      }
    >
      <Text type="body">{value}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: lightTheme.lightGray,
    padding: 2,
    borderRadius: 4,
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  containerButtonSelected: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightTheme.white,
    borderRadius: 4,
  },
});
