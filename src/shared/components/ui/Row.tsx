import { StyleSheet, View, ViewProps } from "react-native";

export default function (props: ViewProps): JSX.Element {
  return (
    <View {...props} style={[props.style, styles.root]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
});
