import { PermissionsAndroid } from "react-native";

export const checkAndroidPermissions = async (): Promise<boolean> => {
  const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
  if (granted == PermissionsAndroid.RESULTS.GRANTED) return true;
  else return false;
}