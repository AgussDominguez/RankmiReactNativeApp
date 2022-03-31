import React from 'react';
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
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  keyboardType,
  preffix,
  suffix,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        {preffix && <Text style={styles.preffix}>{preffix}</Text>}
        <TextInput
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
        {suffix && <Text style={styles.suffix}>{suffix}</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 4,
    justifyContent: 'space-between',
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
});

export default Input;
