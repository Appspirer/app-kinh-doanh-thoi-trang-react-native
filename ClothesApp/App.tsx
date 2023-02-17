import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppStack from './src/navigations/StackNavigator';

export default function App(){
  return(
    <SafeAreaView style={{flex:1}}>
      <AppStack/>
    </SafeAreaView>
  )
}
