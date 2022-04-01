import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import LoginTemplate from './components/templates/login';

const App: React.FC = () => {
  const token: string = ''; //TODO: get token

  return (
    <View style={styles.container}>
      {!token ? (
        <>
          <StatusBar backgroundColor="#F3F6FE" barStyle={'dark-content'} />
          <LoginTemplate />
        </>
      ) : (
        <WebView source={{uri: 'https://app.rankmi.com/'}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#F3F6FE',
  },
});

export default App;
