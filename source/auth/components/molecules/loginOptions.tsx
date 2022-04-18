import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import EnterpriseConfiguration from '../../models/enterprise-configuration';
import {IUser} from '../../models/user';
import LoginForm from './loginForm';
import GoogleSignInButton from '../atoms/GoogleSignInButton';
import AzureSignInButton from '../atoms/AzureSignInButton';
import KeycloakSignInButton from '../atoms/KeycloakSignInButton';
import NoEmailButton from '../atoms/NoEmailButton';

interface Props {
  enterprise: EnterpriseConfiguration;
  onSubmit: (userToSubmit: IUser) => void;
  error: string;
  t: any;
}
const LoginOptions: React.FC<Props> = ({enterprise, onSubmit, error, t}) => {
  const prefix = 'login.formLogin';

  return (
    <View style={styles.optionsContainer}>
      {/*TODO: Comentado para pruebas con stark {enterprise.allowFormUserPassSignin && <LoginForm onSubmit={onSubmit} />} */}
      {enterprise.allowFormUserPassSignin ||
      enterprise.customDomain === 'stark' ? (
        <LoginForm onSubmit={onSubmit} t={t} />
      ) : (
        <></>
      )}
      {enterprise.allowGoogleSignin && (
        <GoogleSignInButton title={t(`${prefix}.btnGoogle`)} />
      )}
      {enterprise.allowAzureActiveDirectorySignin && (
        <AzureSignInButton title={t(`${prefix}.btnAzureAd`)} />
      )}
      {enterprise.allowKeycloakSignin && (
        <KeycloakSignInButton title={t(`${prefix}.btnKeycloak`)} />
      )}
      {enterprise.loginForm && !enterprise.allowFormUserPassSignin && (
        <NoEmailButton title={t(`${prefix}.without_email`)} />
      )}
      {error === `${prefix}.invalidPassword` &&
        Alert.alert('Error!', t(`${prefix}.invalidPassword`))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginVertical: 15,
    justifyContent: 'space-between',
  },
});
export default LoginOptions;
