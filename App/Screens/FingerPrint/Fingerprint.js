import {useNavigation} from '@react-navigation/core';
import React, { useEffect } from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';
import LinearGradient from 'react-native-linear-gradient';
import TouchID from 'react-native-touch-id'

const Fingerprint = () => {
  const navigation = useNavigation();

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: Theme.green, // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    unifiedErrors: false, // use unified error messages (default false)
  };

    TouchID.authenticate('Use your finger print', optionalConfigObject)
    .then(success => {
      Alert.alert(
        "Success!",
        "Authenticated Successfully",
        [

          { text: "OK", onPress: () => navigation.navigate("BottomTab") }
        ]
      );
      Alert.alert('Authenticated Successfully');
    })
    .catch(error => {
      Alert.alert('Authentication Failed');
    });  

   
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pepper Wallet</Text>
      <LinearGradient colors={['#0E0E0E', '#0D0D0D']} style={styles.card}>
        <Image source={Icons.scan} style={styles.image}></Image>
        <Text style={styles.fingerprint}>Use Fingerprint for Banking</Text>
        <Text style={styles.city}>Unlock City Bank</Text>
        <View style={styles.line}></View>
        <TouchableOpacity
          activeOpacity="0.6"
          onPress={() => navigation.navigate('RecoveryPhase')}>
          <Text style={styles.Pin}>Use Pin</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Fingerprint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Theme.black,
  },
  text: {
    color: Theme.white,
    fontSize: Theme.heading,
    marginTop: 90,
  },
  card: {
    width: '75%',
    marginTop: '10%',
    padding: 10,
    elevation: 8,
    borderRadius: 5,
  },
  fingerprint: {
    alignSelf: 'center',
    color: Theme.white,
    fontSize: Theme.normal,
    marginTop: '5%',
  },
  city: {
    color: Theme.white, 
    fontSize: Theme.small, 
    marginTop: '3%',
    alignSelf:'center'
  },
  line: {
    borderWidth: 0.3,
    marginTop:"20%",
    borderColor: Theme.white,
  },
  Pin: {
    fontSize: Theme.title,
    color: Theme.golden,
    marginTop:'3%',
    alignSelf:'center'
  },
  image: {
    height: 45,
    width: 45,
    marginTop: '15%',
    alignSelf: 'center',
  },
});
