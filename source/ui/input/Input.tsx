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
  fieldName?: string;
  value: string;
  onChange: any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  preffix?: string;
  suffix?: string;
  noEnpty?: boolean;
  password?: boolean;
  onSubmit?: (argument?: any) => void;
  dataToSubmit?: any;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  noEnptyMessage?: string;
}

const Input: React.FC<Props> = ({
  fieldName,
  value,
  onChange,
  placeholder,
  keyboardType,
  preffix,
  suffix,
  noEnpty,
  password,
  onSubmit,
  dataToSubmit,
  autoCapitalize,
  noEnptyMessage,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
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
  const handleChangeInput = (e: string) => {
    if (fieldName) {
      return onChange({fieldName, value: e});
    }
    return onChange(e);
  };

  const handleSubmit = () => {
    if (onSubmit && !isError) {
      if (dataToSubmit && onSubmit) {
        onSubmit(dataToSubmit);
      }
      onSubmit();
    }
  };

  return (
    <SafeAreaView>
      <View style={getClassNames()}>
        {preffix && <Text style={styles.preffix}>{preffix}</Text>}
        <TextInput
          onChangeText={handleChangeInput}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={styles.input}
          underlineColorAndroid="transparent"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={password}
          blurOnSubmit={false}
          onSubmitEditing={handleSubmit}
          autoCapitalize={autoCapitalize}
        />
        {suffix && <Text style={styles.suffix}>{suffix}</Text>}
      </View>
      {isError && isFocused && (
        <View style={styles.errorMessageContainer}>
          <FontAwesomeIcon icon={faTimesCircle} size={12} color={'#ec5b56'} />

          <Text style={styles.errorMessageText}>{noEnptyMessage}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Input;
