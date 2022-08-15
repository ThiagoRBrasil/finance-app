import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },

  date: {
    color: "#DADADA",
    fontWeight: "bold",
  },

  label: {
    fontWeight: "bold",
    fontSize: 16,
  },

  value: {
    fontSize: 16,
    color: "#2ECC71",
    fontWeight: "bold",
  },

  expenses: {
    fontSize: 16,
    color: "#E74C3C",
    fontWeight: "bold",
  },

  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#DADADA",
    borderRadius: 8,
  },
});
