import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { styles } from './src/style';
import AppHome from './src/index';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppHome />
    </View>
  );
}
