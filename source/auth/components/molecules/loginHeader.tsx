import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AccesibleImage from '../../../ui/AccesibleImage/Image';
import EnterpriseConfiguration from '../../models/enterprise-configuration';

interface Props {
  enterprise: EnterpriseConfiguration;
}

const LoginHeader: React.FC<Props> = ({enterprise}) => {
  const title = enterprise.getTitleTranslate();
  return (
    <View>
      {enterprise.loginLogo && (
        <View style={styles.imageContainer}>
          <AccesibleImage
            alt={`${title} logo`}
            source={{uri: enterprise.loginLogo}}
            resizeMode="contain"
          />
        </View>
      )}

      {title?.length ? <Text style={styles.title}>{title}</Text> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    maxWidth: 140,
    height: 70,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#213f68',
    marginVertical: 10,
  },
});
export default LoginHeader;
