import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';

import { useState } from 'react';

const NullSpace = ({ padding }) => {
  return (
    <View
      style={{
        paddingTop: padding,
      }}
    ></View>
  );
};

const SingularityLogo = require('../assets/Logo.png');

export default function AppHome() {
  const [Name, setName] = useState('');
  return (
    <View style={styles.container}>
      <NullSpace padding={10} />

      <View style={styles.container}>
        <Text style={styles.header}>
          Singularity University
          <Text>{Name ? `\n\nHello ${Name} !` : ''}</Text>
        </Text>

        <View style={styles.ImageContainer}>
          <Image source={SingularityLogo} style={styles.Image} />
        </View>

        <Text style={styles.paragraph}>
          {'\n\n'}
          Singularity is a global community{'\n'}
          using exponential technologies to solve humanity's biggest challenges.
          {'\n\n'}
          We are a community of individuals,{'\n'}
          companies, and organizations{'\n'}
          who believe that exponential technologies{'\n'}
          are the key to solving humanity's biggest challenges.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)}
          value={Name}
        />

        <TouchableOpacity
          style={styles.materialButtonPrimary}
          onPress={() => {
            console.log('Pressed');
          }}
        >
          <Text style={styles.Text}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
