import React from 'react';
import {View, StyleSheet} from 'react-native';
import EnterpriseConfiguration from '../../../models/enterprise-configuration';
import LanguageSelection from '../../../models/language-selection';
import LanguagePicker from '../../molecules/languagePicker';
import LoginCard from '../../organims/LoginCard';
import {supportedLanguages} from '../../../../../i18n/supported-languages';
import {useTranslation} from 'react-i18next';

interface IProps {
  enterprise: EnterpriseConfiguration;
  refreshHome: () => void;
}

const LoginTemplate: React.FC<IProps> = ({enterprise, refreshHome}) => {
  const supportedCodes = supportedLanguages.map(({code}) => code);
  const languages = new LanguageSelection();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <LanguagePicker
          items={supportedCodes}
          onChange={value => {
            languages.changeSelectedLanguage(value);
          }}
        />
      </View>
      <View style={styles.cardContainer}>
        <LoginCard enterprise={enterprise} refreshHome={refreshHome} t={t} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  pickerContainer: {
    width: '100%',
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 75,
    paddingBottom: 40,
  },
});

export default LoginTemplate;
