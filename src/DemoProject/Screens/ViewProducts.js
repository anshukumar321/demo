import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, Text, Image} from 'react-native';
import {axiosGet} from '../HandlingApi/ApiHandler';
import styles from '../Styles/ViewProductsStyle';
import Item from './Components/ShowProduct';

const ViewProducts = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    axiosGet('milkman_products')
      .then(result => {
        setProductData(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productData}
        renderItem={({item}) => (
          <Item items={item.product_name} pic={item.pic} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ViewProducts;
