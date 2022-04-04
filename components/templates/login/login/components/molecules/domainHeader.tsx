import React from 'react';
import {Image, StyleSheet} from 'react-native';

const DomainHeader: React.FC = () => {
  const LogoURL = 'https://app.rankmi.com/d81b72aa848b1d4ebf0bb20cacd2e2c1.png';
  return (
    <Image
      source={{
        uri: LogoURL,
      }}
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 29,
    marginTop: 30,
  },
});
export default DomainHeader;
