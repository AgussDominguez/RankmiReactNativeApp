import axios from 'axios';
import {globalReactNativeService} from '../../api/commons/global-react-native.service';
import {User, UserPayload} from '../models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_STORAGE_KEY = 'current_user';

export const setUserData = async (user: any, refresh: () => void) => {
  const {currentUser, jwt, refreshToken}: UserPayload = user;

  try {
    await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(currentUser));
    await AsyncStorage.setItem('jwt', jwt).then(() => refresh());
    await AsyncStorage.setItem('refresh_token', refreshToken);
    await AsyncStorage.removeItem('current_enterprise_configuration');
  } catch (error) {
    console.log(error); /* TODO: manejar error */
  }
};

export const postLoginWithUserPass = async (user: User) => {
  /* TODO: testear */
  const baseUrl = `${globalReactNativeService.nonVersionedApiUrl}/auth/common/sign_in`;
  const api = await axios.post(baseUrl, user);
  return api;
};
