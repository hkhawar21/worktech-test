import { screensStyle } from "screens/Screens.StyleSheet";
import { Button, Heading, Row, Text } from "shared/components/ui";
import TextInput from "shared/components/ui/InputText";
import useInputValues from "./useInputValue";
import { View } from "react-native";
import { Formik } from "formik";
import { useStatusBar } from "shared/hooks/useStatusBar";

const InputValue = (): JSX.Element => {
  const { onChangeText, saveValue, validationSchema, savedList } =
    useInputValues();
  useStatusBar("dark-content");

  return (
    <View style={screensStyle.container}>
      <Formik
        initialValues={{ value: "" }}
        onSubmit={(values) => saveValue(values.value)}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              value={values.value}
              onChangeText={(text) => {
                handleChange("value")(text);
                onChangeText(text);
              }}
              placeholder="Enter anything you want to save..."
              error={errors.value}
              removeValue={() => handleChange("value")("")}
            />
            {savedList.length > 0 && (
              <Row style={screensStyle.savedListRow}>
                <Heading>Last Saved:</Heading>
                <Text style={screensStyle.savedText}>{savedList[0]}</Text>
              </Row>
            )}
            <Button
              label="Save"
              style={screensStyle.saveButton}
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default InputValue;
