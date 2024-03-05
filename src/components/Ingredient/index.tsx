import React from 'react';
import { Image, Pressable, PressableProps, Text  } from 'react-native';

import { styles } from './styles';

export type IngredientProps = {
  name: string
  image: string
  selected?: boolean
}

import ingredientImg from '../../assets/🍅tomato.png'

export function Ingredient({image, name, selected = false, ...rest}: IngredientProps & PressableProps) {
  return (
   
   <Pressable style={[styles.container, selected && styles.selected]} {...rest} >
    <Image source={ingredientImg} style={styles.image} />
    <Text style={styles.title} >{name}</Text>
   </Pressable>
  );
}