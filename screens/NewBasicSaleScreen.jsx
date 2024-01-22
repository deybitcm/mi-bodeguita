import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import SelectDateButton from "../components/SelectDateButton.jsx";
import PaidUnpaidButton from "../components/PaidUnpaidButton.jsx";
import TotalValueInput from "../components/TotalValueInput.jsx";
import SelectClient from "../components/SelectClient.jsx";
import ConceptInput from "../components/ConceptInput.jsx";
import SelectPaidMethod from "../components/SelectPaidMethod.jsx";
import BottomButton from "../components/BottomButton.jsx";

export default function NewBasicSaleScreen() {
  const [isPaid, setIsPaid] = useState(true);
  const handlePress = () => {
    console.log("Botón presionado");
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyUnpaidContainer}>
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
          <View style={styles.bodyTotalValueContainer}>
            <TotalValueInput />
          </View>
          <View style={styles.bodyConceptContainer}>
            <ConceptInput />
          </View>
          <View style={styles.bodyClientContainer}>
            <SelectClient />
          </View>
        </View>
        <View style={styles.bodyPaidContainer}>
          {isPaid && <SelectPaidMethod />}
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text>Los campsos marcados con (*) son obligatorios</Text>
        <BottomButton
          onPress={handlePress}
          colorButton={"green"}
          title={"CREAR VENTA"}
        />
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
  bodyUnpaidContainer: {
    flex: 6,
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
  bodyTotalValueContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyConceptContainer: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyClientContainer: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyPaidContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
