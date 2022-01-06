import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';
import TradeComponent from '../components/TradeComponent';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/core';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDown from '../components/DropDown';

const Swap = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(1);
  const [coin, setCoin] = useState('BTC');
  const [list, setList] = useState(['BTC', 'ETH', 'LTC', 'BNB', 'BCH']);
  const refRBSheet = useRef();

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    setCoin(val);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.topRowView}>
        <TouchableOpacity
          onPress={() => setSelected(1)}
          style={{
            ...styles.BtnStyle,
            backgroundColor: selected === 1 ? '#303030' : Theme.darkRow,
          }}>
          <Text style={styles.label}>Swap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(1), navigation.navigate('Exchange');
          }}
          style={{
            ...styles.BtnStyle,
            width: '36%',
            backgroundColor: selected === 2 ? '#303030' : Theme.darkRow,
          }}>
          <Text style={styles.label}>Exchange</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(1), navigation.navigate('Buy');
          }}
          style={{
            ...styles.BtnStyle,
            backgroundColor: selected === 3 ? '#303030' : Theme.darkRow,
          }}>
          <Text style={styles.label}>Fiat</Text>
        </TouchableOpacity>
      </View> */}
            <Text style={styles.headingText}>Swap</Text>
      <TradeComponent
        heading="You send"
        title="0.01 BTC"
        bitcoin="Bitcoin"
        btc={coin}
        onPress={() => refRBSheet.current.open()}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            ...styles.text,
            fontSize: Theme.normal,
            marginTop: 5,
            marginLeft: 10,
          }}>
          1 ETH= 26.8188923 BTC
        </Text>
        <TouchableOpacity style={styles.arrowView}>
          <Image
            resizeMode="contain"
            source={Icons.arrow}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
      <TradeComponent
        heading="You receive approximately"
        title="~2.6751845"
        bitcoin="Ethereum"
        btc={coin}
        onPress={() => refRBSheet.current.open()}
      />
      <Button
        title="Swap"
        top="15%"
        horizontal="3%"
        backgroundColor={Theme.orange}
        borderColor={Theme.orange}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={250}
        customStyles={{
          wrapper: {backgroundColor: 'transparent'},
          draggableIcon: {backgroundColor: Theme.white},
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: Theme.darkGrey,
          },
        }}>
        <DropDown list={list} selectedItem={val => handleSelectedItem(val)} />
      </RBSheet>
    </View>
  );
};

export default Swap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  topRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.darkRow,
    borderRadius: 8,
    marginHorizontal: '2%',
    marginVertical: '15%',
  },
  headingText: {
    color: Theme.white,
    textAlign: 'center',
    fontSize: Theme.headingtext,
    fontWeight: 'bold',
    marginTop: '10%',
    marginBottom:"15%"
  },
  BtnStyle: {
    width: '32%',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  label: {
    color: Theme.white,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: Theme.white,
    textAlign: 'center',
    fontSize: Theme.normal,
    marginLeft: 10,
    marginRight: 10,
  },
  btn: {
    width: 95,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: Theme.grey,
  },
  icon: {
    height: 9,
    width: 16,
    marginRight: 2,
    marginLeft: 10,
    alignSelf: 'center',
  },
  arrowView: {
    width: 30,
    height: 30,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: Theme.grey,
    marginHorizontal: '3%',
    padding: 8,
    borderRadius: 15,
  },
  arrow: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.blackish,
    borderRadius: 4,
    marginTop: 40,
    margin: 10,
    alignItems: 'center',
    height: 40,
  },
});
