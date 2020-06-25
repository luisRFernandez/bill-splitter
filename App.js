import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

export default function App() {
  //MODEL VIEW CONTROLLER

  //CONTROLLER
  //Valores de input atraves do <TextInput> e onChangeText
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  
  //MODEL
  //Funcao para o calculo do programa
  //valorDeles -> grupo1, valorNosso -> grupo2
  function budget_calc(valorGrupo1, valorGrupo2){
    let valorGrupo1_pt1 = valorGrupo1 / 2;
    let valorGrupo2_pt1 = valorGrupo2 / 2;

    if (valorGrupo1_pt1 > valorGrupo2_pt1){
            return "Grupo1 deve receber: " + (valorGrupo1_pt1 - valorGrupo2_pt1).toFixed(2);
    } else if (valorGrupo1_pt1 < valorGrupo2_pt1) {
            return "Grupo2 deve receber: " + (valorGrupo2_pt1 - valorGrupo1_pt1).toFixed(2);
    } else {
            return "Valores identicos";
    }
  }

  //VIEW
  return (
    <View style={styles.container}>

      <StatusBar
        barStyle='light-content'
        backgroundColor='#1C1C1C'
      ></StatusBar>

      <Text style={styles.title}>Cálculo de Finanças</Text>

      <Text style={styles.text}>Valor para o grupo 1:</Text>
      
      <TextInput
      keyboardType='numeric'
      style={styles.input}
      placeholder="Digite o valor"
      onChangeText = {(val1) => setValue1(val1)}
      />

      <Text style={styles.text}>Valor para o grupo 2:</Text>
      
      <TextInput
      keyboardType='numeric'
      style={styles.input}
      placeholder="Digite o valor"
      onChangeText = {(val2) => setValue2(val2)}
      />
      
      <Text style={styles.resultHighlight}>{budget_calc(value1, value2)}</Text>

      <Text style={styles.textPowered}>powered by <Text style={{color: '#FF0000',}}>//</Text>kuurome</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontSize: 20,
    fontWeight: 'normal',
    borderRadius: 6,
    padding: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'normal',
    position: 'absolute',
    top: 40,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'normal',
  },
  resultHighlight: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPowered: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'italic',
    position: 'absolute',
    bottom: 80,
  },
});
