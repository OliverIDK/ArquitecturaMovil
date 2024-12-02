import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import VisParametroDos from "./VisParametroDos";

const VisParametroUno = () => {
  const [parametros, setParametros] = useState({
    cantidadTextos: "",
    cantidadBotones: "",
    cantidadImagenes: "",
    cantidadSliders: "",
  });

  const usarTextos = (key, value) => {
    setParametros({ ...parametros, [key]: value });
  };

  const formData = [
    { key: "cantidadTextos", label: "Cantidad de textos:" },
    { key: "cantidadBotones", label: "Cantidad de botones:" },
    { key: "cantidadImagenes", label: "Cantidad de imágenes:" },
    { key: "cantidadSliders", label: "Cantidad de sliders:" },
  ];

  const renderInput = ({ item }) => (
    <View>
      <Text>{item.label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(value) => usarTextos(item.key, value)}
      />
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={formData}
      renderItem={renderInput}
      keyExtractor={(item) => item.key}
      ListHeaderComponent={<Text style={styles.title}>Vista Principal</Text>}
      ListFooterComponent={
        <VisParametroDos
          cuantosTextos={(parametros.cantidadTextos)}
          cuantosBotones={(parametros.cantidadBotones)}
          cuantosImagenes={(parametros.cantidadImagenes)}
          cuantosSliders={(parametros.cantidadSliders)}
        />
      }
    />
  );
};

export default VisParametroUno;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});