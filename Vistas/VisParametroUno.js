import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import VisParametroDos from "./VisParametroDos";

const VisParametroUno = () => {
  const [parametros, setParametros] = useState({
    cantidadTextos: "",
    cantidadBotones: "",
    cantidadImagenes: "",
    cantidadSliders: "",
    cantidadFlatListItems: "",
  });

  const usarTextos = (key, value) => {
    setParametros({ ...parametros, [key]: value });
  };

  const formData = [
    { key: "cantidadTextos", label: "Cantidad de textos:" },
    { key: "cantidadBotones", label: "Cantidad de botones:" },
    { key: "cantidadImagenes", label: "Cantidad de imágenes:" },
    { key: "cantidadSliders", label: "Cantidad de sliders:" },
    { key: "cantidadFlatListItems", label: "Cantidad de elementos en FlatList:" },
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
          cuantosTextos={parseInt(parametros.cantidadTextos) || 0}
          cuantosBotones={parseInt(parametros.cantidadBotones) || 0}
          cuantosImagenes={parseInt(parametros.cantidadImagenes) || 0}
          cuantosSliders={parseInt(parametros.cantidadSliders) || 0}
          cuantosFlatListItems={parseInt(parametros.cantidadFlatListItems) || 0}
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
