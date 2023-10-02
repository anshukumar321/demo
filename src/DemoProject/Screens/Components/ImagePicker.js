import {Alert} from 'react-native';
// import {permissionCheck} from '../../../../DemoProject/PermissionPage/PermissionPage';
import {launchImageLibrary} from 'react-native-image-picker';
import { permissionCheck } from '../../PermissionPage/PermissionPage';

const options = {
  mediaType: 'photo',
  maxWidth: 500,
  maxHeight: 500,
  includeBase64: true,
};
const imagePicker = async (setFieldValue, setImage, setIsDisable) => {
  let isStoragePermitted = await permissionCheck();
  if (isStoragePermitted) {
    await launchImageLibrary(options, responce => {
      try {
        setIsDisable(false);
        setImage(responce.assets[0].base64);
        setFieldValue('pic', responce);
      } catch (error) {
        if (responce.didCancel) {
          Alert.alert(error);
        } else if (responce.errorCode === 'camera_unavailable') {
          Alert.alert('Camera not available on this device');
        } else if (responce.errorCode === 'permission') {
          Alert.alert('Permission not given');
        } else if (responce.errorCode === 'others') {
          Alert.alert('error');
        }
      }
    });
  }
};
export default imagePicker;
