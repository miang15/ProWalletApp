import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';
const SendComponent = ({icon, category, bchPrice,}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgTextBg}>
        <View style={styles.iconBg}>
          <Image style={styles.bitCoin} source={icon} />
        </View>
        <Text style={styles.bch}>{category}</Text>
      </View>
      <View />

      <Text style={{...styles.bch, color: Theme.white}}>{bchPrice}</Text>
    </View>
  );
};

export default SendComponent;

const styles = StyleSheet.create({
  container: {
    width: '94%',
    backgroundColor: Theme.grey,
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
    backgroundColor: Theme.bitcoinYellow,
    padding: '6%',
    borderRadius: 10,
    marginRight: '7%',
  },
  bitCoin: {
    width: 24,
    height: 24,
  },
  bch: {
    fontFamily: Theme.fontFamily,
    color: Theme.white,
    fontWeight: 'bold',
  },
});
