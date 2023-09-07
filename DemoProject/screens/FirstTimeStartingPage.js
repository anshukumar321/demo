import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/FirstTimeStartingPageStyle';

function FirstTimeStartingPage({navigation}) {
  return (
    <ScrollView style={styles.FirstTimeStartingPageContainer}>
      <View style={styles.view}>
        <Text style={styles.FirstTimeStartingPageText}>Start your journey</Text>
        <Text style={styles.FirstTimeStartingPageText}>
          with{' '}
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 34}}>
            e
          </Text>
          <Text style={styles.FirstTimeStartingPageText}>Shop</Text>
        </Text>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity
          style={styles.ButtonStyle1}
          onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.buttonText1}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonStyle2}
          onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttonText2}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default FirstTimeStartingPage;
