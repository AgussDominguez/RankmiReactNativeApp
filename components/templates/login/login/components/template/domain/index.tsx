import React from 'react';
import DomainCard from '../../organims/DomainCard';
import {View, StyleSheet} from 'react-native';

const DomainTemplate: React.FC = () => {
  return (
    <View style={styles.container}>
      <DomainCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DomainTemplate;
