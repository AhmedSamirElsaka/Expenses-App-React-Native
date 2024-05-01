const { View, Pressable, Text, StyleSheet } = require("react-native");

function ButtonItem({ children, onPress, color }) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          pressed ? styles.buttonPressed : null,
        ]}
        //   [
        //   ({ pressed }) => pressed && styles.buttonPressed,
        //   { backgroundColor: color },
        //   ]
        // }
      >
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
}

export default ButtonItem;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75,
  },
  button: {
    padding: 8,
    paddingHorizontal: 24,
  },
});
