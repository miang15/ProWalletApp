import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';
const PortfolioComponent = ({
  icon,
  category,
  cash,
  backgroundColor,
  bchDigit,
  cashDigit,
  tintColor,
  bchPrice,
  cashPrice,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Theme.grey,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
      marginBottom: '4%',
    },
    imgTextBg: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '35%',
      justifyContent: 'flex-start',
    },
    iconBg: {
      backgroundColor: backgroundColor,
      padding: '6%',
      borderRadius: 10,
    },
    bitCoin: {
      width: 24,
      height: 24,
      tintColor: tintColor ? tintColor : null,
    },
    textBg: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    bch: {
      fontFamily: Theme.fontFamily,
      color: Theme.white,
      fontSize: 12,
      fontWeight: 'bold',
    },
    cash: {
      fontSize: 10,
      color: Theme.text,
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgTextBg}>
        <View style={styles.iconBg}>
          <Image style={styles.bitCoin} source={icon} resizeMode="contain" />
        </View>
        <View style={{...styles.textBg, marginLeft: '7%'}}>
          <Text style={styles.bch}>{category}</Text>
          <Text style={styles.cash}>{cash}</Text>
        </View>
      </View>
      <View style={{...styles.textBg, flex: 1}}>
        <Text style={{...styles.bch, alignSelf: 'center'}}>{bchDigit}</Text>
        <Text style={{...styles.cash, color: Theme.textGrey}}>{cashDigit}</Text>
      </View>
      <View style={{...styles.textBg, width: '30%'}}>
        <Text
          style={{...styles.bch, alignSelf: 'flex-end'}}>
          {bchPrice}
        </Text>
        <Text
          style={{...styles.cash, color: Theme.orange, alignSelf: 'flex-end'}}>
          {cashPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PortfolioComponent;
