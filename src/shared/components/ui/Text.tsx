import { Text as NativeText, StyleSheet, TextProps } from "react-native";
import { theme } from "shared/constants/theme";

const Text = (props: TextProps) => {
  return (
    <NativeText {...props} style={[styles.text, props.style]}>
      {props.children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: theme.textColorGray,
  },
});

export default Text;
