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
const Register = () => {
  const navigation = useNavigation();
  const navigate = navigation.navigate;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin:'3%'}}>
          <Image source={Images.logo} style={styles.imageContainer} />
          <Text style={styles.text}>Creat New Account</Text>

          <CustomInput LeftIcons={Icons.Profile} placeholder="Username" />
          <CustomInput LeftIcons={Icons.Email} placeholder="Email" />
          <CustomInput
            LeftIcons={Icons.Lock}
            placeholder=" Create Password"
            RightIcons={Icons.Hide}
          />
          <CustomInput
            LeftIcons={Icons.Lock}
            placeholder=" Confirm Password"
            RightIcons={Icons.Hide}
          />
          <Button
            title="SignUp"
            top="10%"
          />
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems:'center', marginVertical:"5%", alignSelf:'center'}}
            onPress={() => navigate('Login')}>
            <Text style={styles.title}>Already have a account? </Text>
            <Text style={{...styles.title, color: Theme.sky}}> Login</Text>
          </TouchableOpacity>
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
  text: {
    color: Theme.white,
    fontSize: Theme.title,
    alignSelf:'center',
    marginBottom:"3%"
  },
  imageContainer: {
    height: 105,
    width: 105,
    alignSelf:'center',
    marginTop:'5%',
    marginBottom:'10%'
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
