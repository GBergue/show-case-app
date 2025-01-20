import { View } from "react-native";
import { Bar, CartesianChart } from "victory-native";

const DATA = Array.from({ length: 7 }, (_, i) => ({
  day: i,
  energy: 40 + 30 * Math.random(),
}));

interface Props {
  color: string;
}

export default function MiniChart({ color }: Props) {
  return (
    <View style={{ height: 50, width: 100 }}>
      <CartesianChart
        axisOptions={{ lineColor: 'transparent' }}
        data={DATA}
        frame={{ lineColor: 'transparent' }}
        xKey="day"
        yKeys={["energy"]}
        domainPadding={{ left: 10, right: 10 }}
      >
      {({ points, chartBounds }) => (
        <Bar
          points={points.energy}
          chartBounds={chartBounds}
          color={color}
          barWidth={10}
          roundedCorners={{
            topLeft: 5,
            topRight: 5,
            bottomLeft: 5,
            bottomRight: 5,
          }}
        />
      )}
    </CartesianChart>
    </View>
  );
}