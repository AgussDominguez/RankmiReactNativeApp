import React from 'react';
import Button from '../../../ui/button/Button';
import {Image, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

const KeycloakSignInButton: React.FC<Props> = ({title}) => {
  const keycloakLogo = {
    src: require('../../images/logo-keycloak.png'),
  };
  return (
    <Button
      onClick={() => console.log('keycloak login')} /* TODO */
      buttonTitle={title}
      type="card"
      icon={<Image source={keycloakLogo.src} style={styles.image} />}
      marginVertical={6}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 14,
    height: 14,
  },
});

export default KeycloakSignInButton;
