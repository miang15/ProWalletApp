import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Theme from '../utils/Theme';
import Icons from '../constants/Icons';

export default function CustomInput({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  LeftIcons,
  RightIcons,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
  color,
  marginVertical,
  editable,
  onRightIcon,
  horizontal
}) {
  const styles = StyleSheet.create({
    rowView: {
      flexDirection: 'row',
      borderWidth: borderWidth ? borderWidth : 1,
      borderRadius: 8,
      marginVertical: marginVertical ? marginVertical : '3%',
      backgroundColor: backgroundColor ? backgroundColor : Theme.black,
      borderColor: borderColor ? borderColor : Theme.border,
      alignItems: 'center',
      paddingHorizontal: 5,
      marginHorizontal: horizontal ? horizontal : null
    },
    inputStyle: {
      marginLeft: '1%',
      marginRight: RightIcons ? '3%' : '1%',
      width: width ? width : '85%',
      fontSize: 14,
      color: color ? color : Theme.white,
    },
    iconView: {
      width: 15,
      height: 15,
      overflow: 'hidden',
      alignItems: 'center',
    },
    icon: {
      width: '100%',
      height: '100%',
      alignSelf: 'center',
      tintColor:Theme.border
    },
  });

  return (
    <View style={styles.rowView}>
      {LeftIcons ? (
        <View style={styles.iconView}>
          <Image resizeMode="contain" style={styles.icon} source={LeftIcons} />
        </View>
      ) : null}
      <TextInput
        editable={editable}
        theme={{colors: {text: Theme.white, primary: Theme.border}}}
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={Theme.border}
      />
      {RightIcons ? (
        <TouchableOpacity onPress={onRightIcon} style={styles.iconView}>
          <Image resizeMode="contain" style={styles.icon} source={RightIcons} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
