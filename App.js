/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { name as appName} from './app.json'
import React,{useState,useEffect} from 'react';
import type {Node} from 'react';
import {
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './src/Screens/Dashboard';
import Login from './src/Screens/Login';
import { Stack1 } from './src/navigation/AuthNavigator';

const App: () => Node = () => {

AppRegistry.registerComponent(appName, () => App)

  return (
     <NavigationContainer>
     <Stack1/>
    {/* <Login/> */}
    </NavigationContainer>
  // <Dashboard/>
  );
};



export default App;
