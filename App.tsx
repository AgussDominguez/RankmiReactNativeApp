import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import LoginTemplate from './components/templates/login';

const App: React.FC = () => {
  const token: string = ''; //TODO: get token

  return (
    <SafeAreaView style={styles.container}>
      {!token ? (
        <LoginTemplate />
      ) : (
        <WebView source={{uri: 'https://app.rankmi.com/'}} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
});

export default App;
