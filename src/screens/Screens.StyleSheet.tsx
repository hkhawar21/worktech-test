import { StyleSheet } from "react-native";

export const screensStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  // Input Value
  savedListRow: {
    alignItems: "center",
    marginTop: 20,
  },
  savedText: { flex: 1, flexWrap: "wrap", marginLeft: 20 },
  saveButton: {
    marginTop: 60,
  },
});
