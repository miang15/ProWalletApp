import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';

const SettingWalletComponent = props => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconTextBg}>
        <Image source={props.Icon} style={styles.image} />
        <View>
          <Text style={styles.Title}>{props.Title}</Text>
          <Text style={styles.heading}>{props.heading} </Text>
        </View>
      </View>
      <Image source={props.leftIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default SettingWalletComponent;

const styles = StyleSheet.create({
  image: {
    width: 42,
    height: 42,
    alignSelf: 'center',
    marginRight: '5%',
  },

  Title: {
    color: Theme.white,
    fontSize: Theme.title,
  },
  heading: {color: Theme.lightPurple, fontSize: Theme.medium},
  card: {
    width: 340,
    height: 60,
    backgroundColor: Theme.cardcolor,
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
