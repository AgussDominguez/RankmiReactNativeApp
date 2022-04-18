import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import EnterpriseConfiguration from '../../models/enterprise-configuration';

interface Props {
  enterprise: EnterpriseConfiguration;
}
const LoginComplementaryInformation: React.FC<Props> = ({enterprise}) => {
  const [wvHeight, setWvHeight] = useState<number>(0);
  const onWebViewMessage = (event: WebViewMessageEvent) => {
    setWvHeight(Number(event.nativeEvent.data));
  };
  const complementaryInformation =
    enterprise.getComplementaryInformationTranslate();

  if (!complementaryInformation.length) {
    return <></>;
  }
  return (
    <View style={[styles.complementaryWebviewContainer, {height: wvHeight}]}>
      <WebView
        source={{
          html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><style>body {  
            padding: 10px;background-color: #f4f5f7;text-align: center;color: #213f68!important;font-family: Arial; border-radius: 20px;}</style></head><body>${enterprise.getComplementaryInformationTranslate()}</body></html>`,
        }}
        onMessage={onWebViewMessage}
        scalesPageToFit={false}
        scrollEnabled={true}
        injectedJavaScript="window.ReactNativeWebView.postMessage(Math.max(document.body.offsetHeight, document.body.scrollHeight))"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  complementaryWebviewContainer: {
    marginVertical: 15,
    width: '100%',
    backgroundColor: '#f4f5f7',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
export default LoginComplementaryInformation;
