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
    addToSavedValues(state, { payload }: PayloadAction<string>) {
      const newValues = [payload, ...state.savedValues];
      state.savedValues = newValues;
    },
  },
});

export default savedInfoSlice.reducer;

export const { addToSavedValues } = savedInfoSlice.actions;
