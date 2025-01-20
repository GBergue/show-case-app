export interface DeviceBean {
  id: string,
  name: string,
  status: 'online' | 'offline',
  img: string,
  favorite: boolean,
}