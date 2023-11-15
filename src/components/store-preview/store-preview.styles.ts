import { StyleSheet, Dimensions } from "react-native";

let { width, height } = Dimensions.get("screen");

let margin = 0.9;

export default StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 8,
    backgroundColor: "white",
    zIndex: 999,
    top: (height * (1 - margin)) / 2,
    left: (width * (1 - margin)) / 2,
    width: width * margin,
    height: height * margin,
    padding: 16,
  },
});
