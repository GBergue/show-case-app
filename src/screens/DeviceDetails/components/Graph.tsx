import Text from "@components/Text";
import { useTheme } from "@contexts/Theme";
import { Circle, useFont } from "@shopify/react-native-skia";
import { View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import SFPro from "../../../../assets/fonts/SF-Pro.ttf";

interface Props {
  DATA: [];
  xKey: string;
  xLabel: string;
}

export default function Graph({ DATA, xKey, xLabel }: Props) {
  const colorTheme = useTheme();
  const font = useFont(SFPro, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { consumption: 0 } });

  return (
    <View style={{ height: 200,backgroundColor: colorTheme.white }}>
      <CartesianChart
        data={DATA}
        xKey={xKey}
        yKeys={["consumption"]}
        chartPressState={state}
        axisOptions={{ font }}
      >
        {({ points, chartBounds }) => {
          return (
            <>
              <Line points={points.consumption} color={colorTheme.blue} strokeWidth={2} animate={{ type: "timing", duration: 300 }}/>
              {isActive && (
                <ToolTip font={font} x={state.x.position} yValue={state.y.consumption.value} y={state.y.consumption.position} />
              )}
            </>
          )
        }}
      </CartesianChart>
      {state.isActive && state.x.position !== null && (
        <View>
          <Text >
            {xLabel} {state.x.value.value}
          </Text>
          <Text >
            Cosumption {state.y.consumption.value.value}
          </Text>
        </View>
      )}
    </View>
  );
}

function ToolTip({ x, y, yValue, font }: { x: SharedValue<number>; y: SharedValue<number>; yValue: SharedValue<number>  }) {
  return (
      <Circle cx={x} cy={y} r={4} color={'#000'} />
  )
}