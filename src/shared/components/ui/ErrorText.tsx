import { Text as NativeText, StyleSheet, TextProps } from "react-native";
import { theme } from "shared/constants/theme";

const ErrorText = (props: TextProps) => {
  return (
    <NativeText {...props} style={[styles.text, props.style]}>
      {props.children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginVertical: 4,
    color: theme.warning,
    fontWeight: "700",
  },
});

export default ErrorText;
