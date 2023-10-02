import {View, Text} from 'react-native';
import styles from '../../Styles/ViewProductsStyle';
// import styles from '../../../../DemoProject/Styles/ViewProductsStyle';

const Item = ({items, pic}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{items}</Text>
  </View>
);
export default Item;
