import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Smile from '../../../assets/Smile.json';

const Confess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="fadeInUp"
        duration={2000}>
        Terima Kasih, mari kita menulis sebuah cerita bersama mulai sekarang :)
      </Animatable.Text>
      <View style={{ alignItems: 'center', flex: 2 }}>
        <LottieView style={styles.propose} source={Smile} autoPlay loop />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCCD2',
  },
  title: {
    paddingTop: 100,
    paddingHorizontal: 10,
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
