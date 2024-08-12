// Import expo status bar
import { StatusBar } from 'expo-status-bar';

// Import components
import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  FlatList } from 'react-native';

// Import task class
import task from 'task.js';

// Import useState and useEffect from react
import React, {useState, useEffect} from 'react';

export default function App() {
  const welcomeMsg = "Hello World! Testing Message...";
  return (
    <View style={styles.container}>
      <Text> {welcomeMsg} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
