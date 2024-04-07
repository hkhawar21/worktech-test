import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Text from "./Text";
import { theme } from "shared/constants/theme";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  textStyle?: TextStyle;
  loading?: boolean;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { style, loading, label, textStyle } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        style,
        { backgroundColor: loading ? theme.bgGray : theme.primaryColor },
      ]}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[styles.text, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
});

export default Button;
