import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Crying from '../../../assets/Crying2.json';

const Confess = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="fadeInUp"
        duration={2000}>
        It's okay, jika itu memang pilihanmu
      </Animatable.Text>
      <View style={{ alignItems: 'center', flex: 2 }}>
        <LottieView style={styles.propose} source={Crying} autoPlay loop />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC600',
  },
  title: {
    paddingTop: 100,
    paddingHorizontal: 10,
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
    textAlign: 'center',
  },
  propose: {
    height: 250,
  },
});

export default Confess;
