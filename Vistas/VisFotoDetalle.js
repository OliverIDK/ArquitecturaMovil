import { StyleSheet, Text, View,ScrollView,TextInput,ImageBackground, Alert} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const VisFotoDetalle = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.viewI}>
        <ImageBackground source={require('../Imagenes/producto.png')} style={styles.background}>
        </ImageBackground>
        </View>
        <View>
          <Text style={styles.text}>Código</Text>
          <TextInput style={styles.estiloinput} placeholder='Ingrese el Código'/>
        </View>
        <View>
          <Text style={styles.text}>Descripción</Text>
          <TextInput style={styles.estiloinput} placeholder='Ingrese la Descripción'/>
        </View>
        <View>
          <Text style={styles.text}>Precio</Text>
          <TextInput style={styles.estiloinput} placeholder='Ingrese el Precio'/>
        </View>
        <View>
          <Text style={styles.text}>Categoría</Text>
          <TextInput style={styles.estiloinput} placeholder='Ingrese la Categoría'/>
        </View>
        <View>
          <TouchableOpacity style={styles.boton}><Text style={styles.textoBotonOpa} onPress={()=>{Alert.alert("Guardado","Informacion almacenada",
            [{text: "OK", onPress: () =>{props.navigation.navigate('VF2')}}]
          )}}>Guardar</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default VisFotoDetalle

const styles = StyleSheet.create({
  container:{
    width:'80%',
    padding:10,
    backgroundColor:'#dde2ea',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  background:{
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  estiloinput:{
    height:28,
    width:280,
    fontSize:20,
    alignSelf:'center',
    borderBottomColor:'white',
    textAlign:'center',
    backgroundColor:'',
    marginBottom:15,
    borderBottomWidth:0.5,
  },
  text:{
    borderBottomWidth:0.5,
    height:35,
    width:280,
    fontSize:20,
    alignSelf:'center',
    borderBottomColor:'#8e93a1',
    textAlign:'center',
    backgroundColor:'#1d5ec9',
    color:'white',
    margin:10
  },
  viewI:{
    width:280,
    height:280,
  },
  boton:{
    width:280,
    height:35,
    backgroundColor:'#1d5ec9',
    borderRadius:32,
    
  },
  textoBotonOpa:{
    fontSize:20,
    color: 'white',    
    textAlign:'center',
    justifyContent:'center',
  }
})