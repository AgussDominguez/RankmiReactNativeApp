import React from 'react';
import {Image, StyleSheet} from 'react-native';

const DomainHeader: React.FC = () => {
  const rankmiLogo = {
    src: require('../../images/logo-rkm.png'),
  };

  return <Image source={rankmiLogo.src} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 29,
    marginTop: 30,
  },
});
export default DomainHeader;
