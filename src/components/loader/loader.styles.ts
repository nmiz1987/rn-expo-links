import { StyleSheet, Dimensions } from "react-native";

let { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  lottie: {
    width: width * 0.9,
  },
});
