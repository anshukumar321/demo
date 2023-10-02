import {Alert, PermissionsAndroid, Platform} from 'react-native';
PermissionsAndroid;
export const requireCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Please Allow to access Galary',
          message: 'App needs Permission to access photos',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      Alert.alert('Write permission error', err);
    }
    console.log(3);
    return false;
  } else {
    console.log(4);
    return true;
  }
};
