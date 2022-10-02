import React, { memo } from "react";
import {
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Maximize from '../../assets/icons/maximize.svg';
import Minimize from '../../assets/icons/minimize.svg';

interface ResizeButtonProps {
  state: ResizeState;
  action: () => void;
}

const ResizeButton = ({ state, action }: ResizeButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => action()}
      activeOpacity={0.75}
      accessibilityLabel={state == 'cover' ? 'Minimizar' : 'Maximizar'}>
      {state == 'cover' ? <Minimize width={24} height={24} /> : <Maximize width={24} height={24} />}
    </TouchableOpacity>
  );
}

export default memo(ResizeButton);

const Styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 2,
  },
});