import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  labelText: string;
}

const DomainInputLabel: React.FC<Props> = ({labelText}) => {
  return <Text style={styles.label}>{labelText}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'PT Sans,sans-serif',
    fontWeight: '700',
    color: 'rgba(32,32,32,.75)',
    marginBottom: 4,
  },
});
export default DomainInputLabel;
