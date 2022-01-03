import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';
import SettingComponent from '../../components/SettingComponent';
import ToggleSwitch from 'toggle-switch-react-native';
import SettingWalletComponent from '../../components/SettingWalletComponent';
import {useNavigation} from '@react-navigation/core';
import Button from '../../components/Button';
const Setting = () => {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: '5%',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '5%'}} />
        <Text style={styles.text}>Setting</Text>
        <TouchableOpacity
          activeOpacity="0.6"
          onPress={() => navigation.navigate('Notification')}>
          <Image source={Icons.Ring} />
        </TouchableOpacity>
      </View>
      <SettingWalletComponent
        Title="Wallets"
        heading="Multi-Coin Wallet 1"
        Icon={Icons.Rectangle}
        leftIcon={Icons.Right}
      />
      <View style={styles.card}>
        <View style={styles.imgText}>
          <Image source={Icons.Mode} style={styles.image} />
          <Text style={styles.Title}>Dark Mode</Text>
        </View>

        <ToggleSwitch
          isOn={toggle}
          onColor={Theme.toggle}
          offColor={Theme.toggle}
          size="small"
          circleColor={Theme.blue}
          onToggle={isOn => setToggle(!toggle)}
        />
      </View>
      <SettingComponent
        Title="Security"
        leftIcon={Icons.Security}
        rightIcon={Icons.Right}
      />
      <SettingComponent
        onPress={() => navigation.navigate('Notification')}
        Title="Push Notifications"
        leftIcon={Icons.Bell}
        rightIcon={Icons.Right}
      />
      <SettingComponent
        Title="Perferences"
        leftIcon={Icons.perference}
        rightIcon={Icons.Right}
      />
      <SettingComponent
        Title="Help Center"
        leftIcon={Icons.help}
        rightIcon={Icons.Right}
      />
      <Button title={'Logout'} top={'5%'}/>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

    backgroundColor: Theme.black,
  },
  text: {
    color: Theme.white,
    fontSize: Theme.titletext,
    textAlign: 'center',
  },
  image: {
    width: 42,
    height: 42,
    marginRight: '5%',
  },

  Title: {
    color: Theme.white,
    fontSize: Theme.title,
  },
  heading: {color: Theme.lightPurple, fontSize: Theme.medium, marginTop: 5},
  card: {
    width: 345,
    height: 60,
    backgroundColor: Theme.cardcolor,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imgText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
