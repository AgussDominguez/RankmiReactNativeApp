import React from 'react';
import {View, StyleSheet} from 'react-native';
import DomainHeader from '../molecules/domainHeader';
import DomainForm from '../molecules/domainForm';
import DomainHelpInfo from '../molecules/domainHelpInfo';

interface IProps {
  onSubdomainSelected: (subdomain: string) => void;
  t: any;
}

const DomainCard: React.FC<IProps> = ({onSubdomainSelected, t}) => {
  const handleClick = (domain: string) => {
    if (domain) {
      onSubdomainSelected(domain.toLowerCase());
    }
  };

  return (
    <View style={styles.domainCard}>
      <DomainHeader />
      <DomainForm onSubmit={handleClick} t={t} />
      <DomainHelpInfo t={t} />
    </View>
  );
};

const styles = StyleSheet.create({
  domainCard: {
    width: '100%',
    padding: 20,
    borderRadius: 6,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
});

export default DomainCard;
