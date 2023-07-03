import React from 'react';
import { View, Text } from 'react-native';
import Styles from "./style"
import styles from './style';

export default function Title() {
 return (
   <View style={styles.boxTitle}>
        <Text style={styles.textTilte}>ONEBITHEALTH</Text>
   </View>
  );
}