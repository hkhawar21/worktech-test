import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InputValue from "screens/Home/InputValue";

type HomeStackParams = {
  valueInput: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackNavigator = (): JSX.Element => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="valueInput"
        component={InputValue}
        options={{
          headerShadowVisible: false,
          headerTitle: "Enter Value",
          headerBackVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
