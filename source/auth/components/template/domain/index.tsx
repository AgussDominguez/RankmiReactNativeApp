import React from 'react';
import DomainCard from '../../organims/DomainCard';
import {View, StyleSheet} from 'react-native';
import LanguagePicker from '../../molecules/languagePicker';
import LanguageSelection from '../../../models/language-selection';
import {supportedLanguages} from '../../../../../i18n/supported-languages';
import {useTranslation} from 'react-i18next';

interface IProps {
  onSubdomainSelected: (subdomain: string) => void;
}

const DomainTemplate: React.FC<IProps> = ({onSubdomainSelected}) => {
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
        <DomainCard onSubdomainSelected={onSubdomainSelected} t={t} />
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
    position: 'absolute',
    top: '25%',
  },
});

export default DomainTemplate;
