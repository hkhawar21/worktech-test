import { useAppDispatch, useAppSelector } from "shared/hooks/useRedux";
import { removeSpaceAtEnd } from "shared/utils/formatter";
import { addToSavedValues } from "store/slices/SavedInfo/SavedInfoSlice";
import * as Yup from "yup";

const useInputValues = () => {
  const dispatch = useAppDispatch();
  const savedList = useAppSelector((state) => state.savedInfo.savedValues);

  const validationSchema = Yup.object().shape({
    value: Yup.string().min(1, "Please type something"),
  });

  function saveValue(value: string) {
    dispatch(addToSavedValues(removeSpaceAtEnd(value)));
  }

  return {
    validationSchema,
    saveValue,
    savedList,
  };
};

export default useInputValues;
