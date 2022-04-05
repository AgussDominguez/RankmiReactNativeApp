import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './Input.template.style';

interface Props {
  value: string;
  onChange: any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  preffix?: string;
  suffix?: string;
  noEnpty?: boolean;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  keyboardType,
  preffix,
  suffix,
  noEnpty,
}) => {
  const [isFocused, setIsFocused] = useState(false); /* TODO: Añadir tipado */
  let isError = false;

  if (isFocused && noEnpty && !value.length) {
    isError = true;
  }

  const getClassNames = () => {
    if (isError) {
      return [styles.inputContainer, styles.errorInput];
    }
    if (!isError && value.length) {
      return [styles.inputContainer, styles.succesInput];
    }
    return styles.inputContainer;
  };

  return (
    <SafeAreaView>
      <View style={getClassNames()}>
        {preffix && <Text style={styles.preffix}>{preffix}</Text>}
        <TextInput
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={styles.input}
          underlineColorAndroid="transparent"
          onFocus={() => setIsFocused(!isFocused)}
        />
        {suffix && <Text style={styles.suffix}>{suffix}</Text>}
      </View>
      {isError && (
        <View style={styles.errorMessageContainer}>
          <FontAwesomeIcon icon={faTimesCircle} size={12} color={'#ec5b56'} />
          <Text style={styles.errorMessageText}>
            El campo no puede ir vacio.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Input;
