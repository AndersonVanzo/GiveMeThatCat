import { StyleSheet } from "react-native";
import { Colors } from "../../Configs/Colors";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#000',
    overflow: 'hidden',
    borderColor: Colors.secondary,
    borderWidth: 4,
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 98,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  image: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 68,
    zIndex: 2,
  },
});