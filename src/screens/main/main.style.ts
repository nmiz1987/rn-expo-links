import { GlobalColors } from "@/styles/global-colors";
import { StyleSheet, Dimensions } from "react-native";

let { width } = Dimensions.get("screen");

export default StyleSheet.create({
  categoriesContainer: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    rowGap: 5,
    columnGap: 5,
    flexWrap: "wrap",
  },
  tagContainer: {
    backgroundColor: GlobalColors.gray,
    borderRadius: 8,
  },
  tag: {
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  tagMarked: {
    color: "black",
    backgroundColor: "gray",
  },
  noLinksFound: {
    color: GlobalColors.white,
    textAlign: "center",
  },
  conatiner: {
    width,
  },
  lottie: {
    width,
  },
});
