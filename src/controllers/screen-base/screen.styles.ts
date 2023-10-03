import { StyleSheet } from "react-native"


export default (noPadding?: boolean) =>
  StyleSheet.create({
    screen: {
      alignItems: "center",
      padding: noPadding ? 0 : 16,
    }
  });
