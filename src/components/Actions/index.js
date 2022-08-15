import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const list = [
  { id: 1, icon: "addfolder", label: "Entrada" },
  { id: 2, icon: "tagso", label: "Compras" },
  { id: 3, icon: "creditcard", label: "Carteira" },
  { id: 4, icon: "barcode", label: "Boletos" },
  { id: 5, icon: "setting", label: "Conta" },
];

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {list.map((itemAction) => (
        <TouchableOpacity key={itemAction.id} style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name={itemAction.icon} size={26} color="#000" />
          </View>
          <Text style={styles.labelButton}>{itemAction.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
