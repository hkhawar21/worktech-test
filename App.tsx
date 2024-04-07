import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import BottomTabNavigator from "shared/navigators/BottomTabNavigator";
import { persistor, store } from "store/index";
import { toastConfig } from "shared/utils/toastConfig";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <BottomTabNavigator />
            <Toast position="bottom" bottomOffset={20} config={toastConfig} />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
