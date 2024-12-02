import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Slider from "@react-native-community/slider";

const VisParametroDos = ({
  cuantosTextos,
  cuantosBotones,
  cuantosImagenes,
  cuantosSliders,
}) => {
  const [sliderValues, setSliderValues] = useState(
    Array(cuantosSliders).fill(0)
  );

  const render = () => {
    let elements = [];

    for (let i = 0; i < cuantosTextos; i++) {
      elements.push(<Text key={`text-${i}`}>Texto dinámico {i + 1}</Text>);
    }

    for (let i = 0; i < cuantosBotones; i++) {
      elements.push(
        <TouchableOpacity key={`button-${i}`} style={styles.button}>
          <Text>Botón dinámico {i + 1}</Text>
        </TouchableOpacity>
      );
    }

    for (let i = 0; i < cuantosImagenes; i++) {
      elements.push(
        <ImageBackground
          key={`image-${i}`}
          style={styles.image}
          source={require("../Imagenes/producto.png")}
        >
          <Text style={styles.textoimage}>Imagen {i + 1}</Text>
        </ImageBackground>
      );
    }

    for (let i = 0; i < cuantosSliders; i++) {
      elements.push(
        <View key={`slider-${i}`} style={styles.sliderContainer}>
          <Text>
            Slider {i + 1} - Valor: {sliderValues[i]}
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={sliderValues[i]}
            onValueChange={(value) => {
              let updatedValues = [...sliderValues];
              updatedValues[i] = value;
              setSliderValues(updatedValues);
            }}
          />
        </View>
      );
    }

    return elements;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componente Secundario</Text>
      {render()}
    </View>
  );
};

export default VisParametroDos;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textoimage: {
    display:"none"
  },
  sliderContainer: {
    marginVertical: 10,
  },
  slider: {
    width: 200,
    height: 40,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  flatListItem: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    marginBottom: 5,
    borderRadius: 5,
  },
});
