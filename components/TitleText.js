import { View, Text, StyleSheet } from "react-native";

function TitleText({ leftTxt, rigtTxt }) {
  return (
    <View style={styles.container}>
      <Text style={styles.leftTxt}>{leftTxt}</Text>
      <Text style={styles.rigtTxt}>{rigtTxt}</Text>
    </View>
  );
}

export default TitleText;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#bdbd42",
    flexDirection: "row",
    padding: 8,
    borderRadius: 6,
  },
  leftTxt: { fontSize: 12, color: "black" },
  rigtTxt: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});
