import React from 'react';
import Button from '../../../ui/button/Button';
import {Image, StyleSheet} from 'react-native';
interface Props {
  title: string;
}
const AzureSignInButton: React.FC<Props> = ({title}) => {
  const azureLogo = {
    src: require('../../images/logo-azure.png'),
  };
  return (
    <Button
      onClick={() => console.log('azure login')}
      buttonTitle={title}
      type="card"
      icon={<Image source={azureLogo.src} style={styles.image} />}
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

export default AzureSignInButton;
