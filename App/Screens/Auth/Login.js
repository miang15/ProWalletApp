import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';

const Login = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.imageContainer} />
      <ScrollView>
        <View style={{margin:"3%"}}>
      <Text style={styles.text}>Welcome to Pepper Wallet</Text>

      <CustomInput placeholder="Username/Email" LeftIcons={Icons.Profile} />

      <CustomInput placeholder="Password" LeftIcons={Icons.Lock} />
      <View style={styles.rowView}>        
      <TouchableOpacity
        style={{alignSelf:'flex-end',paddingVertical:5,}}
        activeOpacity="0.6"
        onPress={() => navigation.navigate('Fingerprint')}>
        <Text style={styles.password}>Use FingerPrint</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignSelf:'flex-end',paddingVertical:5,}}
        activeOpacity="0.6"
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.password}>Forgot password?</Text>
      </TouchableOpacity>
      </View>
      <Button
        title="Login"
        top="15%"
        onPress={() => navigation.navigate('BackupWallet')}
      />
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems:'center', marginTop:"15%", marginBottom:"3%", alignSelf:'center'}}
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
  text: {
    color: Theme.white,
    fontSize: Theme.title,
    marginTop: '10%',
    alignSelf: 'center',
  },
  imageContainer: {
    height: 105,
    width: 105,
    marginTop: '15%',
    alignSelf: 'center',
  },
  rowView: {
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between"
  },
  password: {
    fontSize: Theme.normal,
    color: Theme.white,
  },
  title: {
    fontSize: Theme.small,
    color: Theme.text,
  },
});
