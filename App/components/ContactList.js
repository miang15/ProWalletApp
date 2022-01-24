import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../utils/Theme';

const ContactList = ({
  marginHorizontal,
  marginVertical,
  backgroundColor,
  img,
  title,
  number,
  onPress,
}) => {
  const styles = StyleSheet.create({
    contactRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: Theme.darkRow,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginHorizontal: marginHorizontal ? marginHorizontal : '2%',
      marginVertical: marginVertical ? marginVertical : '1%',
      borderRadius: 10,
    },
    innerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
    },
    imgView: {
      width: 50,
      height: 50,
      overflow: 'hidden',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: backgroundColor ? backgroundColor : Theme.orange,
      justifyContent: 'center',
    },
    img: {
      width: '100%',
      height: '100%',
      alignSelf: 'center',
    },
    textImg: {
      color: Theme.white,
      fontSize: 30,
      marginBottom: 3,
    },
    contactView: {
      marginHorizontal: '3%',
      width: '75%',
    },
    contactTitle: {
      color: Theme.white,
      fontSize: 15,
      fontWeight: 'bold',
    },
    contactNumber: {
      color: title ? Theme.textGrey : Theme.white,
      fontSize: 15,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.contactRow}>
      <View style={styles.innerRow}>
        <View style={styles.imgView}>
          {img ? (
            <Image
              resizeMode="cover"
              style={styles.img}
              source={Images.profilePic}
            />
          ) : title ? (
            <Text style={styles.textImg}>{title?.charAt(0)}</Text>
          ) : (
            <AntDesign name="user" size={24} color={Theme.white} />
          )}
        </View>
        <View style={styles.contactView}>
          {title ? (
            <Text numberOfLines={1} style={styles.contactTitle}>
              {title}
            </Text>
          ) : null}
          <Text numberOfLines={1} style={styles.contactNumber}>
            {number}
          </Text>
        </View>
      </View>
      <AntDesign name="exclamationcircle" size={20} color={Theme.whiteText} />
    </TouchableOpacity>
  );
};

export default ContactList;
