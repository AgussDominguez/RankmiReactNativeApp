import React from 'react';
import {Image, StyleSheet} from 'react-native';

const DomainHeader: React.FC = () => {
  const item = {
    image: require('../../images/logo-rkm.png'),
  };

  return <Image source={item.image} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 29,
    marginTop: 30,
  },
});
export default DomainHeader;
