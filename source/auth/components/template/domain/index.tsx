import React from 'react';
import DomainCard from '../../organims/DomainCard';
import {View, StyleSheet} from 'react-native';

interface IProps {
  onSubdomainSelected: (subdomain: string) => void;
}

const DomainTemplate: React.FC<IProps> = ({onSubdomainSelected}) => {
  return (
    <View style={styles.container}>
      <DomainCard onSubdomainSelected={onSubdomainSelected} />
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
