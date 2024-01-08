import React, { useState } from "react";
import { FlatList, View, Text, Pressable } from "react-native";
import DateItem from "./DateItem.jsx";

const DateList = () => {
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
    return months[monthNumber - 1];
  }

  function generateLastNDates(count) {
    let dates = [];
    let date = new Date();
    for (let i = 0; i < count; i++) {
      let dayOfWeek = date.getDay();
      let startOfWeek = date.getDate() - dayOfWeek;
      let today = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let fecha = {
        numeroDia: today.toString().length === 1 ? "0" + today : today,
        nombreMes: monthNumberToName(month),
        numeroAño: year,
      };
      dates.unshift(`${fecha.numeroDia} ${fecha.nombreMes}`);
      console.log(fecha);
      date.setDate(date.getDate() - 1);
    }
    return dates;
  }
  const dates = generateLastNDates(6);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <FlatList
      style={{ paddingVertical: 5, backgroundColor: "#FFC300" }}
      data={dates}
      horizontal={true}
      renderItem={({ item }) => (
        <DateItem
          item={item}
          onPress={setSelectedDate}
          isSelected={item === selectedDate}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default DateList;
