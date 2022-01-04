import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import Theme from '../utils/Theme';

export default function Button({
  title,
  width,
  yellow,
  isDisable,
  loading,
  onPress,
  bottom,
  transparent,
  top,
  paddingVertical,
  backgroundColor,
  borderColor,
  horizontal
}) {
  const styles = StyleSheet.create({
    btn: {
      paddingHorizontal: 10,
      paddingVertical: paddingVertical ? paddingVertical : 10,
      borderRadius: 6,
      backgroundColor:
        isDisable || loading
          ? backgroundColor ? backgroundColor : Theme.white
          : yellow
          ? backgroundColor ? backgroundColor : Theme.green
          : backgroundColor ? backgroundColor : Theme.green,
     
      marginBottom: bottom && bottom,
      marginTop: top && top,
      marginHorizontal: horizontal && horizontal
    },
    btnText: {
    fontSize: Theme.normal,
      fontWeight:'700',
      color: Theme.white,
      textAlign: 'center',
    },
  });
  if (transparent) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={{width: width}}
        disabled={loading || isDisable}
        onPress={onPress}>
        <Card
          elevation={5}
          style={{...styles.btn, backgroundColor: Theme.white}}>
          {loading ? (
            <ActivityIndicator size="small" color={Theme.white} />
          ) : (
            <Text
              style={
                isDisable
                  ? {...styles.btnText, color: Theme.black}
                  : {...styles.btnText, color: Theme.black,fontSize:Theme.normal}
              }>
              {title}
            </Text>
          )}
        </Card>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{width: width,}}
        disabled={loading || isDisable}
        onPress={onPress}>
        <View
          style={{
            ...styles.btn,
            backgroundColor: backgroundColor ? backgroundColor : Theme.green,
            borderWidth: 1,
            borderColor: borderColor ? borderColor : Theme.green,
            paddingHorizontal: 10,
            paddingVertical: paddingVertical ? paddingVertical : 10,
          }}>
          {loading ? (
            <ActivityIndicator size={'large'} color={Theme.grey} />
          ) : (
            <Text
              style={
                isDisable
                  ? {...styles.btnText, color: Theme.white}
                  : {...styles.btnText, color: Theme.white, fontSize:Theme.normal}
              }>
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}
