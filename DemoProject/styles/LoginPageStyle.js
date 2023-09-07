import {StyleSheet} from 'react-native';
import COLORS from '../colors/Color';

const styles2 = StyleSheet.create({
  headerContainer: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeTextStyle: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black',
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  loginTitleStyle: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  loginTextStyle: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  loginTitleDescreption: {
    color: COLORS.grey,
    fontSize: 18,
    marginVertical: 10,
  },
  registrationTextStyle: {
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
export default styles2;
