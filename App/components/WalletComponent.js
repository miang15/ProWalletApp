import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Images from '../constants/Images';
import Theme from '../utils/Theme';

const WalletComponent = ({width, leftIcon, title, onPress, value}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      width: width ? width : '98%',
      alignSelf: 'center',
      borderBottomWidth: title === 'Logout' ? 0 : 1,
      borderColor: Theme.darkGrey,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 15,
      marginBottom: '2%',
    },
    innerRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftImgView: {
      width: 18,
      height: 18,
      overflow: 'hidden',
      alignItems: 'center',
    },
    leftIcon: {
      width: '100%',
      height: '100%',
      alignSelf: 'center',
      transform: [{rotate: title === 'Bank withdraw'
      ? '180deg'
      : title === 'Mobile money withdraw'
      ? '180deg'
      : title === 'Paypal withdraw'
      ? '180deg'
      : title === 'USDC withdraw'
      ? '180deg'
      : '360deg'}],
    },
    title: {
      color:
        title === 'Bank withdraw'
          ? Theme.yellowOrange
          : title === 'Mobile money withdraw'
          ? Theme.yellowOrange
          : title === 'Paypal withdraw'
          ? Theme.yellowOrange
          : title === 'USDC withdraw'
          ? Theme.yellowOrange
          : Theme.white,
      marginLeft: '5%',
      width: '65%',
    },
    Balance: {
      color: Theme.orange,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.innerRow}>
        <View style={styles.leftImgView}>
          <Image
            resizeMode="contain"
            style={styles.leftIcon}
            source={leftIcon}
          />
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <Text style={styles.Balance}>{value}</Text>
    </TouchableOpacity>
  );
};

export default WalletComponent;
