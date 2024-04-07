import { screensStyle } from "screens/Screens.StyleSheet";
import useValuesList from "./useValuesList";
import InputValuesList from "shared/components/Display/InputValuesList";
import { View } from "react-native";
import { useStatusBar } from "shared/hooks/useStatusBar";

const ValuesList = (): JSX.Element => {
  const { savedList } = useValuesList();
  useStatusBar("dark-content");

  return (
    <View style={screensStyle.container}>
      <InputValuesList data={savedList} />
    </View>
  );
};

export default ValuesList;
