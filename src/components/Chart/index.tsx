import { View } from "react-native";
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";
import { Circle, useFont } from "@shopify/react-native-skia";
import SFPro from "../../../assets/fonts/SF-Pro.ttf";
import { SharedValue } from "react-native-reanimated";

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

export default function MyChart() {
  const font = useFont(SFPro, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });

  return (
    <View style={{ height: 200 }}>
      <CartesianChart
        data={DATA}
        xKey="day"
        yKeys={["highTmp"]}
        chartPressState={state}
        axisOptions={{ font }}
      >
        {({ points, chartBounds }) => (
          <>
            <Line points={points.highTmp} color="red" strokeWidth={3} animate={{ type: "timing", duration: 300 }}/>
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.highTmp.position} />
            )}
            {/* <Area
              points={points.highTmp}
              y0={chartBounds.bottom}
              color="red"
              animate={{ type: "timing", duration: 300 }}
            /> */}
          </>
        )}
      </CartesianChart>
    </View>
  );
}

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}