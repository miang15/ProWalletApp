import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()}/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Forgot Password</Text>
          <Text style={styles.description}>
            Please enter your email below to receive your password reset code
          </Text>
          <Text style={styles.label}>Enter the email</Text>
          <CustomInput placeholder='Your email' LeftIcons={Icons.Email} />
          <Button onPress={() => navigation.navigate('ForgotPin')} title='Send Code' top='10%' />
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
      color:Theme.text,
      fontSize:14,
      marginTop:'1%',
      marginBottom:'5%'
  },
  label: {
      color:Theme.white,
      fontSize:15,
      marginTop:'15%'
  }
});
