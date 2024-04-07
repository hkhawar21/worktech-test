import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ValuesList from "screens/Display/ValuesList";

type DisplayStackParams = {
  valuesList: undefined;
};

const DisplayStack = createNativeStackNavigator<DisplayStackParams>();

const DisplayStackNavigator = (): JSX.Element => {
  return (
    <DisplayStack.Navigator>
      <DisplayStack.Screen
        name="valuesList"
        component={ValuesList}
        options={{
          headerShadowVisible: false,
          headerTitle: "Saved Values",
          headerBackVisible: false,
        }}
      />
    </DisplayStack.Navigator>
  );
};

export default DisplayStackNavigator;
