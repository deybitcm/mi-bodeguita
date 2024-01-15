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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "#000",
        borderTopWidth: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <DateList />
      </View>
      <View>
        <DateFilterButton />
      </View>
    </View>
  );
};

export default DateFilterBar;
