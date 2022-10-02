import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./src/Configs/Colors";
import { About } from "./src/Pages/About/About";
import { Home } from "./src/Pages/Home/Home";
import Info from './src/Assets/Icons/info.svg';
import Cat from './src/Assets/Icons/cat.svg';

const Tab = createBottomTabNavigator<RootScreenProps>();

export const App = () => {

  const Configs: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: Colors.primary,
      borderTopLeftRadius: 48,
      borderTopRightRadius: 48,
      bottom: 0,
      height: 84,
      left: 0,
      position: 'absolute',
      right: 0,
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
      <Tab.Navigator initialRouteName={'Home'} screenOptions={Configs}>
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