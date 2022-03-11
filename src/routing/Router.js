import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Greet from '../components/Greetings/Greetings';
import Chat from '../components/Chatting/Chatting';
import VidCall from '../components/VideoCall/VideoCall';
import Confess from '../components/Confess/Confess';
import Yes from '../components/Yes/Yes';
import No from '../components/No/No';
import No2 from '../components/No/No2';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Greet"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Greet" component={Greet} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="VidCall" component={VidCall} />
        <Stack.Screen name="Confess" component={Confess} />
        <Stack.Screen name="Yes" component={Yes} />
        <Stack.Screen name="No" component={No} />
        <Stack.Screen name="No2" component={No2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
