import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'

const VisParametroDos = ({cuantosTextos,cuantosBotones,cuantosImagenes}) => {
    const render = () =>{
        let elements=[];
        for(let i=0;i<cuantosTextos;i++){
            elements.push(
                <Text key={i}>Elemento dinamico {i}</Text>
                
            )
        }
        for(let i=0;i<cuantosBotones;i++){
          elements.push(
              <TouchableOpacity key={i}><Text>Boton dinamico {i}</Text></TouchableOpacity>
              
          )
      }
      for(let i=0;i<cuantosImagenes;i++){
        elements.push(
            <ImageBackground source={require('../Imagenes/producto.png')} key={i}></ImageBackground>
            
        )
    }

        return elements;
    }
  return (
    <View>
      <Text>Componente secundario</Text>
      <Text>{cuantosImagenes}</Text>
      {render()}
    </View>
  )
}

export default VisParametroDos

const styles = StyleSheet.create({})