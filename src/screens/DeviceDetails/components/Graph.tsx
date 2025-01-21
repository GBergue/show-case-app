import Text from "@components/Text";
import { useTheme } from "@contexts/Theme";
import {
  Canvas,
  Circle,
  Rect,
  SkFont,
  useFont
} from "@shopify/react-native-skia";
import { theme } from "@theme/index";
import { View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import SFPro from "../../../../assets/fonts/SF-Pro.ttf";
import LabelText from "./LabelText";

interface Content {
  x: number;
  consumption: number;
}
interface Props {
  data: Content[];
  xKey: string;
  xLabel: string;
  formatXLabel: (value: any) => string;
}

export default function Graph({ data, xKey, xLabel, formatXLabel }: Props) {
  const colorTheme = useTheme();
  const font = useFont(SFPro, 12);
  const fontLabel = useFont(SFPro, 18);
  const { state, isActive } = useChartPressState({
    x: 0,
    y: { consumption: 0 },
  });

  let total = 0;
  data.forEach((v) => {
    total += v.consumption;
  });
  const avg = total / data.length;

  return (
    <View style={{ backgroundColor: colorTheme.white, padding: 0 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ marginVertical: theme.spacing.margin }}>
          <Text type="caption1" fontColor={colorTheme.gray}>
            {xLabel.toUpperCase()} AVERAGE
          </Text>
          <Text>{avg.toFixed(2)} kWh</Text>
        </View>

        <View style={{ marginVertical: theme.spacing.margin }}>
          <Text type="caption1" fontColor={colorTheme.gray}>
            {xLabel.toUpperCase()} VALUE
          </Text>
          <Canvas style={{ height: 22, backgroundColor: "#FFF", width: 90 }}>
            <LabelText fontLabel={fontLabel} state={state} />
          </Canvas>
        </View>
      </View>

      <View style={{ height: 200 }}>
        <CartesianChart
          data={data}
          xKey={xKey}
          yKeys={["consumption"]}
          chartPressState={state}
          axisOptions={{
            font,
            formatXLabel,
          }}
        >
          {({ points, chartBounds }) => {
            return (
              <>
                <Line
                  points={points.consumption}
                  color={colorTheme.blue}
                  strokeWidth={2}
                  animate={{ type: "timing", duration: 300 }}
                />
                {isActive && (
                  <ToolTip
                    fontLabel={fontLabel}
                    x={state.x.position}
                    y={state.y.consumption}
                  />
                )}
              </>
            );
          }}
        </CartesianChart>
      </View>
    </View>
  );
}

type YsharedValues = {
  value: SharedValue<number>;
  position: SharedValue<number>;
};

type ToolTip = {
  x: SharedValue<number>;
  y: YsharedValues;
  fontLabel: SkFont | null;
};

function ToolTip({ x, y }: ToolTip) {
  return (
    <>
      <Rect width={1} height={200} color="#000" x={x} y={0} />
      <Circle cx={x} cy={y.position} r={4} color={"#000"} />
    </>
  );
}
