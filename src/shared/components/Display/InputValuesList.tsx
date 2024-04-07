import { FlatList, FlatListProps, StyleSheet, View } from "react-native";
import { theme } from "shared/constants/theme";
import { Text } from "../ui";

interface InputValuesListProps
  extends Omit<FlatListProps<string>, "renderItem"> {}

type ListItemProps = {
  value: string;
};

const ListItem = ({ value }: ListItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text>{value}</Text>
    </View>
  );
};

const InputValuesList = (props: InputValuesListProps): JSX.Element => {
  const renderItem = ({ item }: { item: string }) => <ListItem value={item} />;

  return <FlatList {...props} renderItem={renderItem} />;
};

export default InputValuesList;

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.textColorBlack,
    marginBottom: 20,
  },
});
