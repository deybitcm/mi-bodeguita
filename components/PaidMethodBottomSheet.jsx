import React, { useCallback, useMemo, useRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import SelectPaidMethod from "./SelectPaidMethod.jsx";

export default function SaleBottomSheet({
  bottomSaleSheetModalRef,
  navigation,
}) {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackDrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    );
  }, []);

  const handleSheetChanges = useCallback((index) => {}, []);

  return (
    <BottomSheetModal
      backdropComponent={renderBackDrop}
      enableDynamicSizing={true}
      enablePanDownToClose={false}
      ref={bottomSaleSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      handleHeight={100}
      handleStyle={{ backgroundColor: "#EAEAEA", borderRadius: 20 }}
      backgroundStyle={{ backgroundColor: "#EAEAEA" }}
      handleIndicatorStyle={{ backgroundColor: "#EAEAEA" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View
          style={{
            flex: 1,
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SelectPaidMethod />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    paddingBottom: 12,
    backgroundColor: "#EAEAEA",
  },
});
