import BottomButton from "./BottomButton.jsx";
import React, { useRef, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import PaidMethodBottomSheet from "./PaidMethodBottomSheet.jsx";

export default function BottomButtonWithBottomSheet({
  navigation,
  title,
  colorButton,
}) {
  const bottomSaleSheetModalRef = useRef(null);
  const handlePresentSaleModalPress = useCallback(() => {
    bottomSaleSheetModalRef.current?.present();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "yellow",
      }}
    >
      <BottomButton
        onPress={handlePresentSaleModalPress}
        colorButton={colorButton}
        title={title}
      />
      <PaidMethodBottomSheet
        bottomSaleSheetModalRef={bottomSaleSheetModalRef}
        navigation={navigation}
      />
    </View>
  );
}
