import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Button,
} from "react-native";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { RadioButton } from "react-native-paper";
import CheckBox from "react-native-checkbox";
import PieChart from "react-native-pie-chart";
import DateTimePicker from "@react-native-community/datetimepicker";

const VisFormUno = (props) => {
  const data = [
    { label: "Local", value: "1" },
    { label: "Nacional", value: "2" },
    { label: "Extranjero", value: "3" },
  ];
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  const showDatepicker = () => {
    setShow(true);
    setMode("date");
  };

  const [gender, setGender] = useState("male");
  const [isChecked, setChecked] = useState(false);
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50", "#FF9800"];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Imagenes/fondo.jpeg")}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.form}>
            <View style={styles.first}>
              <Text style={styles.textos}>RFC:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Ingresa tu RFC"
              />
            </View>
            <View>
              <Text style={styles.textos}>Nombre:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Ingresa tu nombre"
              />
            </View>
            <View>
              <Text style={styles.textos}>Correo:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Ingresa tu correo"
              />
            </View>
            <View>
              <Text style={styles.textos}>Telefono:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Ingresa tu número de teléfono"
              />
            </View>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={400}
              labelField="label"
              valueField="value"
              placeholder="Selecciona un tipo"
              searchPlaceholder="Buscar..."
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color="black"
                  name="Safety"
                  size={20}
                />
              )}
            />
            <Text style={styles.textos}>Género:</Text>
            <View style={styles.radioGroup}>
              <RadioButton
                value="male"
                status={gender === "male" ? "checked" : "unchecked"}
                onPress={() => setGender("male")}
              />
              <Text style={styles.radioLabel}>Masculino</Text>

              <RadioButton
                value="female"
                status={gender === "female" ? "checked" : "unchecked"}
                onPress={() => setGender("female")}
              />
              <Text style={styles.radioLabel}>Femenino</Text>
            </View>
            <Text style={styles.textos}>Sucursales</Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                label="Vallarta"
                value={isChecked}
                onValueChange={setChecked}
              />
              <CheckBox
                label="Guadalajara"
                value={isChecked}
                onValueChange={setChecked}
              />
            </View>
            <SafeAreaView>
              <View style={styles.btnFecha}>
                <Button title="Fecha de nacimiento" onPress={showDatepicker} />
              </View>
              <Text style={styles.fecha}>
                Fecha:
                {date.toLocaleString([], { dateStyle: "medium" })}
              </Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </SafeAreaView>

            <View style={styles.PieChartCotain}>
              <Text style={styles.title}>Basic</Text>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
              />
              <Text style={styles.title}>Doughnut</Text>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.45}
                coverFill={"#FFF"}
              />
            </View>
            <View style={styles.BotonContainer}>
              <TouchableOpacity style={styles.boton}>
                <Text style={styles.textotouchable}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default VisFormUno;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  form: {
    padding: 20,
    justifyContent: "center",
  },
  inputText: {
    borderBottomWidth: 0.5,
    height: 28,
    width: 280,
    fontSize: 20,
    alignSelf: "center",
    borderBottomColor: "black",
    textAlign: "center",
    marginBottom: 15,
    color: "black",
  },
  textos: {
    borderBottomWidth: 0.5,
    height: 35,
    width: 280,
    fontSize: 20,
    alignSelf: "center",
    borderBottomColor: "black",
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "#dde2ea",
    color: "black",
  },
  dropdown: {
    backgroundColor: "#dde2ea",
    margin: 5,
    height: 60,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    width: 280,
    alignSelf: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "black",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "black",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  background: {
    flex: 1,
  },
  boton: {
    alignItems: "center",
    backgroundColor: "#dde2ea",
    width: 160,
    alignSelf: "center",
    borderRadius: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  BotonContainer: {
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "center",
  },
  textotouchable: {
    color: "black",
    fontSize: 16,
  },
  first: {
    marginTop: 10,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  radioLabel: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 16,
    color: "black",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "black",
  },
  PieChartCotain: {
    alignItems: "center",
  },
  fecha: {
    fontSize: 20,
    margin: "auto",
  },
  btnFecha: {
    marginBottom: 10,
  },
});
