import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Chatting from '../../../assets/chatting.json';

const Chat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="fadeInUp"
        duration={2000}>
        Aku mencoba memberanikan diri untuk memulai sebuah percakapan denganmu
      </Animatable.Text>
      <View style={{ alignItems: 'center', flex: 2 }}>
        <LottieView style={styles.chat} source={Chatting} autoPlay loop />
      </View>
      <Button
        mode="text"
        labelStyle={{ color: '#FFF' }}
        style={{ flex: 0.5 }}
        onPress={() => navigation.navigate('VidCall')}>
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9AD0EC',
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
  chat: {
    height: 300,
  },
});

export default Chat;
