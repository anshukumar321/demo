import {StyleSheet} from 'react-native';
import COLORS from '../Colors/Color';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'darkblue',
    flex: 1,
    justifyContent: 'space-between',
  },

  view: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    justifyContent: 'space-around',
    marginBottom: 30,
    flexDirection: 'row',
  },
  buttonStyle1: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9967a',
    borderRadius: 10 / 2,
    marginBottom: 30,
  },
  buttonStyle2: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText1: {
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText2: {
    fontWeight: 'bold',
    color: '#e9967a',
  },
  firstTimeStartingPageText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default styles;
