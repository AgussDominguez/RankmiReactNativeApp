import React from 'react';
import {Text, StyleSheet, Pressable, Alert} from 'react-native';

interface Props {
  buttonTitle: string;
  domain: string;
}

const DomainSubmitButton: React.FC<Props> = ({buttonTitle, domain}) => {
  return (
    <Pressable
      style={styles.submitButton}
      onPress={() => Alert.alert(domain)}
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
