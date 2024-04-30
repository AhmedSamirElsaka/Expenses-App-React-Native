import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { GlobalStyles } from "../constants/styles";

function ExpenseItem() {
  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}></Text>
          <Text style={styles.dateText}></Text>
        </View>
        <View style={styles.rightInnerContainer}>
          <Text style={styles.amountText}></Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.secondryColor,
    borderRadius: 4,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  rightInnerContainer: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleText: {},
  dateText: {},
  amountText: [],
});
