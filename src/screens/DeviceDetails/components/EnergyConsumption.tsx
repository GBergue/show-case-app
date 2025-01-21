import CardTitle from "@components/CardTitle";
import { theme } from "@theme/index";
import React, { memo, useState } from "react";
import { View } from "react-native";
import Graph from "./Graph";
import { useTheme } from "@contexts/Theme";
import SelectPeriod, { Period } from "@components/SelectPeriod";

const EnergyConsumption = memo(function EnergyConsumptionComponent() {
  const [graphFilter, setGraphFilter] = useState<Period>("D");
  const colorTheme = useTheme();
  const { label, x, formatXLabel } = getLabel(graphFilter);

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
        
        <Graph data={generateMockData(x)} xKey="x" xLabel={label} formatXLabel={formatXLabel} />
      </View>
    </View>
  );
});

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getLabel(selected: string) {
  if (selected === 'D') {
    return { label: 'Today', x: 24, formatXLabel: (value) => String(value) };
  }

  if (selected === 'W') {
    return {
      label: 'Weekday',
      x: 7,
      formatXLabel: (value) => daysOfWeek[value],
    };
  }

  if (selected === 'M') {
    return { label: 'Month', x: 31, formatXLabel: (value) => String(value) };
  }
  
  return {
    label: 'Year',
    x: 12,
    formatXLabel: (value) => {
      const date = new Date(2023, value);
      return date.toLocaleString("default", { month: "short" });
    },
  };
}

function generateMockData(index: number) {
  return Array.from({ length: index }, (_, i) => ({
    x: i,
    consumption: 40 + 30 * Math.random(),
  }));
}

export default EnergyConsumption;
