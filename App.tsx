import React from "react";
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/Pages/Home/Home";
import { About } from "./src/Pages/About/About";
import { Colors } from "./src/Configs/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import Cat from './src/assets/icons/cat.svg';
import Info from './src/assets/icons/info.svg';

const Tab = createBottomTabNavigator();

export const App = () => {

  const Configs: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: Colors.primary,
      borderTopLeftRadius: 48,
      borderTopRightRadius: 48,
      height: 84,
    }
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderRadius: 32,
      height: 64,
      justifyContent: 'center',
      width: 64,
    },
    selected: {
      backgroundColor: '#FFFFFF55',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '400',
    }
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={Configs}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.container, focused && styles.selected]}>
                <Cat width={32} height={32} />
                <Text style={styles.text}>início</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name={'About'}
          component={About}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.container, focused && styles.selected]}>
                <Info width={32} height={32} />
                <Text style={styles.text}>sobre</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}