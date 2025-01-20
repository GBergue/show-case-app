import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Devices from '@screens/Devices';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Profile from '@screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceDetails from '@screens/DeviceDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Devices') {
            iconName = 'lightbulb';
          } else if (route.name === 'Profile') {
            iconName = 'user-alt';
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2288DC',
        tabBarInactiveTintColor: '#979797',
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Devices" component={Devices} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="DeviceDetails" component={DeviceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
