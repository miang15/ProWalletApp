import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';

const Login = ({}) => {
  const navigation = useNavigation();
  const [textEntry, setTextEntry] = useState(true);
  return (
    <View style={styles.container}>
        <Text style={styles.appName}>{'Pepper' + '\n' + 'Pro'}</Text>
      <ScrollView>
        <View style={{margin: '3%'}}>
          <Text style={styles.text}>Welcome to Pepper Pro</Text>

          <CustomInput placeholder="Username/Email" LeftIcons={Icons.Profile} />

          <CustomInput
            secureTextEntry={textEntry}
            placeholder="Password"
            LeftIcons={Icons.Lock}
            onRightIcon={() => setTextEntry(!textEntry)}
            RightIcons={textEntry ? Icons.Hide : Icons.eye}
          />
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
          <Button
            title="Login"
            top="15%"
            onPress={() => navigation.navigate('BottomTab')}
          />
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
    color:Theme.white,
    alignSelf:"center",
    marginTop:"15%",
    backgroundColor:Theme.darkGreen,
    paddingVertical:40,
    paddingHorizontal:30,
    borderRadius:70,
    fontSize:20,
    textAlign:'center',
    fontWeight:"bold"
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-end",
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
