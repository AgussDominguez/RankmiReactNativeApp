import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {inputField, inputFieldNames} from '../../models/login-form';
import LoginInput from '../atoms/LoginInput';
import Button from '../../../ui/button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {IUser} from '../../models/user';

interface Props {
  onSubmit: (userToSubmit: IUser) => void;
  t: any;
}

const LoginForm: React.FC<Props> = ({onSubmit: handleSubmit, t}) => {
  const [formData, setFormData] = useState({username: '', password: ''});
  const prefix = 'login.formLogin';

  const handleChange = (inputData: inputField) => {
    const {fieldName, value} = inputData;

    setFormData({...formData, [fieldName]: value});
  };

  const onSubmit = () => {
    if (formData.username && formData.password) {
      handleSubmit(formData);
    }
  };

  return (
    <View style={styles.form}>
      <LoginInput
        labelText={t(`${prefix}.username`)}
        fieldName={inputFieldNames.username}
        onChange={handleChange}
        value={formData.username}
        placeholder={t(`${prefix}.enter_username`)}
        onSubmit={onSubmit}
        noEnptyMessage={t(`${prefix}.invalidPassword`)}
      />
      <LoginInput
        labelText={t(`${prefix}.password`)}
        fieldName={inputFieldNames.password}
        onChange={handleChange}
        value={formData.password}
        placeholder="******"
        onSubmit={onSubmit}
        noEnptyMessage={t(`${prefix}.passwordNotEmpty`)}
      />
      <Button
        buttonTitle={t(`${prefix}.btnSend`)}
        onClick={onSubmit}
        disabled={!formData.username.length || !formData.password.length}
        paddingVertical={8}
        icon={<FontAwesomeIcon icon={faArrowRight} size={14} color={'#fff'} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginVertical: 5,
    gap: 20,
  },
});
export default LoginForm;
