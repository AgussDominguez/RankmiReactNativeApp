import axios from 'axios';
import {globalReactNativeService} from '../../api/commons/global-react-native.service';
import EnterpriseConfiguration from '../models/enterprise-configuration';

const API_NOT_FOUND_ERROR = new Error('API data not found');
const baseUrl = `${globalReactNativeService.linksApi}/v1/public/subdomains?subdomain=`;

const fetchEnterpriseConfiguration = async (subdomain: string) => {
  const response = await axios.get(`${baseUrl}${subdomain}`);
  try {
    if (!response) {
      throw API_NOT_FOUND_ERROR;
    }
    if (response.status === 200) {
      return new EnterpriseConfiguration(response.data);
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export {fetchEnterpriseConfiguration};
