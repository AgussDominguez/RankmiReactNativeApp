import {LINKS_API} from 'react-native-dotenv';

class GlobalReactNativeService {
  linksApi = LINKS_API;
}

export const globalReactNativeService = new GlobalReactNativeService();
