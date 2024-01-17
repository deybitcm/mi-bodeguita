import React, { useCallback, useMemo, useRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function SaleBottomSheet({
  bottomSaleSheetModalRef,
  navigation,
}) {
  const snapPoints = useMemo(() => [], []);
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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nueva venta</Text>
          <Text style={styles.headersubtitle}>
            Selecciona el tipo de venta que quieres hacer
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              bottomSaleSheetModalRef.current?.close();
              navigation.navigate("NewProductSale");
            }}
          >
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/canasta.png")}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Venta de productos</Text>
              <Text style={styles.subtitle}>
                Registra una venta seleccionando productos de tu inventario
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Entypo name="chevron-thin-right" size={18} color="black" />
            </View>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              bottomSaleSheetModalRef.current?.close();
              navigation.navigate("NewBasicSale");
            }}
          >
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/billetes.png")}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Venta libre</Text>
              <Text style={styles.subtitle}>
                Registra una venta sin seleccionar productos de tu inventario
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Entypo name="chevron-thin-right" size={18} color="black" />
            </View>
          </Pressable>
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
  header: {
    marginHorizontal: 16,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginVertical: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    height: 100,
  },
  button: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    flex: 2,
    width: "auto",
    height: "100%",
    borderRadius: 15,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 4,
    justifyContent: "center",
  },
  arrowContainer: {
    flex: 1,
    width: "auto",
    height: "100%",
    borderRadius: 25,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: { fontSize: 16, fontWeight: "bold" },
  headersubtitle: { fontSize: 14 },
  title: { fontSize: 14, fontWeight: "bold", color: "#333" },
  subtitle: { fontSize: 13, color: "#333" },
});
