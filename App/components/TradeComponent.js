import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';
const TradeComponent = props => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'column', width: '60%', margin: 5}}>
        <Text style={{...styles.heading, fontSize: Theme.small}}>
          {props.heading}
        </Text>
        <TextInput
          value={props.values}
          placeholder={props.title}
          placeholderTextColor={Theme.white}
          style={styles.input}
        />
        {/* <Text style={styles.heading}>{props.title}</Text> */}
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={styles.border}>
          <Text style={{...styles.text, fontSize: Theme.small}}>
            {props.bitcoin}
          </Text>
          <Text style={styles.text}>{props.btc}</Text>
        </View>
        <Image source={Icons.Down} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default TradeComponent;

const styles = StyleSheet.create({
  text: {
    color: Theme.white,
    textAlign: 'center',
    fontSize: Theme.headingtext,
    marginLeft: 12,
  },
  heading: {
    color: Theme.white,
    fontSize: Theme.headingtext,
  },
  btn: {
    width: 113,
    height: 39,
    borderRadius: 5,
    backgroundColor: Theme.grey,
  },
  icon: {
    height: 10,
    width: 16,
    alignSelf: 'center',
    marginHorizontal: '3%',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.blackish,
    margin: 10,
    padding: 2,
    borderRadius: 5,
    height: 74,
  },
  border: {
    flexDirection: 'column',
    borderLeftColor: Theme.white,
    borderLeftWidth: 1,
    margin: 5,
  },
  input: {
    color: Theme.white,
    height: 40,
  },
});
