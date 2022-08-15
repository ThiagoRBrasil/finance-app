import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0, //expenses
  },
  {
    id: 2,
    label: "Pix cliente X",
    value: "2.500,00",
    date: "17/09/2022",
    type: 1, //balance
  },
  {
    id: 3,
    label: "Salário",
    value: "12.500,00",
    date: "17/09/2022",
    type: 1, //balance
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Thiago Brasil" />

      <Balance balance={"15.000,00"} expenses={"380,90"} />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },

  list: {
    marginHorizontal: 14,
  },
});
