import React from 'react';
import {
  Image,
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
const Register = () => {
  const navigation = useNavigation();
  const navigate = navigation.navigate;
  const [textEntry, setTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>{'Pepper' + '\n' + 'Pro'}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: '3%'}}>
          <Text style={styles.text}>Creat New Account</Text>

          <CustomInput LeftIcons={Icons.Profile} placeholder="First Name" />
          <CustomInput LeftIcons={Icons.Profile} placeholder="Last Name" />
          <CustomInput LeftIcons={Icons.Email} placeholder="Email" />
          <CustomInput LeftIcons={Icons.Email} placeholder="Phone Number" />
          <CustomInput
            secureTextEntry={textEntry}
            LeftIcons={Icons.Lock}
            placeholder=" Create Password"
            onRightIcon={() => setTextEntry(!textEntry)}
            RightIcons={textEntry ? Icons.Hide : Icons.eye}
          />
          <CustomInput
            onRightIcon={() => setTextEntry(!textEntry)}
            secureTextEntry={textEntry}
            LeftIcons={Icons.Lock}
            placeholder=" Confirm Password"
            RightIcons={textEntry ? Icons.Hide : Icons.eye}
          />
          <Button title="SignUp" top="10%" />
          {/* <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: '5%',
              alignSelf: 'center',
            }}
            onPress={() => navigate('Login')}>
            <Text style={styles.title}>Already have a account? </Text>
            <Text style={{...styles.title, color: Theme.sky}}> Login</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
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
    color: Theme.white,
    alignSelf: 'center',
    marginTop: '15%',
    backgroundColor: Theme.darkGreen,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 70,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: Theme.white,
    fontSize: Theme.title,
    alignSelf: 'center',
    marginBottom: '3%',
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
});
