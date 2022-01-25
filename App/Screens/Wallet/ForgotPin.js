import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Theme from '../../utils/Theme';
import Icons from '../../constants/Icons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useNavigation} from '@react-navigation/core';
import Button from '../../components/Button';
import Header from '../../components/Header';
import CountDown from 'react-native-countdown-component';

const ForgotPin = () => {
  const navigation = useNavigation();
  const navigate = navigation.navigate;
  const [code, setCode] = useState('');
  const [timerCount, setTimer] = useState(60);

  // useEffect(() => {
  //   if (timerCount == 0) {
  //     console.log('stop');
  //   } else {
  //     let interval = setInterval(() => {
  //       setTimer(lastTimerCount => {
  //         lastTimerCount <= 1 && clearInterval(interval);
  //         return lastTimerCount - 1;
  //       });
  //     }, 1000); //each count lasts for a second
  //     //cleanup the interval on complete
  //     return () => clearInterval(interval);
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <CountDown
        size={25}
        until={60 * 10}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: Theme.black,}}
        digitTxtStyle={{color: Theme.white}}
        separatorStyle={{color: Theme.white}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
        {/* <Text style={styles.Timer}>00:{timerCount}</Text> */}
        <View style={styles.body}>
          <Text style={styles.title}>
            Type the verification code{'\n'}
            we’ve sent you
          </Text>
          <View style={styles.pinBg}>
            <SmoothPinCodeInput
              PIN
              cellStyle={{
                backgroundColor: Theme.PIN,
                borderRadius: 15,
              }}
              cellStyleFocused={{
                borderColor: 'lightseagreen',
                backgroundColor: Theme.white,
              }}
              textStyle={{
                fontSize: 24,
                color: Theme.white,
                fontWeight: '500',
              }}
              textStyleFocused={{
                color: Theme.black,
              }}
              mask="*"
              cellSize={60}
              codeLength={4}
              value={code}
              onTextChange={code => setCode(code)}
            />
          </View>

          <Button
            title="Submit"
            top="15%"
            onPress={() => navigation.navigate('CreateNewPassword')}
          />
        </View>
      </ScrollView>
      <View style={styles.code}>
        <TouchableOpacity>
          <Text style={styles.signUp}>Don’t receive any code? </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{...styles.signUp, color: Theme.white, fontWeight: '600'}}>
            Send again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  headingText: {
    color: Theme.white,
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: Theme.title,
    fontFamily: Theme.fontFamily,
    fontWeight: 'bold',
    marginVertical: '20%',
  },
  body: {
    paddingHorizontal: 10,
  },
  lockBg: {
    width: 65,
    height: 65,
    backgroundColor: Theme.lockBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: '5%',
  },

  pinBg: {
    alignSelf: 'center',
    marginTop: '5%',
  },
  signUp: {
    fontFamily: Theme.fontFamily,
    color: Theme.smalltext,
    fontSize: Theme.medium,
    fontWeight: 'normal',
  },
  title: {
    fontSize: Theme.normal,
    color: Theme.smalltitle,
    fontWeight: 'normal',
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginVertical: '10%',
  },
  code: {flexDirection: 'row', justifyContent: 'center', margin: '10%'},
  icon: {
    width: 24,
    height: 24,
    marginLeft: '5%',
    marginTop: '5%',
  },
  Timer: {
    fontSize: 36,
    color: Theme.white,
    textAlign: 'center',
    fontWeight: '500',
  },
});
