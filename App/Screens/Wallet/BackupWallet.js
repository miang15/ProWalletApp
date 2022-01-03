import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Theme from '../../utils/Theme';
import { useNavigation } from '@react-navigation/core'
import {CheckBox} from 'react-native-elements';

const BackupWallet = () => {
  const navigation=useNavigation();
  const [terms, setTerms] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Pepper Wallet</Text>
      <Text style={{...styles.headingText, marginTop: '20%'}}>
        Backup you wallet
      </Text>
      <Text style={styles.recoveryText}>
        You will be shown a secret recovery phrase on the next screen. The
        recovery phrase is the only key to your wallet. It will allow you to
        recovver access to your wallet if your phone is lost or stolen.
      </Text>
      <View style={styles.checkTextBg}>
        <CheckBox
          checkedColor={Theme.white}
          uncheckedColor={Theme.white}
          checked={terms}
          onPress={() => setTerms(!terms)}
        />
        <Text style={styles.agreeText}>
          understand that if I lose my recovery phrase, I will not be able to
          access my account.
        </Text>
      </View>
      <Button
        title="Backup Now"
        top="15%"
        width="100%"
        onPress={() => navigation.navigate('Fingerprint')}
      />
      <TouchableOpacity
        style={styles.btnBg}
        activeOpacity="0.6"
        onPress={() => navigation.navigate('BottomTab')}>
        <Text style={styles.btnText}>Later</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackupWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
    paddingHorizontal: '5%',
    justifyContent:'center',
    alignItems:"center"
  },
  headingText: {
    color: Theme.white,
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: Theme.title,
    fontFamily: Theme.fontFamily,
    fontWeight:'bold'

  },
  recoveryText: {
    color: Theme.text,
    textAlign: 'center',
    marginTop: '3%',
    fontSize: Theme.small,
    fontFamily: Theme.fontFamily,
  },
  checkTextBg:{
    flexDirection:'row',
    marginTop:'20%',
    alignItems:"flex-end"
  },
  agreeText: {
    color: Theme.white,
    fontSize: Theme.small,
    fontFamily: Theme.fontFamily,
    flex:1,
  },
  btnBg:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:'10%'
  },
  btnText:{
    color:Theme.white,
    fontSize:Theme.medium,
    fontFamily:Theme.fontFamily,
    fontWeight:'bold'
  }
});
