import { useAppDispatch, useAppSelector } from "shared/hooks/useRedux";
import { removeSpaceAtEnd } from "shared/utils/formatter";
import {
  addToSavedSavedValues,
  setInputTextValue,
} from "store/slices/SavedInfo/SavedInfoSlice";
import * as Yup from "yup";

const useInputValues = () => {
  const dispatch = useAppDispatch();
  const savedList = useAppSelector((state) => state.savedInfo.savedValues);

  const validationSchema = Yup.object().shape({
    value: Yup.string().min(1, "Please type something"),
  });

  function saveValue(value: string) {
    dispatch(addToSavedSavedValues(removeSpaceAtEnd(value)));
  }

  function onChangeText(text: string) {
    dispatch(setInputTextValue(text));
  }

  return {
    validationSchema,
    saveValue,
    onChangeText,
    savedList,
  };
};

export default useInputValues;
