import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonItem from "./components/ButtonItem";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import ManageExpenses from "./screens/ManageExpenses";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import TitleText from "./components/TitleText";
const Stack = createNativeStackNavigator();
const BottomNav = createBottomTabNavigator();

export default function App() {
  function ExpensesOverView() {
    return (
      <BottomNav.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "black" } }}
      >
        <BottomNav.Screen />
        <BottomNav.Screen />
      </BottomNav.Navigator>
    );
  }
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "goldenrod" },
    //       contentStyle: { backgroundColor: "khaki" },
    //     }}
    //   >
    //     <Stack.Screen component={ManageExpenses} name="manageExpenses" />
    //     <Stack.Screen component={ExpensesOverView} name="ExpensesOverview" />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View style={{ padding: 40 }}>
      <TitleText rigtTxt={"hello"} leftTxt={"hello"} />
      <ButtonItem color={"yellow"}>Add</ButtonItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
