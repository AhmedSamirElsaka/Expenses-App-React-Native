import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ name, color, size }) {
  return <Ionicons name={name} color={color} size={size} />;
}

export default IconButton;
