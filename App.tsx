import React, {useState} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import LoginPage from './source/auth/pages/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './source/ui/loader/Loader';
import {globalReactNativeService} from './source/api/commons/global-react-native.service';
import i18n from './i18n/i18n.config';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initI18n = i18n;

const App: React.FC = () => {
  const [data, setData] = useState<{token: string | null; user: any}>({
    token: null,
    user: null,
  }); /* TODO: modelo */
  const canShowWebView = data.user && data.token;

  const getToken = async () => {
    try {
      const tokenStoraged = await AsyncStorage.getItem('jwt');
      const userStoraged = await AsyncStorage.getItem('current_user');

      if (tokenStoraged && userStoraged) {
        return {token: tokenStoraged, user: userStoraged};
      }
      return false;
    } catch (error) {
      console.log(error); /* TODO: error handler */
    }
  };

  const handleRefresh = () => {
    setData({...data, token: ''});
  };
  const currentTime = new Date();
  currentTime.setMonth(currentTime.getMonth() + 1);

  let injected = '';

  if (canShowWebView) {
    injected = `localStorage.setItem('current_user', ${JSON.stringify(
      data.user,
    )});
    document.cookie="rankmi_key=${
      data.token
    };domain=.rankmi.com;path=/;expires=${currentTime};";
  true;`;
  } else {
    getToken().then(dataStoraged => {
      if (dataStoraged) {
        setData({token: dataStoraged.token, user: dataStoraged.user});
      }
    });
  }

  return (
    <View style={styles.container}>
      {canShowWebView ? (
        <>
          <WebView
            source={{
              uri: globalReactNativeService.rankmiHomeApp,
            }}
            sharedCookiesEnabled={true}
            injectedJavaScriptBeforeContentLoaded={injected}
            startInLoadingState={true}
            renderLoading={() => <Loader overlay />}
          />
        </>
      ) : (
        <>
          <StatusBar backgroundColor="#F3F6FE" barStyle={'dark-content'} />
          <LoginPage refreshHome={handleRefresh} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#F3F6FE',
  },
});

export default App;
