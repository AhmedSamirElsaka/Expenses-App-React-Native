import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useRoute } from "@react-navigation/native";
import ButtonItem from "../components/ButtonItem";
import IconButton from "../components/IconButton";
import { useLayoutEffect } from "react";
function ManageExpenses({ navigation }) {
  const routed = useRoute();
  const type = routed.params.type;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: type === "edit" ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, type]);

  function cancelHandler() {
    navigation.goBack();
  }

  if (type === "edit") {
    return (
      <View style={styles.outerContainer}>
        <View
          style={[
            styles.innerContainer,
            {
              borderBottomColor: GlobalStyles.colors.ExpenseItemColor,
              borderBottomWidth: 2,
            },
          ]}
        >
          <ButtonItem color={"goldenrod"} onPress={cancelHandler}>
            Cancel
          </ButtonItem>
          <ButtonItem color={"goldenrod"}>Update</ButtonItem>
        </View>
        <View style={styles.deleteIcon}>
          <IconButton name={"trash"} size={24} color={"red"} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <ButtonItem color={"goldenrod"} onPress={cancelHandler}>
            Cancel
          </ButtonItem>
          <ButtonItem color={"goldenrod"}>Add</ButtonItem>
        </View>
      </View>
    );
  }
}

export default ManageExpenses;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-around",
    marginTop: 24,
    paddingBottom: 16,
    // marginHorizontal: 50,
    // backgroundColor: GlobalStyles.colors.backgroundColor,
  },
  deleteIcon: {
    marginTop: 8,
  },
});
