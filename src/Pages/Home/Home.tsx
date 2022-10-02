import React, { useEffect, useState } from "react";
import {
  Alert,
  ToastAndroid,
  View,
} from "react-native";
import { checkAndroidPermissions } from "../../../utils/checkAndroidPermissions";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainStyles } from "../../Configs/MainStyles";
import { getImage } from "../../Actions/Images";
import RNFetchBlob from "rn-fetch-blob";
import ImageViwer from "../../Components/ImageViwer/ImageViwer";

export const Home = ({ navigation }: NativeStackScreenProps<RootScreenProps, 'Home'>) => {
  const [imageUri, setImageUri] = useState('');
  const controller = new AbortController();

  const downloadImage = async (): Promise<void> => {
    let permission = await checkAndroidPermissions();
    if (!permission) return Alert.alert('Oops!', 'O aplicativo não possui permissão para salvar a imagem :(');
    let date = new Date();
    const { config, fs } = RNFetchBlob;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: `${fs.dirs.PictureDir}/gatinho_${Math.floor(date.getTime() + date.getSeconds() / 2)}.png`
      },
      description: 'Gatinho',
    }
    config(options).fetch('GET', imageUri)
      .then(() => {
        ToastAndroid.showWithGravity('Gatinho salvo!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      })
      .catch(() => {
        ToastAndroid.showWithGravity('Deu um erro ao salvar o gatinho :(', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      });
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