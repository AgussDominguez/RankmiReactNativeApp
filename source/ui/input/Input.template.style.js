import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 4,
    justifyContent: 'space-between',
    borderColor: '#dcdcdc',
  },
  errorInput: {
    borderColor: '#ec5b56',
  },
  succesInput: {
    borderColor: '#36b37e',
  },
  input: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: '#202020',
    borderBottomColor: 'transparent',
  },
  preffix: {
    position: 'absolute',
    left: 15,
  },
  suffix: {
    position: 'absolute',
    right: 15,
  },
  errorMessageContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  errorMessageText: {
    fontSize: 12,
    color: '#ec5b56',
    marginLeft: 5,
  },
});
