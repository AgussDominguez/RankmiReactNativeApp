import axios from 'axios';
import {globalReactNativeService} from '../../api/commons/global-react-native.service';
import {User} from '../models/user';

function baseUrl(): string {
  return `${globalReactNativeService.masterApi}/auth/sign_in`;
}

const loginRequest = async (payload: any, enterpriseToken: string) => {
  const response = await axios.post(
    `${baseUrl()}/?enterprise_token=${enterpriseToken}`,
    {username: payload.username, password: payload.password},
  );

  return response;
};

export const postLoginWithUserPassMaster = async (
  user: User,
  enterpriseToken: string,
) => {
  const api = await loginRequest(user, enterpriseToken);
  return api;
};
