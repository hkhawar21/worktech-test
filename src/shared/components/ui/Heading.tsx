import { StyleSheet, Text, TextProps } from "react-native";
import { theme } from "shared/constants/theme";

const Heading = (props: TextProps) => {
  return (
    <Text {...props} style={[styles.heading, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: theme.textColorBlack,
    fontWeight: "700",
  },
});

export default Heading;
