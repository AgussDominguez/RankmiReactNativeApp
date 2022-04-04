import React from 'react';
import {View, StyleSheet} from 'react-native';
import DomainHeader from '../molecules/domainHeader';
import DomainForm from '../molecules/domainForm';
import DomainHelpInfo from '../molecules/domainHelpInfo';

const DomainCard: React.FC = () => {
  return (
    <View style={styles.domainCard}>
      <DomainHeader />
      <DomainForm />
      <DomainHelpInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  domainCard: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 6,
  },
});

export default DomainCard;
