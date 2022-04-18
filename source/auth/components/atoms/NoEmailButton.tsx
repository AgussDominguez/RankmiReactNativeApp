import React from 'react';
import Button from '../../../ui/button/Button';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faXmark} from '@fortawesome/free-solid-svg-icons';
interface Props {
  title: string;
}
const NoEmailButton: React.FC<Props> = ({title}) => {
  return (
    <Button
      onClick={() => console.log('noMail')} /* TODO */
      buttonTitle={title}
      type="card"
      icon={
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size={15}
            color="#aaa"
            style={styles.icon}
          />
          <FontAwesomeIcon icon={faXmark} size={15} color="#213f68" />
        </View>
      }
      marginVertical={6}
    />
  );
};

export default NoEmailButton;

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
  },
});
