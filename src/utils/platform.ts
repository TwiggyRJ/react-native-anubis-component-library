import { Platform } from 'react-native';

export function getPlatform() {
  return Platform.OS;
}

export function isIOS() {
  if (Platform.OS === "ios") {
    return true;
  } else {
    return false;
  }
}

export function isAndroid() {
  if (Platform.OS === "android") {
    return true;
  } else {
    return false;
  }
}
