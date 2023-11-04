import * as SecureStore from 'expo-secure-store';

const nativeStorage = {
  setStringAsync(key: string, value: string) {
    return SecureStore.setItemAsync(key, value);
  },

  getStringAsync(key: string) {
    return SecureStore.getItemAsync(key);
  },

  deleteStringAsync(key: string) {
    return SecureStore.deleteItemAsync(key);
  },
};

export default nativeStorage;
