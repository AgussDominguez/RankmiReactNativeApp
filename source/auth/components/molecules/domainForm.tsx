import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DomainInput from '../atoms/DomainInput';
import Label from '../../../ui/label/Label';
import Button from '../../../ui/button/Button';

interface IProps {
  onSubmit: (subdomain: string) => void;
  t: any;
}

const DomainForm: React.FC<IProps> = ({onSubmit, t}) => {
  const [domain, setDomain] = useState<string>('');
  const prefix = 'login.newLogin.subdomain';

  return (
    <View style={styles.form}>
      <Label labelText={t(`${prefix}.label`)} />
      <DomainInput
        domain={domain}
        setDomain={setDomain}
        onSubmit={onSubmit}
        placeholder={t(`${prefix}.placeholder`)}
        noEnptyMessage={t(`${prefix}.inputEmpty`)}
      />
      <Button
        buttonTitle={t(`${prefix}.sendButton`)}
        dataToSubmit={domain}
        disabled={!domain.length}
        onClick={onSubmit}
        size={16}
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
