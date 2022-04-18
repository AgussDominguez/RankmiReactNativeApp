import React from 'react';
import Button from '../../../ui/button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';
interface Props {
  title: string;
}
const ForgotPasswordButton: React.FC<Props> = ({title}) => {
  return (
    <Button
      buttonTitle={title}
      onClick={() => console.log('forgotPass')} /* TODO */
      type="text"
      iconPosition="right"
      icon={<FontAwesomeIcon icon={faKey} size={14} />}
    />
  );
};

export default ForgotPasswordButton;
