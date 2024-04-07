import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ISavedInfoSlice = {
  inputTextValue: string;
  savedValues: string[];
};

const initialState: ISavedInfoSlice = {
  inputTextValue: "",
  savedValues: [],
};

const savedInfoSlice = createSlice({
  name: "savedInfoSlice",
  initialState,
  reducers: {
    setInputTextValue(state, { payload }: PayloadAction<string>) {
      state.inputTextValue = payload;
    },
    addToSavedSavedValues(state, { payload }: PayloadAction<string>) {
      const newValues = [payload, ...state.savedValues];
      state.savedValues = newValues;
    },
  },
});

export default savedInfoSlice.reducer;

export const { addToSavedSavedValues, setInputTextValue } =
  savedInfoSlice.actions;
