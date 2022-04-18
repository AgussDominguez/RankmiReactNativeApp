import React from 'react';
import {View, StyleSheet} from 'react-native';
import EnterpriseConfiguration from '../../models/enterprise-configuration';
import ForgotPasswordButton from '../atoms/ForgotPasswordButton';

interface Props {
  enterprise: EnterpriseConfiguration;
  title: string;
}
const LoginForgotPassword: React.FC<Props> = ({enterprise, title}) => {
  return (
    <View style={styles.forgotPassContainer}>
      {enterprise.resetPassword && <ForgotPasswordButton title={title} />}
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassContainer: {
    marginVertical: 15,
    borderBottomColor: '#9ecffa',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
});
export default LoginForgotPassword;
