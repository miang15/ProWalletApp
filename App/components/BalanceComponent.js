import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';
const BalanceComponent = ({
  icon,
  category,
  cash,
  bchPrice,
  cashPrice,
  backgroundColor,
  tintColor,
  width
}) => {
  const styles = StyleSheet.create({
    container: {
      width: width ? width : '100%',
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
    textBg: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    iconText:{
        flexDirection:'row',
        alignItems:'center'
    },
     icon: {
      width: 12,
      height: 12,
      tintColor: Theme.green,
      marginRight: '5%',
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
  });
  
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgTextBg}>
        <View style={styles.iconBg}>
          <Image resizeMode='contain' style={styles.bitCoin} source={icon} />
        </View>
        <View style={styles.textBg}>
          <Text style={styles.bch}>{category}</Text>
          <Text style={styles.cash}>{cash}</Text>
        </View>
      </View>
      <View />
     
      <View style={styles.textBg}>
        <View style={styles.iconText}>
          <Image
            style={styles.icon}
            source={Icons.upBold}
            resizeMode="contain"
          />
          <Text
            style={{...styles.bch, alignSelf: 'flex-end', color: Theme.white}}>
            {bchPrice}
          </Text>
        </View>
        <Text
          style={{...styles.cash, color: Theme.green, alignSelf: 'flex-end'}}>
          {cashPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BalanceComponent;

