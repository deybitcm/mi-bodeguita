import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MovementListItem({ movimiento }) {
  function monthNumberToName(monthNumber) {
    const months = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ];
    return months[monthNumber];
  }

  const tiparTiempoPequeño = (value) => {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  };

  const tiparFecha = (fecha) => {
    const date = new Date(fecha);
    const day = tiparTiempoPequeño(date.getDate());
    const month = monthNumberToName(date.getMonth());
    const hour = tiparTiempoPequeño(
      date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    );
    const minutes = tiparTiempoPequeño(date.getMinutes());
    const timeParaprhase = date.getHours() > 12 ? "pm" : "am";
    return `${day} de ${month} - ${hour}:${minutes} ${timeParaprhase}`;
  };

  const monto = Number(movimiento.monto_total).toFixed(0);

  return (
    <View style={styles.itemOfList}>
      <View>
        <View>
          <Text>{movimiento.nombre}</Text>
        </View>
        <View>
          <Text>{tiparFecha(movimiento.fecha_movimiento)}</Text>
        </View>
      </View>
      <View>
        <Text>{`S/. ${monto}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemOfList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
  },
});
