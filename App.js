import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Button from './components/Form Elements/Button'
import Card from './components/UIElements/Card';
import Input from './components/Form Elements/Input';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
// import {} from ''
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Profile from './Pages/Profile'
import * as Font from 'expo-font'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo';
import BrandHeader from './components/UIElements/BrandHeader';
import { createCompatNavigatorFactory, createSwitchNavigator } from '@react-navigation/compat'
import Constants from 'expo-constants'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const loadFont = () => {
  return Font.loadAsync({
    'poppins-medium': require('./assets/font/Poppins-Medium.ttf'),
    'poppins-bold': require('./assets/font/Poppins-Bold.ttf'),
    'poppins-semibold': require('./assets/font/Poppins-SemiBold.ttf'),
    'poppins-light': require('./assets/font/Poppins-Light.ttf')
  })
}

// let screenHeight = Dimensions.get('window').
// alert(StatusBar.currentHeight)
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  
  // const Tab = createMaterialBottomTabNavigator();
  // const Stack = createStackNavigator()
  // let [fontsLoaded] = useFonts({
  //     Poppins_400Regular,
  //     Poppins_500Medium,
  //     Poppins_600SemiBold
  // })

  const AuthStack = createCompatNavigatorFactory(createStackNavigator)({
    Auth: {
      screen: Auth,
      navigationOptions: () => ({
        headerTitle: 'Authenticate',
        headerShown: false,
      })
    }
  })

  const AppStack = createCompatNavigatorFactory(createStackNavigator)({
    Users: {
      screen: Home,
      navigationOptions: () => ({
        name: null
      })
    }
  })

  const ProfileStack = createCompatNavigatorFactory(createStackNavigator)({
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        name: null
      })
    }
  })

  const DashboardTabNavigator = createCompatNavigatorFactory(createMaterialBottomTabNavigator)(
    {
      Home: {
        screen: AppStack,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }
        }
      },
      Profile: {
        screen: ProfileStack,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            )
          },
          
        }
      }
    },
    // {
    //   navigationOptions: {
    //     tabBarVisible: true,
    //   },
    //   // tabBarColor: 'red',
    //   tabBarOptions: {
    //     activeTintColor: '#f1efd8',
    //     inactiveTintColor: '#fff',
    //     // showLabel: false,
        
    //   },
    // },
    {
      activeColor: '#fff',
      inactiveColor: '#d1e0db',
      barStyle: {
        backgroundColor: '#44d6e9',
        // height: 55,
        // alignItems: 'center',
        // justifyContent: 'center'
      }
    }
  )

  const DashboardStackNavigator = createCompatNavigatorFactory(createStackNavigator)(
    {
      DashboardTabNavigator: DashboardTabNavigator
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          // headerMode: 'none',
          headerTitle: 'Social App',
          // headerRight: () => {
          //   <MaterialCommunityIcons name="send" size={20} />
          // },
          // headerLeft: () => {
          //   <MaterialCommunityIcons name="send" size={20} />
          // },
          headerStyle: {
            backgroundColor: '#44d6e9',
            height: 45,
            // color: '#fff'
            // top: StatusBar.currentHeight
            // marginTop: Constants.statusBarHeight
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'rgba(8,14,44,0.7)',
            fontWeight: '700',
            fontSize: 22,
            backgroundColor: 'rgba(236, 244, 241, 0.5)',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 5,
            // elevation: 3
          }
          // safeAreaInsets: 'top'
        }
      }
    },
    {
      // headerMode: 'none',
      navigationOptions: {
        tabBarVisible: true,
      },
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'red',
        showLabel: false,
      },
    },
  )

  const AppDrawerNavigator = createCompatNavigatorFactory(createDrawerNavigator)({
    Dashboard: DashboardStackNavigator
  })

  const AppSwitchNavigator = createSwitchNavigator({
    Login: AuthStack,
    Dashboard: { screen: AppDrawerNavigator }
  })

  // const AppContainer = createAppContainer(AppSwitchNavigator)
  if(!fontLoaded) {
    return (
      <AppLoading startAsync={loadFont} onFinish={() => setFontLoaded(true)} />
    );
  }
  return (
    // <NavigationContainer>
    //   <StatusBar translucent={true} backgroundColor="#f1efd8"  />
    //   <BrandHeader />
    //   <Tab.Navigator barStyle={{ backgroundColor: '#4b6f61', fontFamily: 'poppins-medium', height: 50 }} activeColor="#f1efd8" inactiveColor="#fff">
    //     <Tab.Screen name="Home" component={Home} options={{
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={26} />
    //       ),
    //     }} />
    //     <Tab.Screen name="Profile" component={Profile} options={{
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="account" color={color} size={26} />
    //       ),
    //     }} />
    //     <Tab.Screen name="Auth" component={Auth} options={{
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="login" color={color} size={26} />
    //       ),
    //     }} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <AppContainer />
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar translucent={false} backgroundColor="rgba(236,244,241,0.5)"  />
        <AppSwitchNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
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