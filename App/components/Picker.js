import React from 'react';
import {Image, TextInput} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Images from '../constants/Images';
import Theme from '../utils/Theme';

const Picker = ({
  backgroundColor,
  width,
  onLeftPress,
  onRightPress,
  label,
  valueText,
  onChangeText,
  placeholder
}) => {
  const styles = StyleSheet.create({
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: backgroundColor ? backgroundColor : Theme.darkRow,
      marginVertical: '2%',
      width: width ? width : '98%',
      alignSelf: 'center',
      borderRadius: 8,
      padding: 10,
    },
    innerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRightWidth: 0.7,
      borderColor: Theme.border,
      paddingRight: 10,
    },
    label: {
      color: Theme.white,
      fontSize: Theme.medium,
      marginRight: '5%',
    },
    downView: {
      width: 15,
      height: 15,
      overflow: 'hidden',
      alignItems: 'center',
    },
    down: {
      width: '100%',
      height: '100%',
      alignSelf: 'center',
    },
    secondRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
      width: '75%',
    },
    input: {
      color:Theme.white,
      width:"75%",
      height:40
    }
  });

  return (
    <View style={styles.topRow}>
      <TouchableOpacity onPress={onLeftPress} style={styles.innerRow}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.downView}>
          <Image resizeMode="cover" style={styles.down} source={Images.Down} />
        </View>
      </TouchableOpacity>
      <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={valueText}
      placeholderTextColor={Theme.white}
      onChangeText={onChangeText}
      />
      {/* <TouchableOpacity onPress={onRightPress} style={styles.secondRow}>
        <Text style={styles.label}>{valueText}</Text>
        <View style={styles.downView}>
          <Image resizeMode="cover" style={styles.down} source={Images.Down} />
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default Picker;
