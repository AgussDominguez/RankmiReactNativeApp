import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 29,
    marginTop: 30,
  },
  form: {
    marginVertical: 15,
  },
  loginCard: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 6,
  },
  label: {
    fontSize: 14,
    fontFamily: 'PT Sans,sans-serif',
    fontWeight: '700',
    color: 'rgba(32,32,32,.75)',
    marginBottom: 4,
  },
  submitButton: {
    marginTop: 4,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: '#2684ff',
    borderRadius: 5,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'PT Sans,sans-serif',
    fontWeight: '700',
  },
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
