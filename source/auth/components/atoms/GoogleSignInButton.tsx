import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import Button from '../../../ui/button/Button';

interface Props {
  title: string;
}
const GoogleSignInButton: React.FC<Props> = ({title}) => {
  return (
    <Button
      onClick={() => console.log('google login')} /* TODO */
      buttonTitle={title}
      type="card"
      icon={<FontAwesomeIcon icon={faGoogle} size={14} />}
      marginVertical={6}
    />
  );
};

export default GoogleSignInButton;
