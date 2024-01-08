import React, { useState } from "react";
import { View, Button, Text, Pressable } from "react-native";
import DateList from "./DateList";

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
      <Pressable style={{ padding: 5 }}>
        <Text>Filter</Text>
      </Pressable>
    </View>
  );
};

export default DateFilterBar;
