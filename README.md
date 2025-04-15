# Show Case App

A React Native application showcasing a smart home device management system. The app allows users to view, control, and monitor connected devices using Bluetooth Low Energy (BLE) technology.

## Features

- **Device Management**: View and manage smart home devices, including their status (online/offline), favorite devices, and device groups.
- **Bluetooth Connectivity**: Scan for nearby BLE devices, connect to them, and send data.
- **Energy Consumption Tracking**: Visualize energy consumption data with interactive graphs.
- **Theming**: Supports light and dark themes based on the system's color scheme.
- **Navigation**: Intuitive navigation with a bottom tab navigator and stack navigator for detailed views.

## Screenshots

_Add screenshots of the app here._

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GBergue/show-case-app.git
   cd show-case-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Run the app on your device or emulator:

   - **For iOS**:

     ```bash
     npx expo run:ios
     ```

   - **For Android**:

     ```bash
     npx expo run:android
     ```

## Project Structure

- **`components`**: Reusable UI components such as cards, charts, and lists.
- **`screens`**: Screens for different app views (e.g., Home, Devices, Device Details).
- **`hooks`**: Custom hooks, including the `useBLE` hook for Bluetooth functionality.
- **`contexts`**: Context providers, such as the `ThemeProvider` for theming.
- **`routes`**: Navigation setup using React Navigation.
- **`theme`**: Theme definitions for light and dark modes.
- **`data`**: Mock data for devices and groups.

## Key Technologies

- **React Native**: For building the mobile app.
- **Expo**: For development and testing.
- **React Navigation**: For navigation between screens.
- **React Native BLE PLX**: For Bluetooth Low Energy functionality.
- **Victory Native**: For creating interactive charts.
- **React Native Skia**: For advanced graphics rendering.

## Usage

### Managing Devices

- View all devices on the **Devices** screen.
- Favorite devices are displayed on the **Home** screen.
- Tap a device to view its details and control its state.

### Bluetooth Connectivity

- The app automatically scans for BLE devices when launched.
- Connect to a device and send data using the **Device Details** screen.

### Energy Consumption

- View energy consumption graphs on the **Device Details** screen.
- Filter data by day, week, month, or year.

## Development

### Adding a New Component

1. Create a new folder in `components`.
2. Add your component file and styles.
3. Import and use the component in the relevant screen or another component.

### Adding a New Screen

1. Create a new folder in `screens`.
2. Add your screen file and styles.
3. Register the screen in `index.tsx`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes and push the branch:

   ```bash
   git commit -m "Add feature-name"
   git push origin feature-name
   ```

4. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Native BLE PLX](https://github.com/Polidea/react-native-ble-plx)
- [Victory Native](https://formidable.com/open-source/victory/)
- [React Native Skia](https://shopify.github.io/react-native-skia/)
