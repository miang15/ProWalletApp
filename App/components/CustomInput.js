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
}) {
  const styles = StyleSheet.create({
    rowView: {
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 8,
      marginVertical: '3%',
      backgroundColor: Theme.black,
      borderColor: Theme.border,
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    inputStyle: {
      marginLeft:'1%',
      marginRight:"3%",
      width: width ? width : '80%',
      fontSize: 14,
      color: Theme.white,
    },
    iconView: {
      width:20,
      height:20,
      overflow:'hidden',
      alignItems:'center'
    },
    icon: {
      width:'100%',
      height:'100%',
      alignSelf:'center'
    }
  });

  return (
    <View style={styles.rowView}>
    { LeftIcons ?  <View style={styles.iconView}>
        <Image style={styles.icon} source={LeftIcons} />
      </View> : null }
      <TextInput
        theme={{colors: {text: Theme.white, primary: Theme.border}}}
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={Theme.border}
      />
    { RightIcons ?  <TouchableOpacity style={styles.iconView}>
        <Image style={styles.icon} source={RightIcons} />
      </TouchableOpacity> : null }
    </View>
  );
}
