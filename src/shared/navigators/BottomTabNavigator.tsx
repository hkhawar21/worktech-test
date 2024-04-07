import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import { Folder, Home } from "react-native-feather";
import { theme } from "shared/constants/theme";
import DisplayStackNavigator from "./DisplayStackNavigator";

type BottomTabParamList = {
  home: undefined;
  display: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Home
              color={focused ? theme.primaryColor : theme.textColorGray}
              fill={focused ? theme.primaryColor : "#fff"}
              width={24}
              height={24}
            />
          ),
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="display"
        component={DisplayStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Folder
              color={focused ? theme.primaryColor : theme.textColorGray}
              fill={focused ? theme.primaryColor : "#fff"}
              width={24}
              height={24}
            />
          ),
          tabBarLabel: "Display",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
