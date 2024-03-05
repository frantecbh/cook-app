import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';


import { Ingredient } from '@/components/Ingredient';
import { Selected } from '@/components/Selected';

export default function Index() {

  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string){
    if(selected.includes(value)){
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  function hanleClearSelected(){

    Alert.alert("Limpar", "Deseja limpar tudo?", [
      {text: "Não", style: "cancel"},
      {text: "Sim", onPress: () =>  setSelected([])}
    ])
   
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
          Escolha {'\n'}
          <Text style={styles.subtitle}>os produtos</Text>
          </Text>
        <Text style={styles.message}>Descubra receitas baseadas nos produtos que você selecionou</Text>
        <ScrollView  contentContainerStyle={styles.ingredientsContainer} showsVerticalScrollIndicator={false}>
{
  Array.from({length: 100}).map((item, i) => (
    <Ingredient key={i} name='Maçã' image='' selected={selected.includes(String(i))} onPress={() =>handleToggleSelected(String(i))} />
  ))
}
</ScrollView>

{
  selected.length > 0  &&  <Selected quantity={selected.length} onClear={hanleClearSelected} onSearch={() =>{}} />
}

    </View>
  );
}