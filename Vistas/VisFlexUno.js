import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ImageBackground, } from "react-native";

const VisFlexUno = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
          source={require("../Imagenes/fondo.jpeg")}
          style={styles.background}
        >
      <View style={styles.filaheader}>
        <View style={styles.itemsfooter}>
          <Text style={styles.estiloTexto}>Practica de Flex 1</Text>
        </View>
      </View>
      <View style={styles.filas}>
        <View style={styles.items}></View>
        <View style={styles.items}></View>
        <View style={styles.items}></View>
      </View>
      <View style={styles.filas}>
        <View style={styles.items}></View>
        <View style={styles.items}></View>
        <View style={styles.items}></View>
      </View>
      <View style={styles.filas}>
        <View style={styles.items}></View>
        <View style={styles.items}></View>
        <View style={styles.items}></View>
      </View>
      </ImageBackground>
    </View>
  );
};
export default VisFlexUno;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  filas: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "green",
    width: "95%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filaheader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
    width: "95%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  items: {
    width: 100,
    height: 150,
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    display: "flex",
    margin: 10,
    borderRadius: 15,
  },
  itemsfooter: {
    width: "90%",
    height: 80,
    backgroundColor: "red",
    borderWidth: 10,
    borderColor: "white",
    margin: "5%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  estiloTexto: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
