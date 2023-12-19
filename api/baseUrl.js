import { Platform } from 'react-native';

function getBaseUrl() {
  if (!__DEV__) {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:5000/';
    } else {
      return 'http://localhost:5000/';
    }
  } else {
    return 'https://netanel-server.vercel.app/';
  }
}

const baseUrl = getBaseUrl();

export default baseUrl;
