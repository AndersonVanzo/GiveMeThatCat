import React, { useEffect, useState } from "react";
import {
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainStyles } from "../../Configs/MainStyles";
import ImageViwer from "../../Components/ImageViwer/ImageViwer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getImage } from "../../Actions/Images";

export const Home = ({ navigation }: NativeStackScreenProps<RootScreenProps, 'Home'>) => {
  const [imageUri, setImageUri] = useState('');
  const controller = new AbortController();

  const downloadImage = async (): Promise<void> => {

  }

  const loadImageFromApi = async (): Promise<void> => {
    setImageUri('');
    let data = await getImage(controller);
    if (!data.error) return setImageUri(data.image.url);
  }

  useEffect(() => {
    loadImageFromApi();
    navigation.addListener('beforeRemove', () => controller.abort());
  }, []);

  return (
    <SafeAreaView style={MainStyles.container}>
      <View style={MainStyles.content}>
        <ImageViwer uri={imageUri} next={loadImageFromApi} save={downloadImage} />
      </View>
    </SafeAreaView>
  );
}