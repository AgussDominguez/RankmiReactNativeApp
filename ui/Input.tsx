import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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
  const [isFocused, setIsFocused] = useState(false);
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

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 4,
    justifyContent: 'space-between',
    borderColor: '#dcdcdc',
  },
  errorInput: {
    borderColor: '#ec5b56',
  },
  succesInput: {
    borderColor: '#36b37e',
  },
  input: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: '#202020',
    borderBottomColor: 'transparent',
  },
  preffix: {
    position: 'absolute',
    left: 15,
  },
  suffix: {
    position: 'absolute',
    right: 15,
  },
  errorMessageContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  errorMessageText: {
    fontSize: 12,
    color: '#ec5b56',
    marginLeft: 5,
  },
});

export default Input;
