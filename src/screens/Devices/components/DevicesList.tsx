import CardDevice from "@components/CardDevice";
import CardTitle from "@components/CardTitle";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@theme/index";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { MOCK_DEVICES } from "../../../data/mock";


export default function DevicesList() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  console.log('windowWidth', windowWidth);
  
  const cardWidth = (windowWidth - 32 - theme.spacing.margin) / 2;
  console.log('cardWidth', cardWidth);

  function navigateToDetails(id: string) {
    navigation.navigate("DeviceDetails", { id });
  }

  return (
    <View style={styles.container}>
      <CardTitle title="Devices" />

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          rowGap: theme.spacing.margin,
        }}
      >
        {MOCK_DEVICES.map((d) => (
          <CardDevice
            key={d.id}
            width={cardWidth}
            navigateToDetails={() => navigateToDetails(d.id)}
            device={d}
          />
        ))}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.containerPadding,
    paddingBottom: 36,
  },
});
