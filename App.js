import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Router from './src/routing/Router';
import Confess from './src/components/Confess/Confess';

export default function App() {
  return (
    <View style={styles.container}>
      <Router />
      {/*<Confess />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});