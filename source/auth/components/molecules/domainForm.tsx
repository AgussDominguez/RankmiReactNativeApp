import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DomainInput from '../atoms/DomainInput';
import DomainInputLabel from '../atoms/DomainInputLabel';
import DomainSubmitButton from '../atoms/DomainSubmitButton';

interface IProps {
  onSubmit: (subdomain: string) => void;
}

const DomainForm: React.FC<IProps> = ({onSubmit}) => {
  const [domain, setDomain] = useState(''); /* TODO: añadir tipado */

  return (
    <View style={styles.form}>
      {/* TODO: Deberia enviar la traducción */}
      <DomainInputLabel labelText="Ingresar el dominio de la empresa:" />
      <DomainInput domain={domain} setDomain={setDomain} />
      <DomainSubmitButton
        buttonTitle="Continuar"
        domain={domain}
        onSubmit={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginVertical: 15,
  },
});
export default DomainForm;
