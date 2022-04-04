import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DomainInput from '../atoms/DomainInput';
import DomainInputLabel from '../atoms/DomainInputLabel';
import DomainSubmitButton from '../atoms/DomainSubmitButton';

const DomainForm: React.FC = () => {
  const [domain, setDomain] = useState('');

  return (
    <View style={styles.form}>
      {/* TODO: Deberia enviar la traducción */}
      <DomainInputLabel labelText="Ingresar el dominio de la empresa:" />
      <DomainInput domain={domain} setDomain={setDomain} />
      <DomainSubmitButton buttonTitle="Continuar" domain={domain} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginVertical: 15,
  },
});
export default DomainForm;
