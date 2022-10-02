import React, { memo } from "react";
import {
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Maximize from '../../Assets/Icons/maximize.svg';
import Minimize from '../../Assets/Icons/minimize.svg';

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
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    position: 'absolute',
    right: 12,
    top: 12,
    width: 48,
    zIndex: 2,
  },
});