import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState
} from 'react'
import VisParametroDos from './VisParametroDos'

const VisParametroUno = () => {
    const [parametros, setParametros]=useState({
        cantidadTextos:"",
        cantidadBotones:"",
        cantidadImagenes:"",
    })
    const usarTextos=(cantidadTextos,value)=>{
        setParametros({...parametros,[cantidadTextos]:value})
    }

  return (
    <View>
      <Text>Vista</Text>
      <Text>Cantidad de inputs</Text>
      <TextInput onChangeText={(Value)=>usarTextos('cantidadTextos',Value)}/>
        <Text> Cantidad de botones</Text>
        <TextInput onChangeText={(Value)=>usarTextos('cantidadBotones',Value)}></TextInput>
        <Text> Cantidad de Imagenes</Text>
        <TextInput onChangeText={(Value)=>usarTextos('cantidadImagenes',Value)}></TextInput>
        <VisParametroDos cuantosTextos={parametros.cantidadTextos}
        cuantosBotones={parametros.cantidadBotones}
        cuantosImagenes={parametros.cantidadImagenes}/>
    </View>
  )
}

export default VisParametroUno

const styles = StyleSheet.create({})