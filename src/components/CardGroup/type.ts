import { DeviceBean } from "@components/CardDevice/type";

export interface GroupBean {
  id: string,
  name: string,
  img: string,
  devices?: DeviceBean[],
}