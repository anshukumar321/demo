import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { logout, resetStore } from '../../ReduxFiles/actions/auth';
import { useAppDispatch } from '../../ReduxFiles/Store';
import { axiosGet } from '../HandlingApi/ApiHandler';

const HomePage = ({navigation}) => {
  const dispatch = useAppDispatch();
  const products = () => {
    axiosGet('milkman_products')
      .then(result => {
        console.log(result.data);
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  };

  function handleLogOut() {
    dispatch(logout());
    dispatch(resetStore());
    navigation.navigate('Sign In');
  }

  return (
    <>
      <View>
        <Button
          title="Add Product"
          onPress={() => navigation.navigate('FormPage')}
        />
        <Button title="Show Product List" onPress={() => products()} />

        <Button title="Log Out" onPress={() => handleLogOut()} />
        <Button
          title="View Product"
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
