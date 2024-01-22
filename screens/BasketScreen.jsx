import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import SelectDateButton from "../components/SelectDateButton.jsx";
import PaidUnpaidButton from "../components/PaidUnpaidButton.jsx";
import SelectClient from "../components/SelectClient.jsx";
import BasketProductList from "../components/BasketProductList.jsx";
import NewCreditButton from "../components/NewCreditButton.jsx";

import BottomButton from "../components/BottomButton.jsx";
import BottomButtonWithBottomSheet from "../components/BottomButtonWithBottomSheet.jsx";

export default function NewBasicSaleScreen({ navigation }) {
  const [isPaid, setIsPaid] = useState(true);
  const handlePress = () => {
    console.log("Botón presionado");
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyHeaderContainer}>
          <View style={styles.bodyHeaderElementContainer}>
            <SelectDateButton />
          </View>
          <View style={styles.bodyHeaderElementContainer}>
            <PaidUnpaidButton
              onPaidPress={() => setIsPaid(true)}
              onUnpaidPress={() => setIsPaid(false)}
            />
          </View>
        </View>
        <View style={styles.bodyProductContainer}>
          <BasketProductList />
        </View>
        <View style={styles.bodyFooterContainer}>
          <View style={styles.bodyClientContainer}>
            <SelectClient />
          </View>
          {!isPaid && <NewCreditButton />}
        </View>
      </View>
      <View style={styles.footerContainer}>
        {isPaid ? (
          <BottomButtonWithBottomSheet
            title={"CONFIRMAR VENTA"}
            colorButton={"black"}
            navigation={navigation}
          />
        ) : (
          <BottomButton
            onPress={handlePress}
            colorButton={"black"}
            title={"CONFIRMAR CRÉDITO"}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
  },
  bodyContainer: {
    flex: 8,
  },
  footerContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 4,
  },
  bodyHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyHeaderElementContainer: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyProductContainer: {
    flex: 6,
  },
  bodyFooterContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyClientContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
