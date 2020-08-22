import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from './components/Form Elements/Button'
import Card from './components/UIElements/Card';
import Input from './components/Form Elements/Input';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Profile from './Pages/Profile'
import * as Font from 'expo-font'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo';
import BrandHeader from './components/UIElements/BrandHeader';

const loadFont = () => {
  return Font.loadAsync({
    'poppins-medium': require('./assets/font/Poppins-Medium.ttf'),
    'poppins-bold': require('./assets/font/Poppins-Bold.ttf'),
    'poppins-semibold': require('./assets/font/Poppins-SemiBold.ttf'),
    'poppins-light': require('./assets/font/Poppins-Light.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator()
  // let [fontsLoaded] = useFonts({
  //     Poppins_400Regular,
  //     Poppins_500Medium,
  //     Poppins_600SemiBold
  // })
  if(!fontLoaded) {
    return (
      <AppLoading startAsync={loadFont} onFinish={() => setFontLoaded(true)} />
    );
  }
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor="#f1efd8"  />
      <BrandHeader />
      <Tab.Navigator barStyle={{ backgroundColor: '#4b6f61', fontFamily: 'poppins-medium', height: 50 }} activeColor="#f1efd8" inactiveColor="#fff">
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Auth" component={Auth} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  bar: {
    backgroundColor: 'red'
  }
});
