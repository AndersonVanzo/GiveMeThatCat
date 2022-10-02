import React, { memo } from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../Configs/Colors";
import Download from '../../Assets/Icons/download.svg';
import Next from '../../Assets/Icons/next.svg';

interface ViwerButtonProps {
  type: 'download' | 'next',
  action: () => void,
}

const ViwerButton = ({ type, action }: ViwerButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => action()}
      activeOpacity={0.75}
      accessibilityLabel={type == 'next' ? 'Próximo' : 'Baixar'}>
      {type == 'next' ? <Next width={24} height={24} style={{ marginLeft: 2 }} /> : <Download width={32} height={32} />}
    </TouchableOpacity>
  );
}

export default memo(ViwerButton);

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderRadius: 46,
    borderWidth: 2,
    height: 72,
    justifyContent: 'center',
    width: 72,
  },
});