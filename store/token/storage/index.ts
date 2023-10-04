import { Platform } from 'react-native';
import nativeStorage from './native';
import webStorage from './web';

function platformStorage() {
  switch (Platform.OS) {
    case 'web':
      return webStorage;
    default:
      return nativeStorage;
  }
}

export function setStringAsync(key: string, value: string) {
  return platformStorage().setStringAsync(key, value);
}

export function getStringAsync(key: string) {
  return platformStorage().getStringAsync(key);
}

export function deleteStringAsync(key: string) {
  return platformStorage().deleteStringAsync(key);
}
