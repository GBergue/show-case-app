import useBLE from "@hooks/useBLE";
import { forwardRef, useEffect, useImperativeHandle } from "react";

export interface BluetoothConnectionRef {
  handleSend: (bool: boolean) => void;
}

const BluetoothConnection = forwardRef<BluetoothConnectionRef>((_, ref) => {
  const {
    allDevices,
    stop,
    sendDataToDevice,
    connectToDevice,
    connectedDevice,
    scanForPeripherals,
    requestPermissions,
  } = useBLE();

  useEffect(() => {
    handleScan();
  }, []);

  useEffect(() => {
    if (allDevices.length > 0 && !connectedDevice) {
      handleConnect();
      console.log("allDevices", allDevices);
    }
  }, [allDevices]);

  async function handleScan() {
    const hasPermission = await requestPermissions();
    console.log("hasPermission", hasPermission);
    if (hasPermission) {
      scanForPeripherals();
    }
  }

  function handleConnect() {
    connectToDevice(allDevices[allDevices.length - 1]);
  }

  function handleStop() {
    stop();
  }

  function handleSend(bool: boolean) {
    sendDataToDevice(bool);
  }

  useImperativeHandle(ref, () => ({
    handleSend,
  }));

  return null;
});

export default BluetoothConnection;
