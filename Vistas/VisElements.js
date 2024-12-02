import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Button, Header, Card, Text } from "react-native-elements";
const VisElements = (props) => {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "App con elemnts", style: styles.header }}
        rightComponent={{ icon: "menu", color: "#fff" }}
      />
      <ScrollView>
        <Card>
          <Card.Title>Titulo del Contenido</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom:10, color:'#333', fontSize:16}}>Este es un ejemplo de la biblioteca RN elements para "UI"</Text>
          <Button
            title="Mostrar"
            buttoStyle={styles.button}
            onPress={() => alert("Mensaje de prueba")}
          />
        </Card>
        <Card>
          <Card.Title>Titulo del Contenido</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom:10, color:'#333', fontSize:16}}>Este es un segundo ejemplo de la biblioteca RN elements para "UI"</Text>
          <Button
            title="Mostrar"
            buttoStyle={styles.button}
            onPress={() => alert("Mensaje de prueba")}
          />
        </Card>
        <Card>
          <Card.Title>Titulo del Contenido</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom:10, color:'#333', fontSize:16}}>Este es un ejemplo de la biblioteca RN elements para "UI"</Text>
          <Button
            title="Mostrar"
            buttoStyle={styles.button}
            onPress={() => alert("Mensaje de prueba")}
          />
        </Card>
        <Card>
          <Card.Title>Titulo del Contenido</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom:10, color:'#333', fontSize:16}}>Este es un ejemplo de la biblioteca RN elements para "UI"</Text>
          <Button
            title="Mostrar"
            buttoStyle={styles.button}
            onPress={() => alert("Mensaje de prueba")}
          />
        </Card>
        <Card>
          <Card.Title>Titulo del Contenido</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom:10, color:'#333', fontSize:16}}>Este es un ejemplo de la biblioteca RN elements para "UI"</Text>
          <Button
            title="Mostrar"
            buttoStyle={styles.button}
            onPress={() => alert("Mensaje de prueba")}
          />
        </Card> 
      </ScrollView>
    </View>
  );
};

export default VisElements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  button: {
    backgroundColor: "#2089DC",
  },
  header: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
