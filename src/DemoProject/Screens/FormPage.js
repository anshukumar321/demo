import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Alert,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Input from './Components/Input';
import Loader from './Components/Loader';
import {styles} from '../Styles/FormPageStyle';
import imagePicker from './Components/ImagePicker';
import {useAppDispatch} from '../../ReduxFiles/Store';
import {submitData} from './Actions/formAction';

const FormSchema = Yup.object().shape({
  product_name: Yup.string()
    .min(4, 'Should be min of 4 letters')
    .max(20, 'Should be max of 16 letters')
    .required('Length is required'),
  price: Yup.number()
    .positive('ptice should be positive')
    .required('Length is required'),
  gst_percentage: Yup.number()
    .positive('percentage should be positive')
    .required('Length is required'),
  measure_unit: Yup.string().required('Length is required'),
  pic: Yup.object().required('please select an image'),
  details: Yup.string()
    .min(4, 'Should be min of 4 letters')
    .required('Length is required'),
});
export const FormPage = ({navigation}) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = React.useState(false);
  const [isDisabled, setIsDisable] = useState(true);
  const dispatch = useAppDispatch();
  const handleSubmitData = values => {
    dispatch(submitData({...values}))
      .then(responce => {
        if (responce.success) {
          setTimeout(() => {
            Alert.alert(responce.message);
          }, 2000);
          navigation.navigate('Home');
        } else {
          console.log(responce.error);
        }
      })  
      .catch(err => {
        Alert.alert(err);
      });
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.safeAreaStyle}>
      <Loader visible={loading} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerStyle}>Product Detail</Text>
        <Text style={styles.headerDescriptionStyle}>
          Fill Your Product Details
        </Text>
        <View style={styles.container}>
          <Formik
            initialValues={{
              product_name: '',
              price: '',
              gst_percentage: '',
              measure_unit: '',
              pic: '',
              details: '',
              is_public: true,
            }}
            validationSchema={FormSchema}
            onSubmit={values => handleSubmitData(values)}>
            {({
              handleChange,
              errors,
              touched,
              isValid,
              handleBlur,
              handleSubmit,
              values,
              setFieldValue,
            }) => (
              <View style={styles.inputWrapper}>
                <Input
                  onChangeText={handleChange('product_name')}
                  onBlur={handleBlur('product_name')}
                  value={values.product_name}
                  label="Product Name"
                  placeholder="Enter Product name"
                />
                {touched.product_name && errors.product_name && (
                  <Text style={styles.errorText}>{errors.product_name}</Text>
                )}
                <Input
                  keyboardType="numeric"
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  value={values.price}
                  label=" price"
                  placeholder="Enter Product  price"
                />
                {touched.price && errors.price && (
                  <Text style={styles.errorText}>{errors.price}</Text>
                )}
                <Input
                  keyboardType="numeric"
                  onChangeText={handleChange('gst_percentage')}
                  onBlur={handleBlur('gst_percentage')}
                  value={values.gst_percentage}
                  label="gst percentage"
                  placeholder="Enter gst percentage"
                />
                {touched.gst_percentage && errors.gst_percentage && (
                  <Text style={styles.errorText}>{errors.gst_percentage}</Text>
                )}
                <Input
                  // keyboardType="numeric"
                  onChangeText={handleChange('measure_unit')}
                  onBlur={handleBlur('measure_unit')}
                  value={values.measure_unit}
                  label="measure unit"
                  placeholder="Enter measure unit"
                />
                {touched.measure_unit && errors.measure_unit && (
                  <Text style={styles.errorText}>{errors.measure_unit}</Text>
                )}
                <Input
                  onChangeText={handleChange('details')}
                  onBlur={handleBlur('details')}
                  value={values.details}
                  label="Product details"
                  placeholder="Enter details"
                />
                {touched.details && errors.details && (
                  <Text style={styles.errorText}>{errors.details}</Text>
                )}
                <View style={styles.imageButtonContainer}>
                  <TouchableOpacity
                    value={values.pic}
                    style={styles.imageSelector}
                    onPress={() => {
                      imagePicker(setFieldValue, setImage, setIsDisable);
                    }}>
                    <Text>Add Image</Text>
                  </TouchableOpacity>
                  {/* {touched.pic && errors.pic && (
                    <Text style={styles.errorText}>{errors.pic}</Text>
                  )} */}

                  <View style={styles.imageContainerStyle}>
                    {isDisabled ? (
                      <Text>please select Image</Text>
                    ) : (
                      <Image
                        source={{
                          uri: `data:image/png;base64,${image}`,
                        }}
                        style={styles.imageStyle}
                      />
                    )}
                  </View>
                </View>

                <TouchableOpacity
                  style={[
                    styles.submitButtonStyle,
                    {
                      backgroundColor: isDisabled
                        ? 'lavender'
                        : 'darkturquoise',
                    },
                  ]}
                  onPress={handleSubmit}
                  title="Submit"
                  disabled={isDisabled}>
                  <Text>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
