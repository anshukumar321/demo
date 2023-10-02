import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
// import styles from '../../../DemoProject/Styles/FirstTimeStartingPageStyle';
import {SafeAreaView} from 'react-native';
import styles from '../Styles/FirstTimeStartingPageStyle';

function FirstTimeStartingPage({navigation}) {
  return (
    // <ScrollView style={styles.firstTimeStartingPageContainer}>
    <View style={styles.viewStyle}>
      <View style={styles.view}>
        <Text style={styles.firstTimeStartingPageText}>Start your journey</Text>
        <Text style={styles.firstTimeStartingPageText}>
          with{' '}
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 28}}>
            e
          </Text>
          <Text style={styles.firstTimeStartingPageText}>Shop</Text>
        </Text>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity
          style={styles.buttonStyle1}
          onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.buttonText1}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle2}
          onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttonText2}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
}
export default FirstTimeStartingPage;
