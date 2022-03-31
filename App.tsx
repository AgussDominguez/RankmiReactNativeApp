import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <WebView source={{uri: 'https://app.rankmi.com/'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});

export default App;
