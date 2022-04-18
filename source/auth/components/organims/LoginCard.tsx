import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Alert} from 'react-native';
import EnterpriseConfiguration from '../../models/enterprise-configuration';
import Loader from '../../../ui/loader/Loader';
import LoginHeader from '../molecules/loginHeader';
import LoginOptions from '../molecules/loginOptions';
import LoginForgotPassword from '../molecules/loginForgotPassword';
import LoginComplementaryInformation from '../molecules/loginComplementaryInformation';
import {postLoginWithUserPassMaster} from '../../services/master-auth.service';
import {
  postLoginWithUserPass,
  setUserData,
} from '../../services/session.service';
import {AxiosError} from 'axios';
import {UserPayload, IUser, User} from '../../models/user';

interface IProps {
  enterprise: EnterpriseConfiguration;
  refreshHome: () => void;
  t: any;
}

const LoginCard: React.FC<IProps> = ({enterprise, refreshHome, t}) => {
  const [fetchError, setFetchError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const prefix = 'login.formLogin';

  if (!enterprise) {
    return <Loader />;
  }
  const handleLoginInformation = (token: any) => {
    const user = token.data;
    setUserData(
      new UserPayload(user, user.jwt, user.refresh_token),
      refreshHome,
    );
    /* TODO: Logica recovery password */
    /* TODO: Logica para navegar a solo ciertos modulos */
  };

  const handleSubmit = (userToSubmit: IUser) => {
    const user = new User(userToSubmit);
    setLoading(true);
    setFetchError('');
    const handleCatch = ({response}: AxiosError) => {
      const status = response?.status;
      const allowedStatusCodes = [401, 412, 403];
      if (status && !allowedStatusCodes.includes(status)) {
        Alert.alert(
          t('login.errors.internalServerError.title'),
          t('login.errors.internalServerError.message'),
        );
      }
      setLoading(false);
      setFetchError(response?.data?.i18n_error);
    };

    if (enterprise.enableMasterAuth) {
      postLoginWithUserPassMaster(user, enterprise.enterpriseToken)
        .then(({data}) => {
          handleLoginInformation(data);
        })
        .catch(handleCatch);
    } else {
      postLoginWithUserPass(user)
        .then(({data}) => {
          handleLoginInformation(data);
        })
        .catch(handleCatch);
    }
  };
  return (
    <ScrollView contentOffset={{x: 0, y: 0}}>
      <View style={styles.loginCard}>
        <LoginHeader enterprise={enterprise} />
        <LoginOptions
          enterprise={enterprise}
          onSubmit={handleSubmit}
          error={fetchError}
          t={t}
        />
        <LoginForgotPassword
          enterprise={enterprise}
          title={t(`${prefix}.forgotPass`)}
        />
        <LoginComplementaryInformation enterprise={enterprise} />
        {loading && <Loader overlay />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginCard: {
    flex: 1,
    padding: 25,
    borderRadius: 6,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
});

export default LoginCard;
