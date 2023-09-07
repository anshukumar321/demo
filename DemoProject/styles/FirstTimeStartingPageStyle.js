import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  FirstTimeStartingPageContainer: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  view: {
    marginTop: 200,
    alignItems: 'center',
  },
  view2: {
    justifyContent: 'space-around',
    marginTop: 280,
    flexDirection: 'row',
  },
  ButtonStyle1: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9967a',
    borderRadius: 10 / 2,
    marginBottom: 30,
  },
  ButtonStyle2: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10 / 2,
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
  FirstTimeStartingPageText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default styles;
