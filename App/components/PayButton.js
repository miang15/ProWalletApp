import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Theme from '../utils/Theme';

const PayButton = ({onPress, margin}) => {
    const styles = StyleSheet.create({
        btn: {
            backgroundColor:Theme.orange,
            alignItems:"center",
            paddingVertical:6,
            paddingHorizontal:25,
            alignSelf:"flex-start",
            borderRadius:30,
            margin: margin ? margin : "2%"
        },
        btnText: {
            color:Theme.white,
            fontSize:15,
            fontWeight:"bold"
        }
    });
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>Pay</Text>
    </TouchableOpacity>
  );
};

export default PayButton;

