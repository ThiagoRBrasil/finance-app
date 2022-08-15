import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginTop: -24,
    marginHorizontal: 14,
    borderRadius: 4,
    paddingVertical: 22,
    zIndex: 99,
    elevation: 1,
  },

  itemTitle: {
    fontSize: 20,
    color: "#DADADA",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  currencySymbol: {
    color: "#DADADA",
    marginRight: 6,
  },

  balance: {
    fontSize: 22,
    color: "#2ECC71",
  },

  expenses: {
    fontSize: 22,
    color: "#E74C3C",
  },
});
