import React from 'react';
import Input from '../../../ui/input/Input';
import Label from '../../../ui/label/Label';
import {inputField, inputFieldNames} from '../../models/login-form';
import {View, StyleSheet} from 'react-native';
import {IUser} from '../../models/user';

interface Props {
  labelText: string;
  fieldName: string;
  onChange: (inputData: inputField) => void;
  value: string;
  placeholder: string;
  onSubmit: (userToSubmit: IUser) => void;
  noEnptyMessage: string;
}

const LoginInput: React.FC<Props> = ({
  labelText,
  fieldName,
  onChange,
  value,
  placeholder,
  onSubmit,
  noEnptyMessage,
}) => {
  return (
    <View style={styles.formItem}>
      <Label labelText={labelText} />
      <Input
        fieldName={fieldName}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        noEnpty
        password={fieldName === inputFieldNames.password}
        autoCapitalize="none"
        onSubmit={onSubmit}
        noEnptyMessage={noEnptyMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formItem: {
    marginVertical: 4,
  },
});

export default LoginInput;
