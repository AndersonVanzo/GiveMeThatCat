import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainStyles } from "../../Configs/MainStyles";
import { Styles } from "./Styles";
import Instagram from '../../Assets/Icons/instagram.svg';
import Linkedin from '../../Assets/Icons/linkedin.svg';
import GitHub from '../../Assets/Icons/github.svg';

export const About = () => {
  return (
    <SafeAreaView style={MainStyles.container}>
      <View style={Styles.container}>
        <Text style={Styles.title}>desenvolvido por</Text>
        <Text style={Styles.text}>Anderson R. Vanzo</Text>
        <Text style={Styles.title}>fotos de</Text>
        <Text style={Styles.text} onPress={() => Linking.openURL('https://thecatapi.com/')}>The Cat API</Text>
        <Text style={Styles.title}>ícones de</Text>
        <Text style={Styles.text} onPress={() => Linking.openURL('https://www.svgrepo.com/')}>SVG Repo</Text>
        <View style={Styles.footer}>
        <View style={Styles.row}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => Linking.openURL('https://github.com/AndersonVanzo')}
            activeOpacity={0.75}
            accessibilityLabel={'GitHub'}>
            <GitHub width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => Linking.openURL('https://www.linkedin.com/in/anderson-vanzo')}
            activeOpacity={0.75}
            accessibilityLabel={'LinkedIn'}>
            <Linkedin width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => Linking.openURL('https://www.instagram.com/knownt_')}
            activeOpacity={0.75}
            accessibilityLabel={'Instagram'}>
            <Instagram width={24} height={24} />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}