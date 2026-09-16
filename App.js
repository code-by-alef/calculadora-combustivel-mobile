import { StyleSheet, Text, View, TextInput, Button,Image, SafeAreaViewBase}from 'react-native';
import { useState } from 'react';
import logo from './assets/gas-station.png';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [showScreen, setShowScreen] = useState('');

function calcular(){
  if(precoAlcool && precoGasolina){
  
    const valorAlcool = parseFloat(precoAlcool.replace(',', '.'));
    const valorGasolina = parseFloat(precoGasolina.replace(',', '.'));

    if(valorAlcool <= 0 || valorGasolina <= 0) {
      setShowScreen("O valor do álcool e da gasolina devem ser maior que zero");
      return;
    }

    if(valorAlcool / valorGasolina < 0.7) {
      setShowScreen("É mais vantajoso abastecer com ÁLCOOL!");

    } else {
      setShowScreen("É mais vantajoso abastecer com GASOLINA!");
    }
  } else {
      setShowScreen("Preencha o preço do Álcool e da Gasolina");
  }
};

return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.areaview}>
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
          onChangeText={(value) => {
            let cleanedValue = value.replace(/[^0-9.,]/g,'').replace('.',',');

            if (cleanedValue.startsWith(',')) {
              cleanedValue = cleanedValue.substring(1);
            }

            if(cleanedValue.length > 1 && cleanedValue.startsWith('0') && cleanedValue[1] !== ',') {
              cleanedValue = cleanedValue.substring(1);
            }

            const clean = cleanedValue.split(',');
            
            if (clean.length > 2){
              return;
            }

            if (clean.length === 2 && clean[1].length > 2) {
              return;
            }

            setPrecoAlcool(cleanedValue);
            setShowScreen(null);
          }}
          style={styles.textInput}
          />
         <Text style={styles.label}>Gasolina (Preço por litro)</Text>
          <TextInput
          placeholder="Digite o valor da Gasolina"
          keyboardType='numeric'
          value={precoGasolina}
          style={styles.textInput}
          onChangeText={(value) => {
            let cleanedValue = value.replace(/[^0-9.,]/g,'').replace('.',',');

            if (cleanedValue.startsWith(',')) {
              cleanedValue = cleanedValue.substring(1);
            }

            if(cleanedValue.length > 1 && cleanedValue.startsWith('0') && cleanedValue[1] !== ',') {
              cleanedValue = cleanedValue.substring(1);
            }

            const clean = cleanedValue.split(',');
            
            if (clean.length > 2){
              return;
            }

            if (clean.length === 2 && clean[1].length > 2) {
              return;
            }
            setPrecoGasolina(cleanedValue);
            setShowScreen(null);
          }}
        />
        <Button 
        title='Calcular'
        onPress={calcular}
        color={"#ffd23b"}
        />
        {showScreen ? (<Text style={styles.show}>{showScreen}</Text>) : null }
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create ({
    areaview:{
      backgroundColor:'#282c34',
      flex:1
    },
    view:{
      backgroundColor:'#282c34',
      alignItems:'center',
      flex:1,
      paddingTop:40
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
    },
    show:{
      marginTop:20,
      color:'#fff',
      fontSize:17,
      justifyContent:'center',
      fontWeight:'bold'
    }
  });
