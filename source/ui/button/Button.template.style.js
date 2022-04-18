import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardButton: {
    backgroundColor: '#fff',
    borderColor: 'hsla(0,0%,86.3%,.5)',
    borderWidth: 0.5,
    shadowColor: 'rgb(170 169 169 / 25%)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,

    elevation: 4,
  },
  textButton: {
    backgroundColor: 'text',
  },
  textButtonText: {
    color: '#213f68',
  },
  cardButtonText: {
    color: '#213f68',
  },
  buttonText: {
    fontFamily: 'PT Sans,sans-serif',
    fontWeight: '700',
  },
});
