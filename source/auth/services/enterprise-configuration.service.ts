const ENTEPRISE_CONFIGURATION_KEY = 'current_enterprise_configuration';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setEnterpriseData = async (config: any) => {
  try {
    await AsyncStorage.setItem(
      ENTEPRISE_CONFIGURATION_KEY,
      JSON.stringify(config),
    );
  } catch (error) {
    console.log(error);
  }
};
export const clearEnterpriseInformation = async () => {
  try {
    await AsyncStorage.removeItem('current_enterprise');
  } catch (error) {
    console.log(error);
  }
};

export const clearUserInformation = async () => {
  try {
    await AsyncStorage.removeItem('current_user');
  } catch (error) {
    console.log(error);
  }
};
