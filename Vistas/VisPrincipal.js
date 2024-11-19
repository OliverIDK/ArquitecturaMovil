import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import VisSecundaria from "./VisSecundaria";

const VisPrincipal = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text>Encabezado</Text>
      </View>
      <View style={styles.body}>
        <VisSecundaria></VisSecundaria>
      </View>
      <View style={styles.footer}>
        <View style={styles.encabezadobody}>
          <TouchableOpacity style={styles.encabezadoboton}>
            <Text>Boton</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.encabezadoboton}>
            <Text>Boton</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.encabezadoboton}>
            <Text>Boton</Text>
          </TouchableOpacity>
        </View>
        <Text>Pie de pagina</Text>
      </View>
    </View>
  );
};

export default VisPrincipal;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  encabezado: {
    backgroundColor: "#FF5733",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#C70039",
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  footer: {
    backgroundColor: "#900C3F",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  encabezadoboton: {
    height: 30,
    width: 50,
    backgroundColor: "blue",
    padding: 2,
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 10,
  },
  encabezadobody: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
});
