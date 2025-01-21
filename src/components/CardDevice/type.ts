export interface DeviceBean {
  id: string,
  name: string,
  status: 'online' | 'offline',
  img: string,
  wind?: string,
  temperature?: number
  favorite: boolean,
}