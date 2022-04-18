import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import styles from './Image.template.style';

interface Props {
  source: any;
  alt: string;
  resizeMode?: 'cover' | 'contain' | 'center' | 'repeat' | 'stretch';
}

const AccesibleImage: React.FC<Props> = ({source, alt, resizeMode}) => {
  const [error, setError] = useState<boolean>(false);
  const onImageLoadError = () => {
    setError(true);
  };
  if (error) {
    return <Text>{alt}</Text>;
  }

  return (
    <Image
      accessible
      accessibilityLabel={alt}
      source={source}
      style={styles.image}
      onError={onImageLoadError}
      resizeMode={resizeMode}
    />
  );
};

export default AccesibleImage;
