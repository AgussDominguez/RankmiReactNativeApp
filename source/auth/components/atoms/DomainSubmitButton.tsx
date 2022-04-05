import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

interface Props {
  buttonTitle: string;
  domain: string;
  onSubmit: (subdomain: string) => void;
}

const DomainSubmitButton: React.FC<Props> = ({
  buttonTitle,
  domain,
  onSubmit,
}) => {
  return (
    <Pressable
      style={styles.submitButton}
      onPress={() => onSubmit(domain)}
      disabled={!domain.length}>
      <Text style={styles.submitButtonText}>{buttonTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 4,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: '#2684ff',
    borderRadius: 5,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'PT Sans,sans-serif',
    fontWeight: '700',
  },
});
export default DomainSubmitButton;
