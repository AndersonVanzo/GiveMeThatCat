import React, { memo, useState } from "react";
import {
  Image,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ResizeButton from "./ResizeButton";
import ViwerButton from "./ViwerButton";
import EmpityViwer from "./EmpityViwer";
import { Styles } from "./Styles";

interface ImageViwerProps {
  uri: string;
  next: () => void;
  save: () => void;
}

const ImageViwer = ({ uri, next, save }: ImageViwerProps): JSX.Element => {
  const [resize, setResize] = useState('cover' as ResizeState);

  const footerGradient = ['transparent', '#00000033', '#00000077', '#000000dd', '#000'];
  const headerGradient = ['#000', '#00000077', 'transparent'];

  const changeResizeMode = async (): Promise<void> => {
    if (resize == 'contain') setResize('cover');
    else setResize('contain');
  }


  return (
    <View style={Styles.container}>
      <LinearGradient style={Styles.header} colors={headerGradient}>
        <ResizeButton state={resize} action={changeResizeMode} />
      </LinearGradient>
      {uri.length > 0 ? <Image source={{ uri }} resizeMode={resize} style={Styles.image} /> : <EmpityViwer />}
      <LinearGradient style={Styles.buttons} colors={footerGradient}>
        <ViwerButton type={'download'} action={save} />
        <ViwerButton type={'next'} action={next} />
      </LinearGradient>
    </View>
  );
}

export default memo(ImageViwer);