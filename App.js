import React, { useState, useEffect } from 'react';
import { Text, View, useColorScheme } from 'react-native';
// For nav bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  const {colors} = useTheme()

  useEffect(() => { // event handling
    
  }, [])

  return (
    <View style={{
      color: colors.text, flex: 1,
      backgroundColor: colors.background,
      textAlign:'center', alignItems:'center'
    }}>
      <Text style={{fontSize:30, flex: 1,color: colors.text ,textAlign:'center', alignItems:'center'}}>
        Home
      </Text>
    </View>
  );
}

function SettingsScreen() {
  const {colors} = useTheme()

  return (
    <View style={{
      color: colors.text, flex: 1,
      backgroundColor: colors.background,
      textAlign:'center', alignItems:'center'
    }}>
      <Text style={{fontSize:30, flex: 1,color: colors.text ,textAlign:'center', alignItems:'center'}}>
        Settings
      </Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();

  function setTheme() {
    if (scheme == "dark") {
      return NewDark
    } else {
      if (Device.brand == "Apple")
        return NewDark
      return NewLight
    }
  }

  return (
    <NavigationContainer theme={setTheme()}>
      <Tab.Navigator>
        {/* https://ionic.io/ionicons */}
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )}}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// THEMES

const NewDark = {
  dark: true,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  colors: {
    primary: '#c255ed',
    background: '#3b3b38',
    card: '#282828',
    text: 'whitesmoke',
    border: '#282828',
    notification: 'rgb(255, 69, 58)', 
  }
}

const NewLight = {
  dark: false,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  colors: {
    primary: '#c255ed',
    background: 'whitesmoke',
    card: 'white',
    text: '#212121',
    border: '#f0f0f0',
    notification: 'rgb(255, 69, 58)', 
  }
}
