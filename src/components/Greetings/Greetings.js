import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Ig from '../../../assets/instalike.json';

const Greet = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="fadeInUp"
        duration={2000}>
        Sudah beberapa hari sejak pertama kali kita kenal dari Instagram
      </Animatable.Text>
      <View style={{ alignItems: 'center', flex: 2 }}>
        <LottieView style={styles.instagram} source={Ig} autoPlay loop />
      </View>
      <Button
        mode="text"
        labelStyle={{ color: '#FFF' }}
        style={{ flex: 0.5 }}
        onPress={() => navigation.navigate('Chat')}>
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE83C6',
  },
  title: {
    paddingTop: 50,
    paddingHorizontal: 10,
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  instagram: {
    height: 300,
  },
});

export default Greet;
