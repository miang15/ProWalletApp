import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDown from '../components/DropDown';

const Buy = () => {
  const [country, setCountry] = useState('Philippines');
  const [selected, setSelected] = useState(1);
  const [list, setList] = useState([
    'Philippines',
    'Turkey',
    'England',
    'Dubai',
    'Pakistan',
    'India',
    'London',
    'China',
  ]);
  const refRBSheet = useRef();

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    setCountry(val);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.Notice}>
            Go to your account, complete kyc verification to start buying and
            selling crypto
          </Text>
          <View style={styles.topRowView}>
            <TouchableOpacity
              onPress={() => setSelected(1)}
              style={{
                ...styles.BtnStyle,
                backgroundColor: selected === 1 ? '#303030' : Theme.darkRow,
              }}>
              <Text style={styles.tabLabel}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected(2)}
              style={{
                ...styles.BtnStyle,
                backgroundColor: selected === 2 ? '#303030' : Theme.darkRow,
              }}>
              <Text style={styles.tabLabel}>Sell</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.country}>Country</Text>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.rowView}>
            <Text style={styles.countryName}>{country}</Text>
            <View style={styles.arrowView}>
              <Image
                resizeMode="cover"
                style={styles.downImg}
                source={Images.Down}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.country}>Payment method</Text>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.rowView}>
            <Text style={styles.countryName}>Master card</Text>
            <View style={styles.arrowView}>
              <Image
                resizeMode="cover"
                style={styles.downImg}
                source={Images.Down}
              />
            </View>
          </TouchableOpacity>
          <Text style={{...styles.country, marginTop: '5%'}}>You pay</Text>
          <View style={{...styles.greyRow, paddingVertical: 0}}>
            <TextInput
              placeholder="1.00"
              placeholderTextColor={Theme.text}
              style={styles.inputText}
            />
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={styles.innerRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.bitCoinView}>
                  <Image
                    resizeMode="cover"
                    style={styles.bitCoinImg}
                    source={Images.bitCoin}
                  />
                </View>
                <Text style={styles.label}>Bitcoin</Text>
              </View>
              <View style={styles.arrowView}>
                <Image
                  resizeMode="cover"
                  style={styles.downImg}
                  source={Images.Down}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{...styles.country, marginTop: '3%'}}>
            You'll get roughly
          </Text>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.greyRow}>
            <Text style={styles.valueText}>206.30</Text>
            <View style={styles.innerRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{...styles.bitCoinView, width: 12, height: 12}}>
                  <Image
                    resizeMode="cover"
                    style={{...styles.bitCoinImg, tintColor: null}}
                    source={Images.coin}
                  />
                </View>
                <Text style={styles.label}>BNB</Text>
              </View>
              <View style={styles.arrowView}>
                <Image
                  resizeMode="cover"
                  style={styles.downImg}
                  source={Images.Down}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              ...styles.valueText,
              textAlign: 'right',
              marginVertical: '2%',
            }}>
            Max PHP 10,000
          </Text>
          {selected == 1 ? (
            <Button title="Buy" top="15%" />
          ) : (
            <Button title="Sell" top="15%" />
          )}
        </View>
      </ScrollView>
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

export default Buy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    marginVertical: '3%',
    marginHorizontal: '2%',
  },
  Notice: {
    color: Theme.white,
    fontSize: 14,
    marginHorizontal: '3%',
    textAlign: 'left',
    marginVertical: '3%',
  },
  topRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.darkRow,
    borderRadius: 8,
    marginHorizontal: '2%',
    marginBottom: '8%',
    marginTop: '2%',
  },
  BtnStyle: {
    width: '50%',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  tabLabel: {
    color: Theme.white,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  country: {
    color: Theme.textGrey,
    padding: 10,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.darkRow,
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: '3%',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  arrowView: {
    width: 12,
    height: 6,
    overflow: 'hidden',
    alignItems: 'center',
  },
  downImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  countryName: {
    color: Theme.white,
    fontSize: 15,
  },
  greyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: Theme.grey,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
  inputText: {
    color: Theme.white,
    width: '65%',
  },
  valueText: {
    color: Theme.white,
    fontSize: 15,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: Theme.text,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    width: '30%',
  },
  bitCoinView: {
    width: 9,
    height: 14,
    overflow: 'hidden',
    alignItems: 'center',
  },
  bitCoinImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    tintColor: Theme.green,
  },
  label: {
    color: Theme.white,
    paddingHorizontal: 5,
  },
});
