import React from 'react';
import { Text, View } from 'react-native';

import { MaterialIcons} from '@expo/vector-icons'

import { styles } from './styles';
import Animated, { BounceOutDown, SlideInDown } from 'react-native-reanimated';
import { theme } from '@/theme';

type PropsSelected = {
  quantity: number
  onClear: () => void
  onSearch: () => void

}

export function Selected({quantity, onClear, onSearch}: PropsSelected ) {
  return (
    <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
        <View style={styles.header}>
          <Text style={styles.label}>
            {quantity} ingredientes selecionados
          </Text>
          <MaterialIcons name='close' size={24} onPress={onClear} color={theme.colors.gray_400} />
        </View>
    </Animated.View>
  );
}