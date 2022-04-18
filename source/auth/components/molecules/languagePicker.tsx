import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';
import i18n from '../../../../i18n/i18n.config';

interface IOptions {
  items: string[];
  onChange: (item: string) => void;
}

const LanguagePicker: React.FC<IOptions> = ({items, onChange}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={i18n.language}
        onValueChange={onChange}
        style={styles.picker}
        mode="dropdown"
        dropdownIconColor="black">
        {items.map(language => (
          <Picker.Item
            label={t(`langs.${language}`)}
            key={language}
            value={language}
            style={
              language === i18n.language
                ? styles.selectedItemPicker
                : styles.itemPicker
            }
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '75%',
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderColor: '#d9d9d9',
    borderWidth: 2,
  },
  picker: {
    width: '100%',
    color: '#202020',
  },
  itemPicker: {
    color: '#202020',
    fontSize: 12,
    width: 200,
  },
  selectedItemPicker: {
    color: '#2684ff',
    fontSize: 12,
  },
});

export default LanguagePicker;
