import { View, Button } from 'react-native'
import React from 'react'
import useBLE from '../../hooks/useBLE';

export default function ConnectBluetooth() {
  const { allDevices, stop, connectToDevice, connectedDevice, scanForPeripherals, requestPermissions } = useBLE();

  async function handleScan() {
    const hasPermission = await requestPermissions();
    
    if (hasPermission) {
      scanForPeripherals();
    }
  }

  function handleStop() {
    stop();
  }

  console.log('allDevices', allDevices);

  return (
    <View>
      <Button title="Start" onPress={handleScan} />
      <Button title="Stop" onPress={handleStop} />
      <Button title="Log" onPress={() => console.log('ALL devices', allDevices)} />
    </View>
  );
};
