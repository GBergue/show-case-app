import CardTitle from "@components/CardTitle";
import { theme } from "@theme/index";
import React, { useState } from "react";
import { View } from "react-native";
import Graph from "./Graph";
import { useTheme } from "@contexts/Theme";
import SelectPeriod from "@components/SelectPeriod";

export default function EnergyConsumption() {
  const [graphFilter, setGraphFilter] = useState("D");
  const colorTheme = useTheme();

  function getLabel() {
    if (graphFilter === 'D') return { label: 'Hour', x: 24 };
    if (graphFilter === 'W') return 'Day of week';
    if (graphFilter === 'M') return 'Hour';
  }

  return (
    <View>
      <CardTitle title="Energy cosumption" />

      <View
        style={{
          backgroundColor: colorTheme.white,
          padding: theme.spacing.margin,
          borderRadius: theme.spacing.borderRadius,
        }}
      >
        <SelectPeriod selected={graphFilter} setSelected={setGraphFilter} />
        <View style={{ marginBottom: theme.spacing.containerPadding }} />
        <Graph DATA={generateMockData(24)} xKey="x" xLabel="Hour" />
      </View>
    </View>
  );
}

function generateMockData(index: number) {
  return Array.from({ length: index }, (_, i) => ({
    x: i,
    consumption: 40 + 30 * Math.random(),
  }));
}
