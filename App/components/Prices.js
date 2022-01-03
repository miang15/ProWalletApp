import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Theme from '../utils/Theme';

const Prices = ({price, priceColor, amount}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal:10,
      paddingVertical:5,
    },
    price: {
        color: priceColor ? priceColor : Theme.green,
        fontSize:13
    },
    amount: {
        color:Theme.white,
        fontSize:13
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

export default Prices;
