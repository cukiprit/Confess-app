import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Crying from '../../../assets/Crying.json';

const Btn = ({ buttonText, buttonPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={buttonPress}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const Confess = ({ navigation }) => {
  const [answer, setAnswer] = useState('');

  const btnNavigate = () => {
    if(answer == 'Yes'){
      navigation.replace('No2');
      setAnswer('');
    } else if(answer == 'No') {
      navigation.goBack();
      setAnswer('');
    }
  }

  useEffect(() => {
    btnNavigate();
  }, [answer])

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="fadeInUp"
        duration={2000}>
        Are you sure?
      </Animatable.Text>
      <View style={{ alignItems: 'center', flex: 2 }}>
        <LottieView style={styles.propose} source={Crying} autoPlay loop />
      </View>
      <View style={styles.containerBtn}>
        <Btn buttonText="Yes" buttonPress={() => setAnswer('Yes')} />
        <Btn buttonText="No" buttonPress={() => setAnswer('No')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDA2',
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
  btn: {
    paddingHorizontal: 70,
    paddingVertical: 50,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 20
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

export default Confess;
