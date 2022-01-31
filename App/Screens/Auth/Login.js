import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';
import {login} from '../../Services/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({}) => {
  const navigation = useNavigation();
  const [textEntry, setTextEntry] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [formData, setFormData] = useState({
    Email: '',
    password: '',
    device: Platform.OS == 'android' ? 'android' : 'ios',
  });

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (formData.Email == '') {
      return setEmailError('Email is Required');
    } else if (!formData.Email.match(emailRegex)) {
      return setEmailError('Enter valid Email');
    } else if (formData.password == '') {
      return setPasswordError('Password is Required');
    } else {
      login(formData)
        .then(async ({data}) => {
          console.log('RES: ', data);

          await AsyncStorage.setItem('LOGINTOKEN', data?.user?.token);
          navigation.navigate('BottomTab');
        })
        .catch(e => {
          if(e?.response?.data){
            setPasswordError("Email and Password are not matched")
          }
        });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>PEPPER PRO</Text>
      <Text style={styles.text}>Welcome to Pepper Pro</Text>
      <ScrollView>
        <View style={{margin: '3%'}}>
          <Text style={styles.text1}>Login</Text>
          <CustomInput
            placeholder="Username/Email"
            LeftIcons={Icons.Profile}
            value={formData.Email}
            onChangeText={val => setFormData({...formData, Email: val})}
          />
          {emailError ? (
            <Text style={styles.errorMsg}>{emailError}</Text>
          ) : null}
          <CustomInput
            secureTextEntry={textEntry}
            placeholder="Password"
            LeftIcons={Icons.Lock}
            onRightIcon={() => setTextEntry(!textEntry)}
            RightIcons={textEntry ? Icons.Hide : Icons.eye}
            value={formData.password}
            onChangeText={val => setFormData({...formData, password: val})}
          />
          {passwordError ? (
            <Text style={styles.errorMsg}>{passwordError}</Text>
          ) : null}
          <View style={styles.rowView}>
            {/* <TouchableOpacity
              style={{alignSelf: 'flex-end', paddingVertical: 5}}
              activeOpacity="0.6"
              onPress={() => navigation.navigate('Fingerprint')}>
              <Text style={styles.password}>Use FingerPrint</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{alignSelf: 'flex-end', paddingVertical: 5}}
              activeOpacity="0.6"
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.password}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <Button title="Login" top="15%" onPress={handleLogin} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '15%',
              marginBottom: '3%',
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.title}>Don’t have a account? </Text>
            <Text style={{...styles.title, color: Theme.sky}}> Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

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
    fontSize: Theme.title,
    marginVertical: '3%',
    alignSelf: 'center',
  },
  text1: {
    color: Theme.white,
    fontSize: 18,
    marginTop: '10%',
    marginBottom: '3%',
    alignSelf: 'flex-start',
  },
  imageContainer: {
    height: 105,
    width: 105,
    marginTop: '15%',
    alignSelf: 'center',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  password: {
    fontSize: Theme.normal,
    color: Theme.white,
  },
  title: {
    fontSize: Theme.small,
    color: Theme.text,
  },
  errorMsg: {
    color: Theme.red,
    fontSize: 13,
  },
});
