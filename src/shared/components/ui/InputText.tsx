import { useState } from "react";
import {
  TextInputProps,
  TextInput as NativeTextInput,
  View,
  StyleSheet,
  ViewProps,
  Pressable,
} from "react-native";
import ErrorText from "./ErrorText";
import { X } from "react-native-feather";
import { theme } from "shared/constants/theme";

interface MyTextInputProps extends TextInputProps {
  containerProps?: ViewProps;
  error?: string | null;
  removeValue?: () => void;
}

const TextInput = (props: MyTextInputProps) => {
  const { style, containerProps, removeValue } = props;
  const [focus, setFocus] = useState(false);

  const containerFocus = {
    borderColor: focus ? "#000" : theme.textColorGray,
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <>
      <View
        {...containerProps}
        style={[
          styles.container,
          focus ? containerFocus : null,
          containerProps?.style,
        ]}
      >
        <NativeTextInput
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
          style={[styles.input, style]}
          placeholderTextColor="rgba(94,93,93,0.5)"
        />
        {removeValue ? (
          <Pressable onPress={removeValue}>
            <X color={theme.textColorGray} />
          </Pressable>
        ) : null}
      </View>
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#transparent",
    borderRadius: 20,
    padding: 14,
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(94,93,93,0.5)",
    alignItems: "center",
  },

  input: {
    flex: 1,
    fontSize: 20,
    color: "#000",
    paddingBottom: 0,
    height: 40,
  },
});

export default TextInput;
