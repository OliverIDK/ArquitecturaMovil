import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const VisInicio = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Imagenes/fondo.jpeg")}
        style={styles.background}
      >
        <Text style={styles.texto}>Inicio</Text>
      </ImageBackground>
    </View>
  );
};

export default VisInicio;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  background:{
    flex: 1,
    alignItems: "center",
  },
  texto:{
    textAlign:"center",
    marginTop:10,
    fontSize:20,
    fontWeight:"bold"
  }
});
