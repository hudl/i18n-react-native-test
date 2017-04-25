import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import I18n from 'react-native-i18n'

const deviceLocale = I18n.locale
var currentLocale = I18n.currentLocale();
I18n.locale = "es";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>14  {I18n.t('greeting')}</Text>
        <Text>{currentLocale}</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

I18n.translations = {
  'en-US': {
    greeting: 'This is en-US, Hello!!'
  },
  'en': {
    greeting: 'This is en, Hiya!!!'
  },
  en: {
    greeting: 'This is en2, Hiya!!!'
  },
  es: {
    greeting: 'This is es, Hola!!!!'
  },
  fr: {
    greeting: 'This is fr, Bonjour!!'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
