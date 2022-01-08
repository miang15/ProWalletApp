import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
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
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={Images.loginBackground}>
        <View style={styles.innerContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.logoRow}>
              <View style={styles.logoView}>
                <Image
                  style={styles.logo}
                  source={Images.splashIcon}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.appName}>PEPPER PRO</Text>
            </View>
            <Text style={styles.description}>
              Buy, Sell & Trade Cryptocurrencies
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>
      <Button
        top={'20%'}
        horizontal={'3%'}
        title={'Login'}
        backgroundColor={Theme.orange}
        borderColor={Theme.orange}
      />
      <Text style={styles.text1}>No account yet? 
          <Text style={styles.BtnText}> Sign up now.</Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  background: {
    width: '100%',
    height: 450,
  },
  innerContainer: {
    position: 'absolute',
    top: '45%',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginBottom: '5%',
  },
  logoView: {
    width: 30,
    height: 30,
    overflow: 'hidden',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  appName: {
    color: Theme.orange,
    fontSize: 25,
    marginHorizontal: '3%',
    fontWeight: 'bold',
  },
  description: {
    color: Theme.white,
    fontSize: 25,
    marginLeft: '10%',
    marginVertical: '5%',
    lineHeight: 35,
  },
  text1: {
    color:Theme.border,
    alignSelf:"center",
    marginVertical:'5%',
    fontSize:15,
  },
  BtnText: {
    color:Theme.white,
    fontWeight:"bold",
  }
});
