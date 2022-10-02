import { StyleSheet } from "react-native";
import { Colors } from "../../Configs/Colors";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.primary,
    fontSize: 22,
    fontWeight: '600',
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 14,
    marginTop: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  credit: {
    color: Colors.primary,
  },
});