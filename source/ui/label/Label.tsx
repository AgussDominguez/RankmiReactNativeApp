import React from 'react';
import {Text} from 'react-native';
import styles from './Label.template.style';

interface Props {
  labelText: string;
}

const Label: React.FC<Props> = ({labelText}) => {
  return <Text style={styles.label}>{labelText}</Text>;
};

export default Label;
