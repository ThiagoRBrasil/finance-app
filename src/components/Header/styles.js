import { StyleSheet, Platform, StatusBar } from "react-native";

const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight + 22 : 64;

export default StyleSheet.create({
  container: {
    backgroundColor: "#8000FF",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 44,
  },

  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  username: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },

  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255,255,255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
});
