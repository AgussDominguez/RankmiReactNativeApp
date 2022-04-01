import React, {useState} from 'react';
import {Alert, Image, Linking, Pressable, Text, View} from 'react-native';
import styles from './Login.template.style';
import Input from './../../../ui/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

const LoginTemplate: React.FC = () => {
  const [domain, setDomain] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.loginCard}>
        <Image
          source={{
            uri: 'https://app.rankmi.com/d81b72aa848b1d4ebf0bb20cacd2e2c1.png',
          }}
          style={styles.logo}
        />
        <View style={styles.form}>
          <Text style={styles.label}>Ingresar el dominio de la empresa:</Text>
          <Input
            value={domain}
            onChange={setDomain}
            suffix=".rankmi.com"
            placeholder="miempresa"
            noEnpty
          />
          <Pressable
            style={styles.submitButton}
            onPress={() => Alert.alert(domain)}
            disabled={!domain.length}>
            <Text style={styles.submitButtonText}>Continuar</Text>
          </Pressable>
          <Text
            style={styles.helpDomainLink}
            onPress={() =>
              Linking.openURL(
                'https://intercom.help/rankmi/es/articles/4598714-que-es-el-dominio-de-empresa',
              )
            }>
            {'¿Qué es el dominio de empresa? '}
            <FontAwesomeIcon
              icon={faQuestionCircle}
              size={14}
              color={'#213f68'}
            />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginTemplate;
