import {
  Text as SkiaText
} from "@shopify/react-native-skia";
import React from 'react';
import { useDerivedValue } from "react-native-reanimated";
import { ChartPressState } from "victory-native";

interface Props {
  fontLabel: any,
  state: ChartPressState<{ x: number; y: { consumption: number; };}>
}

export default function LabelText({ fontLabel, state }: Props) {
  const text = useDerivedValue(() => {
    return String(state.y.consumption.value.value.toFixed(2)) + " kWh";
  }, [state.y]);
  
  return (
    <SkiaText
      x={0}
      y={18}
      text={text}
      color={"#000"}
      font={fontLabel}
    />
  )
}