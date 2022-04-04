import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const LoginTemplate: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Login Template</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginTemplate;
