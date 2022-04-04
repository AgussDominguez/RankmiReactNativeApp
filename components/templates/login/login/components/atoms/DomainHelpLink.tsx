import React from 'react';
import {Linking, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

interface Props {
  linkURL: string;
  linkTitle: string;
}

const DomainHelpLink: React.FC<Props> = ({linkURL, linkTitle}) => {
  return (
    <Text
      style={styles.helpDomainLink}
      onPress={() => Linking.openURL(linkURL)}>
      {linkTitle}
      <FontAwesomeIcon icon={faQuestionCircle} size={14} color={'#213f68'} />
    </Text>
  );
};

const styles = StyleSheet.create({
  helpDomainLink: {
    alignSelf: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#9ecffa',
    color: '#213f68',
    fontFamily: 'PT Sans,sans-serif',
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default DomainHelpLink;
