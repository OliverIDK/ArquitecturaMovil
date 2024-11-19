import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

const VisFlex2 = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Imagenes/fondo.jpeg")}
        style={styles.background}
      >
        <View style={styles.filaheader}>
          <View style={styles.itemsfooter}>
            <Text style={styles.estiloTexto}>Practica de Flex 2</Text>
          </View>
        </View>
        <View style={styles.filas}>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Izquierda</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("VFD");
              }}
              style={styles.estiloBoton}
            >
              <Text style={styles.textoBotonOpa}>Boton</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Centro</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
          </View>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Derecha</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
          </View>
        </View>
        <View style={styles.filas}>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Izquierda</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
          </View>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Centro</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
          </View>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Derecha</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
          </View>
        </View>
        <View style={styles.filas}>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Izquierda</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
          </View>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Centro</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
          </View>
          <View style={styles.items}>
            <Text style={styles.estiloTextoFoto}>Derecha</Text>
            <ImageBackground
              source={require("../Imagenes/producto.png")}
              style={styles.background}
            ></ImageBackground>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VisFlex2;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
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
    opacity: 0.9,
  },
  filaheader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
    width: "95%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0.9,
  },
  items: {
    width: 100,
    height: 150,
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    justifyContent: "center",
    margin: 10,
    borderRadius: 15,
    alignContentText: "center",
    alignItems: "center",
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
    justifyContent: "center",
  },
  estiloTextoFoto: {
    colo: "black",
    fontSize: 20,
    alignContentText: "center",
    fontWeight: "bold",
    justifyContent: "center",
  },
  estiloBoton: {
    width: "100%",
    heigh: "20%",
    backgroundColor: "red",
    borderRadius: 20,
  },
  textoBotonOpa: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
