import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Theme from '../utils/Theme';

const Coins = ({backgroundColor, tintColor, icon, category, cash, onPress}) => {
  const styles = StyleSheet.create({
    container: {
      width: '94%',
      backgroundColor: Theme.darkRow,
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
      justifyContent: 'flex-start',
    },
    iconBg: {
      backgroundColor: backgroundColor,
      padding: '6%',
      borderRadius: 10,
      marginRight: '7%',
    },
    bitCoin: {
      width: 24,
      height: 24,
      tintColor: tintColor ? tintColor : null
    },
    bch: {
      fontFamily: Theme.fontFamily,
      color: Theme.white,
      fontWeight: 'bold',
    },
    cash: {
      fontSize: 10,
      color: Theme.text,
    },
    depositBtn: {
      backgroundColor:'#252525',
      paddingVertical:5,
      paddingHorizontal:15,
      borderRadius:5
    }
  });

  const handleSelectedCoin = val => {
    onCoinPress(val);
  }
  return (
    <View style={styles.container}>
      <View style={styles.imgTextBg}>
        <View style={styles.iconBg}>
          <Image resizeMode='contain' style={styles.bitCoin} source={icon} />
        </View>
        <View>
        <Text style={styles.bch}>{category}</Text>
        <Text style={styles.cash}>{cash}</Text>
        </View>
      </View>
      <View />
      <TouchableOpacity onPress={onPress} style={styles.depositBtn}>
      <Text style={{...styles.bch, color: Theme.white}}>Deposit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coins;
