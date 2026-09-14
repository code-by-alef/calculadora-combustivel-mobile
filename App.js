import { StyleSheet, Text, View, TextInput, Button,Image}from 'react-native';
import { useState } from 'react';
import logo from './assets/gas-station.png';

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState();
  const [precoGasolina, setPrecoGasolina] = useState();

function calcular(){
  if(precoAlcool && precoGasolina){
    if(precoAlcool / precoGasolina < 0.7) {
      alert("É mais vantajoso abastecer com ÁLCOOL!");

    } else {
      alert("É mais vantajoso abastecer com GASOLINA!");
    }
  } else {
    alert("Preencha o preço do Álcool e da Gasolina");
  }
};
return (
    <View style={styles.view}>
      <Image 
      source={logo}
      style={styles.logo}      
      /> 
      <Text style={styles.title}>Qual a melhor escolha ?</Text>

      <Text style={styles.label}>Álcool (Preço por litro)</Text>
      <TextInput
        placeholder="Digite o valor do Álcool:"
        keyboardType='numeric'
        value={precoAlcool}
        onChangeText={(value) => setPrecoAlcool(value)}
        style={styles.textInput}
      />
      <Text style={styles.label}>Gasolina (Preço por litro)</Text>
      <TextInput
        placeholder="Digite o valor da Gasolina"
        keyboardType='numeric'
        value={precoGasolina}
        style={styles.textInput}
        onChangeText={(value) => setPrecoGasolina(value)}
      />
    <Button 
    title='Calcular'
    onPress={calcular}
    color={"#ffd23b"}
    />
    </View>
  );
};

const styles = StyleSheet.create ({
    view:{
      backgroundColor:'#282c34',
      alignItems:'center',
      flex:1,
      paddingTop:80
    },
    textInput:{
      padding: 5,
      backgroundColor:'#fff',
      marginTop: 14,
      marginBottom:14,
      width:250,
      borderRadius:8
    },
    logo:{
      width:220,
      height:220
    },
    title:{
      marginTop:14,
      fontSize:24,
      color:'#fff',
      fontWeight:'bold'
    },
    label:{
      color:'#fff',
      fontSize:16,
      fontWeight:'bold',
      marginTop:14
    }
  });
