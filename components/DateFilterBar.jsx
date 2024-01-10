import React, { useState } from "react";
import { View, Button, Text, Pressable } from "react-native";
import DateList from "./DateList.jsx";
import DateFilterButton from "./DateFilterButton.jsx";

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
        justifyContent: "center",
      }}
    >
      <DateList />
      <DateFilterButton />
    </View>
  );
};

export default DateFilterBar;
