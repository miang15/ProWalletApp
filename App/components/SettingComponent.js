import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';

const SettingComponent = props => {
  const navigation = useNavigation();
  
  const styles = StyleSheet.create({
    image: {
      width: 42,
      height: 42,
      alignSelf: 'center',
      marginRight: '5%',
    },

    Title: {
      color: Theme.white,
      fontSize: props.fontSize ? props.fontSize : Theme.title,
      fontWeight: props.fontWeight ? props.fontWeight : null
    },
    heading: {color: Theme.lightPurple, fontSize: Theme.medium},
    card: {
      width: 340,
      height: 60,
      backgroundColor: props.backgroundColor ? props.backgroundColor : Theme.cardcolor,
      borderRadius: 10,
      flexDirection: 'row',
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      alignItems: 'center',
      paddingVertical: 15,
    },
    iconTextBg: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 12,
      height: 12,
    },
  });

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity="0.6"
      onPress={props.onPress}>
      <View style={styles.iconTextBg}>
        {props?.leftIcon ? (
          <Image source={props.leftIcon} style={styles.image} />
        ) : null}
        <View>
          <Text style={styles.Title}>{props.Title}</Text>
        </View>
      </View>
      {props.rightIcon ? (
        <Image source={props.rightIcon} style={styles.icon} />
      ) : null}
    </TouchableOpacity>
  );
};

export default SettingComponent;
