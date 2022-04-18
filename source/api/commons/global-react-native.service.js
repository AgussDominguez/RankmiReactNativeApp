import {
  LINKS_API,
  MASTER_API,
  NON_VERSIONED_API_URL,
  RANKMI_HOME_APP,
} from 'react-native-dotenv';

class GlobalReactNativeService {
  linksApi = LINKS_API;
  masterApi = MASTER_API;
  nonVersionedApiUrl = NON_VERSIONED_API_URL;
  rankmiHomeApp = RANKMI_HOME_APP;
}

export const globalReactNativeService = new GlobalReactNativeService();
