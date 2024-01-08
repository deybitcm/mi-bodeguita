import React, { useState } from "react";
import { View, Button, Text, Pressable } from "react-native";
import DateList from "./DateList";
import DateFilterButton from "./DateFilterButton";

const DateFilterBar = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("day");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <DateList />
      <DateFilterButton />
    </View>
  );
};

export default DateFilterBar;
