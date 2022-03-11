import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Vidcal from '../../../assets/VideoCall.json';

const VideoCall = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="fadeInUp"
        duration={2000}>
        Setelah basa basi yang sering kita lakukan, akhirnya kita mulai
        berbicara melalui video call
      </Animatable.Text>
      <View style={{ alignItems: 'center', flex: 2 }}>
        <LottieView style={styles.videocall} source={Vidcal} autoPlay loop />
      </View>
      <Button
        mode="text"
        labelStyle={{ color: '#FFF' }}
        style={{ flex: 0.5 }}
        onPress={() => navigation.navigate('Confess')}>
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#325288',
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
  videocall: {
    height: 300,
  },
});

export default VideoCall;
