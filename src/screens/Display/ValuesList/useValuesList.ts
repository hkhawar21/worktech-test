import { useAppSelector } from "shared/hooks/useRedux";

const useValuesList = () => {
  const savedList = useAppSelector((state) => state.savedInfo.savedValues);

  return {
    savedList,
  };
};

export default useValuesList;
