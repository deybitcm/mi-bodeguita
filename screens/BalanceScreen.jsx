import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

import DateFilterBar from "../components/DateFilterBar.jsx";
import MovementList from "../components/MovementList.jsx";
import MovementsHeader from "../components/MovementsHeader.jsx";

import { getSales } from "../api.js";
import { getPurchases } from "../api.js";
import SaleAndPurchaseButtons from "../components/SaleAndPurchaseButtons.jsx";

export default function BalanceScreen() {
  const [movements, setMovements] = useState([]);
  const [typeOfMovement, setTypeOfMovement] = useState("ventas"); // Valor inicial

  const loadList = async () => {
    const data =
      typeOfMovement === "ventas" ? await getSales() : await getPurchases();
    setMovements(data);
  };

  useEffect(() => {
    loadList();
  }, [typeOfMovement]);

  const handleTypeChange = (type) => {
    setTypeOfMovement(type);
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ flex: 9 }}>
        <DateFilterBar onFilterChange={handleTypeChange}></DateFilterBar>
        <MovementsHeader
          filter={typeOfMovement}
          onTypeChange={handleTypeChange}
        />
        <MovementList items={movements} onRefresh={loadList} />
      </View>
      <View style={{ flex: 1, paddingBottom: 30, paddingTop: 15 }}>
        <SaleAndPurchaseButtons />
      </View>
    </View>
  );
}
