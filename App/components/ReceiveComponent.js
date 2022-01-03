import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';
const ReceiveComponent = ({
  icon,
  category,
  onPress,
  cash,
  bchPrice,
  tintColor,
  cashPrice,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: '94%',
      backgroundColor: Theme.cardcolor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 8,
      padding: '3%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: '3%',
    },
    imgTextBg: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
      justifyContent: 'space-between',
    },
    iconBg: {
      backgroundColor: Theme.iconBackground,
      padding: '6%',
      borderRadius: 10,
    },
    bitCoin: {
      width: 24,
      height: 24,
      tintColor: tintColor ? tintColor : null,
    },
    bch: {
      fontFamily: Theme.fontFamily,
      color: Theme.white,
      fontWeight: 'bold',
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imgTextBg}>
        <View style={styles.iconBg}>
          <Image resizeMode="contain" style={styles.bitCoin} source={icon} />
        </View>
        <Text style={styles.bch}>{category}</Text>
      </View>
      <View />

      <Text style={{...styles.bch, color: Theme.text}}>{bchPrice}</Text>
    </TouchableOpacity>
  );
};

export default ReceiveComponent;
