import { View, StyleSheet } from "react-native";
import TitleText from "../components/TitleText";
import ExpensesList from "../components/ExpensesList";
import DUMMY_EXPENSES from "../store/expenses-context";
import { GlobalStyles } from "../constants/styles";

function AllExpenses({ navigation }) {
  return (
    <View style={styles.container}>
      <TitleText leftTxt={"Total"} rigtTxt={"$317.71"} />
      <ExpensesList items={DUMMY_EXPENSES} navigation={navigation} />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
});
