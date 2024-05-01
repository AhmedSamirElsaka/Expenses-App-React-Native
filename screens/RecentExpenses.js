import { View, StyleSheet, Text } from "react-native";
import TitleText from "../components/TitleText";
import ExpensesList from "../components/ExpensesList";
import DUMMY_EXPENSES from "../store/expenses-context";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/IconButton";

function RecentExpenses({ items }) {
  if (items === null) {
    return (
      <View style={styles.container}>
        <TitleText leftTxt={"Last 7 Days"} rigtTxt={"0.00"} />
        <View style={styles.noItemsTextContainer}>
          <Text style={styles.noItemsText}>
            No expenses registered for the last 7 days
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TitleText leftTxt={"Last 7 Days"} rigtTxt={"0.00"} />
        <ExpensesList items={items} navigation={navigation} />
      </View>
    );
  }
}

export default RecentExpenses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
  noItemsTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 36,
  },
  noItemsText: {
    fontSize: 16,
  },
});
