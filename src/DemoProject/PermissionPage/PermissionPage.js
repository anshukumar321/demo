import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {requireCameraPermission} from './RequestPermission';

export const permissionCheck = async () => {
  if (Platform.OS === 'android') {
    try {
      const permissionAndroid = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (permissionAndroid !== PermissionsAndroid.RESULTS.GRANTED) {
        const permission = requireCameraPermission();
        return permission;
      }
    } catch (err) {
      Alert.alert('Write permission error', err);
    }
  }
};
