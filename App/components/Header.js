import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icons from '../constants/Icons';
import Images from '../constants/Images';
import Theme from '../utils/Theme';

const Header = ({onPress, title, rightIcon, onRightIcon, backgroundColor}) => {
  const styles = StyleSheet.create({
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: backgroundColor ? backgroundColor : Theme.black,
      justifyContent: 'space-between',
      paddingHorizontal: '3%',
      paddingVertical: '5%',
    },
    imgView: {
      width: 30,
      height: 20,
      overflow: 'hidden',
      alignItems: 'center',
    },
    img: {
      width: '100%',
      height: '100%',
      alignSelf: 'center',
      tintColor: Theme.white,
    },
    title: {
      color: Theme.white,
      fontSize: 20,
      fontWeight: 'bold',
      marginRight: rightIcon ? 0 : '15%',
    },
  });

  return (
    <View style={styles.topRow}>
      <TouchableOpacity onPress={onPress} style={styles.imgView}>
        <Image resizeMode="cover" style={styles.img} source={Icons.Leftarrow} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {rightIcon ? (
        <TouchableOpacity
          onPress={onRightIcon}
          style={{...styles.imgView, marginHorizontal: 0}}>
          <Image resizeMode="contain" style={styles.img} source={rightIcon} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;
