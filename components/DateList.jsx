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
    return months[monthNumber];
  }

  function monthNumberToNameComplete(monthNumber) {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octobre",
      "Noviembre",
      "Diciembre",
    ];
    return months[monthNumber];
  }

  function generateLastNDays(count) {
    const dates = [];
    for (let i = 0; i < count; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const month = monthNumberToName(date.getMonth());
      const day = date.getDate();
      const DiaActual = `${day} ${month}`;
      dates.unshift(DiaActual);
    }

    return dates;
  }

  function generateLastNMonths(count) {
    const dates = [];
    for (let i = 0; i < count; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const month = monthNumberToNameComplete(date.getMonth());
      const MesActual = `${month}`;
      dates.unshift(MesActual);
    }

    return dates;
  }

  function generateLastNYears(count) {
    const dates = [];
    for (let i = 0; i < count; i++) {
      const date = new Date();
      date.setFullYear(date.getFullYear() - i);
      const year = date.getFullYear();
      const AñoActual = `${year}`;
      dates.unshift(AñoActual);
    }

    return dates;
  }

  function generateLastNWeeks(count) {
    const dates = [];
    for (let i = 0; i < count; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i * 7);

      const inicio = new Date(date);
      inicio.setDate(inicio.getDate() - inicio.getDay() + 1);
      const day = inicio.getDate();
      const month = monthNumberToName(date.getMonth());
      const DiaInicio = `${day} ${month}`;

      const fin = new Date(date);
      fin.setDate(fin.getDate() - fin.getDay() + 7);
      const day2 = fin.getDate();
      const month2 = monthNumberToName(date.getMonth());
      const DiaFin = `${day2} ${month2}`;

      const SemanaActual = `${DiaInicio} - ${DiaFin}`;

      dates.unshift(SemanaActual);
    }

    return dates;
  }

  const dates = generateLastNDays(10);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <FlatList
      style={{ paddingVertical: 4.5, backgroundColor: "#FFC300" }}
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
