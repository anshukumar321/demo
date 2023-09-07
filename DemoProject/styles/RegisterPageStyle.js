import COLORS from '../colors/Color';
import {StyleSheet} from 'react-native';
const style3 = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  scrolViewStyle: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerStyle: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: 'bold',
  },
  headerDescriptionStyle: {
    color: COLORS.grey,
    fontSize: 18,
    marginVertical: 10,
  },
  loginButtonTextStyle: {
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  inputContainer: {
    marginVertical: 20,
  },
});
export default style3;
