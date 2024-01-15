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

  function generateLastNIntervals(count, interval) {
    const dates = [];
    for (let i = 0; i < count; i++) {
      const date = new Date();
      interval === "days" && date.setDate(date.getDate() - i);
      interval === "months" && date.setMonth(date.getMonth() - i);
      interval === "years" && date.setFullYear(date.getFullYear() - i);
      interval === "weeks" && date.setDate(date.getDate() - i * 7);

      const month = monthNumberToName(date.getMonth());
      const day = date.getDate();
      const year = date.getFullYear();

      const inicio = new Date(date);
      inicio.setDate(inicio.getDate() - inicio.getDay() + 1);
      const firstDayOfWeek = inicio.getDate();
      const monthOfFirstDay = monthNumberToName(inicio.getMonth());
      const DiaInicio = `${firstDayOfWeek} ${monthOfFirstDay}`;

      const fin = new Date(date);
      fin.setDate(fin.getDate() - fin.getDay() + 7);
      const lastDayOfWeek = fin.getDate();
      const monthOfLastDay = monthNumberToName(fin.getMonth());
      const DiaFin = `${lastDayOfWeek} ${monthOfLastDay}`;

      const intervaloActual =
        interval === "days"
          ? `${day} ${month}`
          : interval === "months"
          ? `${month}`
          : interval === "years"
          ? `${year}`
          : interval === "weeks"
          ? `${DiaInicio} - ${DiaFin}`
          : null;

      dates.unshift(intervaloActual);
    }

    return dates;
  }

  const [timeFilterType, setTimeFilterType] = useState("days");

  const dates = generateLastNIntervals(8, timeFilterType);
  const [selectedDate, setSelectedDate] = useState(dates[dates.length - 1]);

  const ITEM_WIDTH = {
    days: 70,
    months: 58,
    years: 68,
    weeks: 115,
  };

  return (
    <FlatList
      initialScrollIndex={dates.length - 1}
      getItemLayout={(data, index) => ({
        length: ITEM_WIDTH[timeFilterType],
        offset: ITEM_WIDTH[timeFilterType] * index,
        index,
      })}
      style={{
        backgroundColor: "#FFC300",
        paddingVertical: 2,
        flex: 1,
      }}
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
