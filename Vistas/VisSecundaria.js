import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const VisSecundaria = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodybody}>
          <TouchableOpacity style={styles.bodyboton}>
            <Text>Boton</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bodyboton}>
            <Text>Boton</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bodyboton}>
            <Text>Boton</Text>
          </TouchableOpacity>
        </View>
        <Text>Body</Text>
      </View>
    </View>
  );
};

export default VisSecundaria;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyboton: {
    height: 30,
    width: 50,
    backgroundColor: "blue",
    padding: 2,
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 10,
  },
  bodybody: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-arround",
    display: "flex",
  },
});
