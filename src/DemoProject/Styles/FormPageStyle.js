import COLORS from '../Colors/Color';

// const {StyleSheet} = require('react-native');
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  safeAreaStyle: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  inputWrapper: {
    paddingHorizontal: 15,
    marginTop: 15,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  headerStyle: {
    marginTop: 20,
    marginLeft: 20,
    color: COLORS.black,
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerDescriptionStyle: {
    marginLeft: 20,
    color: COLORS.grey,
    fontSize: 18,
    marginVertical: 10,
  },
  inputStyle: {
    marginBottom: 20,
    marginTop: 7,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: 'blue',
    backgroundColor: '#F3F4FB',
  },
  imageSelector: {
    paddingVertical: 15,
    width: 100,
    borderRadius: 10 / 2,
    borderColor: 'black',
    marginBottom: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  imageStyle: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderWidth: 1,
  },
  imageButtonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  imageContainerStyle: {
    marginLeft: 40,
  },
  submitButtonStyle: {
    marginLeft: 7,
    height: 40,
    width: '100%',
    // backgroundColor: 'darkturquoise',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
