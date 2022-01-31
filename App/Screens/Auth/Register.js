import React from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';
import {useState} from 'react';
import {signUp} from '../../Services/Apis';
import {CallingCodePicker} from '@digieggs/rn-country-code-picker';
import {TextInput} from 'react-native';
import Congratulations from '../../components/Congratulations';

const Register = () => {
  const navigation = useNavigation();
  const navigate = navigation.navigate;
  const [textEntry, setTextEntry] = useState(true);
  const [selectedCallingCode, setSelectedCallingCode] = useState('+1');
  const [congrats, setCongrats] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    device: Platform.OS == 'android' ? 'android' : 'ios',
  });

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const _signUp = () => {
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (formData.firstName == '') {
      return setFirstNameError('First Name is Required');
    } else if (formData.lastName == '') {
      return setLastNameError('Last Name is Required');
    } else if (formData.Email == '') {
      return setEmailError('Email is Required');
    } else if (!formData.Email.match(emailRegex)) {
      return setEmailError('Enter valid Email');
    } else if (formData.phone == '') {
      return setPhoneError('Phone Number is Required');
    } else if (formData.password == '') {
      return setPasswordError('Password is Required');
    } else if (formData.confirmPassword == '') {
      return setConfirmPasswordError('Confirm Password is Required');
    } else if (formData.confirmPassword !== formData.password) {
      return setConfirmPasswordError('Confirm Password Not Matched');
    } else {
      const data = {
        ...formData,
        phone:
          '+' +
          selectedCallingCode.toString().concat(formData.phone.toString()),
      };
      signUp(data)
        .then(res => {
          console.log('RES: ', res);
          Alert.alert('Success!', 'Account Created Successfully', [
            {text: 'Ok', onPress: () => navigation.navigate('Login')},
          ]);
        })
        .catch(e => {
          if(e?.response?.data){
            setEmailError("Email Already Exists")
          }
        });
    }

    // signUp()
    //   .then(({data}) => {
    //     console.log('DATA: ', data);
    //     // setCongrats(true);
    //   })
    //   .catch(error => {
    //     console.log('ERROR', error);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>PEPPER PRO</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: '3%'}}>
          <Text style={styles.text}>Creat New Account</Text>

          <CustomInput
            inputHeight={45}
            marginVertical={'2%'}
            LeftIcons={Icons.Profile}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={val => setFormData({...formData, firstName: val})}
          />
          {firstNameError ? (
            <Text style={styles.errorMsg}>{firstNameError}</Text>
          ) : null}
          <CustomInput
            inputHeight={45}
            marginVertical={'2%'}
            LeftIcons={Icons.Profile}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={val => setFormData({...formData, lastName: val})}
          />
          {lastNameError ? (
            <Text style={styles.errorMsg}>{lastNameError}</Text>
          ) : null}
          <CustomInput
            inputHeight={45}
            marginVertical={'2%'}
            LeftIcons={Icons.Email}
            placeholder="Email"
            value={formData.Email}
            onChangeText={val => setFormData({...formData, Email: val})}
          />
          {emailError ? (
            <Text style={styles.errorMsg}>{emailError}</Text>
          ) : null}
          <View style={styles.pickerRow}>
            <CallingCodePicker
              style={styles.countryPicker}
              selectedValue={selectedCallingCode}
              onValueChange={value => setSelectedCallingCode(value)}
              togglerLabelStyle={{color: Theme.textGrey}}
              searchInputStyle={{color: Theme.black}}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor={Theme.border}
              value={formData.phone}
              onChangeText={val => setFormData({...formData, phone: val})}
            />
          </View>
          {phoneError ? (
            <Text style={styles.errorMsg}>{phoneError}</Text>
          ) : null}
          <CustomInput
            inputHeight={45}
            marginVertical={'2%'}
            secureTextEntry={textEntry}
            LeftIcons={Icons.Lock}
            placeholder=" Create Password"
            onRightIcon={() => setTextEntry(!textEntry)}
            RightIcons={textEntry ? Icons.Hide : Icons.eye}
            value={formData.password}
            onChangeText={val => setFormData({...formData, password: val})}
          />
          {passwordError ? (
            <Text style={styles.errorMsg}>{passwordError}</Text>
          ) : null}
          <CustomInput
            inputHeight={45}
            marginVertical={'2%'}
            onRightIcon={() => setTextEntry(!textEntry)}
            secureTextEntry={textEntry}
            LeftIcons={Icons.Lock}
            placeholder=" Confirm Password"
            RightIcons={textEntry ? Icons.Hide : Icons.eye}
            value={formData.confirmPassword}
            onChangeText={val =>
              setFormData({...formData, confirmPassword: val})
            }
          />
          {confirmPasswordError ? (
            <Text style={styles.errorMsg}>{confirmPasswordError}</Text>
          ) : null}
          <Button onPress={_signUp} title="SignUp" top="10%" />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: '5%',
              alignSelf: 'center',
            }}
            onPress={() => navigate('Login')}>
            <Text style={styles.title}>Already have a account? </Text>
            <Text
              style={{...styles.title, fontWeight: 'bold', color: Theme.sky}}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Congratulations
        visible={congrats}
        setVisible={() => setCongrats(!congrats)}
        description={'Your account has been created successfully'}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  appName: {
    color: Theme.orange,
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: '3%',
    marginTop: '15%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: Theme.white,
    fontSize: 15,
    marginVertical: '5%',
  },
  imageContainer: {
    height: 105,
    width: 105,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '10%',
  },
  password: {
    fontSize: Theme.normal,
    color: Theme.white,
    marginTop: 5,
  },
  title: {
    fontSize: Theme.small,
    color: Theme.text,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 4,
    marginVertical: '2%',
  },
  countryPicker: {
    alignSelf: 'center',
    height: 30,
    borderRightWidth: 1,
    borderColor: Theme.border,
  },
  input: {
    height: 40,
    width: '65%',
    color: Theme.white,
  },
  errorMsg: {
    color: Theme.red,
    fontSize: 13,
  },
});
