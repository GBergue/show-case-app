import CardDeviceAction from "@components/CardDeviceAction";
import CardDeviceInfo from "@components/CardDeviceInfo";
import Text from "@components/Text";
import { useTheme } from "@contexts/Theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { theme } from "@theme/index";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MOCK_DEVICES } from "../../data/mock";
import CardTitle from "@components/CardTitle";
import { ScrollView } from "react-native-gesture-handler";
import Graph from "./components/Graph";
import SelectPeriod from "@components/SelectPeriod";
import EnergyConsumption from "./components/EnergyConsumption";
import HeaderBack from "@components/HeaderBack";

type Props = NativeStackScreenProps<RootStackParamList, "DeviceDetails">;

export default function DeviceDetails({ navigation, route }: Props) {
  const colorTheme = useTheme();
  const id = route.params.id;
  const device = MOCK_DEVICES.find(d => d.id === id)
  const [isFavorite, setFavorite] = useState(device.favorite);
  const [isOnline, setOnline] = useState(device.status === "online");

  function handleSetFavorite() {
    setFavorite((f) => {
      const newState = !f;
      device.favorite = newState;
      return newState;
    });
  }

  function handleSetPower() {
    setOnline((o) => {
      const newState = !o;
      device.status = newState ? "online" : "offline";
      return newState;
    });
  }

  return (
    <ScrollView
      style={{
        paddingHorizontal: theme.spacing.containerPadding,
      }}
    >
      <HeaderBack lastScreen="Home" />

      <View style={styles.containerHeader}>
        <Text type="title1">{device.name}</Text>
        <TouchableOpacity onPress={handleSetFavorite}>
          <FontAwesome
            name={isFavorite ? "star" : "star-o"}
            size={26}
            color={colorTheme.blue}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: theme.spacing.containerPadding,
        }}
      >
        <CardDeviceAction
          icon={
            <View
              style={[
                styles.containerButton,
                { backgroundColor: isOnline ? colorTheme.green : "#E7E7E7" },
              ]}
            >
              <FontAwesome
                name="power-off"
                size={24}
                color={isOnline ? colorTheme.white : colorTheme.gray}
              />
            </View>
          }
          label="state"
          value={isOnline ? "on" : "off"}
          onPress={handleSetPower}
        />

        <View style={{ width: "48%", justifyContent: "space-between" }}>
          <CardDeviceInfo
            label="Thermostat"
            value="30 °F"
            icon={
              <View
                style={[styles.containerButton, { backgroundColor: "#FC9702" }]}
              >
                <FontAwesome6
                  name="temperature-half"
                  size={24}
                  color={colorTheme.white}
                />
              </View>
            }
          />

          <CardDeviceInfo
            label="Wind"
            value="Low"
            icon={
              <View
                style={[
                  styles.containerButton,
                  { backgroundColor: colorTheme.blue },
                ]}
              >
                <FontAwesome6 name="wind" size={24} color={colorTheme.white} />
              </View>
            }
          />
        </View>
      </View>

      <EnergyConsumption />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.containerPadding,
    marginTop: theme.spacing.margin,
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
  },
});
