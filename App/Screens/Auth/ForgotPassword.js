import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import Icons from '../../constants/Icons';
import { forgotPassword } from '../../Services/Apis';
import Theme from '../../utils/Theme';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleForgotPassword = () => {
    setEmailError('');

    if(email == ''){
      return setEmailError("Email is Required")
    }
    else if(!email.match(emailRegex)){
      return setEmailError("Enter valid Email")
    } else {
      forgotPassword(email).then((res) => {
        console.log("RES: ",res?.data)
        navigation.navigate("ForgotPin")
      }).catch((e) => {
        console.log("ERROR: ",e?.response?.data?.error);
        Alert.alert(e?.response?.data?.error)
      })
    }

  }

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Forgot Password</Text>
          <Text style={styles.description}>
            Please enter your email below to receive your password reset code
          </Text>
          <Text style={styles.label}>Enter the email</Text>
          <CustomInput
            placeholder="Your email"
            LeftIcons={Icons.Email}
            value={email}
            onChangeText={setEmail}
          />
          {emailError ? (
            <Text style={styles.errorMsg}>{emailError}</Text>
          ) : null}
          <Button
            onPress={handleForgotPassword}
            title="Send Code"
            top="10%"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    paddingHorizontal: 15,
    marginVertical: '5%',
  },
  heading: {
    color: Theme.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '15%',
  },
  description: {
    color: Theme.text,
    fontSize: 14,
    marginTop: '1%',
    marginBottom: '5%',
  },
  label: {
    color: Theme.white,
    fontSize: 15,
    marginTop: '15%',
  },
  errorMsg: {
    color: Theme.red,
    fontSize: 13,
  },
});
