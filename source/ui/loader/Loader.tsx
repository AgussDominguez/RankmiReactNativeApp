import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './Loader.template.style';

interface Props {
  color?: string;
  overlay?: boolean;
  size?: number;
}

const Loader: React.FC<Props> = ({
  color = '#2684ff',
  overlay = false,
  size = 36,
}) => {
  return (
    <View style={[styles.loaderContainer, overlay && styles.overlay]}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default Loader;
