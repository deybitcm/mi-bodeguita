import { View, Text, StyleSheet } from "react-native";
import NewSaleButton from "./NewSaleButton.jsx";
import NewPurchaseButton from "./NewPurchaseButton.jsx";
import React, { useEffect, useCallback, useMemo, useRef } from "react";
import SaleBottomSheet from "./SaleBottomSheet.jsx";

export default function SaleAndPurchaseButtons() {
  const bottomSaleSheetModalRef = useRef(null);
  const handlePresentSaleModalPress = useCallback(() => {
    bottomSaleSheetModalRef.current?.present();
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NewSaleButton onPress={handlePresentSaleModalPress} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NewPurchaseButton />
      </View>
      <SaleBottomSheet bottomSaleSheetModalRef={bottomSaleSheetModalRef} />
    </View>
  );
}
