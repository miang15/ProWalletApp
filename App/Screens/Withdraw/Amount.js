import React, {createRef, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  InteractionManager,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Button from '../../components/Button';
import ConfirmTradeModal from '../../components/ConfirmTradeModal';

const Data = [
  {
    id: '1',
    icon: Icons.bitIcon,
    backgroundColor: Theme.yellowOrange,
    category: 'Bitcoin',
    cash: 'BTC',
    bchDigit: '98,582,.84',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$104,00',
    cashPrice: '+0.18%',
  },
  // {
  //   id: '2',
  //   backgroundColor: '#454545',
  //   icon: Images.ETH,
  //   tintColor: Theme.white,
  //   category: 'Ethereum',
  //   cash: 'ETH',
  //   bchDigit: '98,582,.84',
  //   cashDigit: '625,849.756ARDR',
  //   bchPrice: '$104,00',
  //   cashPrice: '-0.18%',
  // },
  // {
  //   id: '3',
  //   icon: Images.liteCoin,
  //   backgroundColor: '#1E2733',
  //   category: 'Litecoin',
  //   cash: 'LTC',
  //   bchDigit: '98,582,.84',
  //   cashDigit: '625,849.756ARDR',
  //   bchPrice: '$204,00',
  //   cashPrice: '+0.91%',
  // },
  // {
  //   id: '4',
  //   backgroundColor: Theme.darkGrey,
  //   icon: Images.greenBit,
  //   backgroundColor: '#202832',
  //   category: 'Bitcoin Cash',
  //   cash: 'BCH',
  //   bchDigit: '98,582,.84',
  //   cashDigit: '625,849.756ARDR',
  //   bchPrice: '$304,00',
  //   cashPrice: '+0.18%',
  // },
  // {
  //   id: '5',
  //   icon: Images.Doge,
  //   backgroundColor: '#202832',
  //   category: 'Dogecoin',
  //   cash: 'DOGE',
  //   bchDigit: '10,000 DOGE',
  //   cashDigit: '625,849.756ARDR',
  //   bchPrice: '$104,00',
  //   cashPrice: '-0.9175',
  // },
  // {
  //   id: '6',
  //   icon: Images.Doge,
  //   backgroundColor: '#202832',
  //   category: 'Pepper Token',
  //   cash: 'PEPE',
  //   bchDigit: '30,000 PEPE',
  //   cashDigit: '625,849.756ARDR',
  //   bchPrice: '$204,00',
  //   cashPrice: '-0.9175',
  // },
];

const ModalDATA = [
  {
    id: 1,
    label: 'Bitcoin Amount',
    value: '0.172090',
  },
  {
    id: 2,
    label: 'Bitcoin Rate',
    value: '$60,000',
  },
];

const Amount = ({route, navigation}) => {
  const [modal, setModal] = useState(false);
  const trade = route?.params?.item;
  const inputRef = createRef();
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      inputRef.current.focus();
    });
  }, []);

  
  return (
    <View style={styles.container}>
      <View style={{marginBottom:"10%"}}>
      <Header
        onPress={() => navigation.goBack()}
        title={'Enter Amount'}
        rightIcon={Images.upload2}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: '3%'}}>
          <View style={styles.inputRow}>
            <View style={styles.arrowView}>
              <Image
                style={{...styles.arrowImg, tintColor: Theme.black}}
                source={Icons.arrow}
              />
            </View>
            <TextInput
              ref={inputRef}
              style={styles.textInput}
              placeholder="$25"
              placeholderTextColor={Theme.white}
              keyboardType="numeric"
            />
            <View style={styles.arrowView}>
              <Image
                resizeMode="contain"
                style={styles.arrowImg}
                source={Icons.arrow}
              />
            </View>
          </View>
          <View>
            <FlatList
            style={{flexGrow:0}}
              showsVerticalScrollIndicator={false}
              data={Data}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.BitcoinRowView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        ...styles.imgBackground,
                        backgroundColor: item.backgroundColor,
                      }}>
                      <View style={styles.bitcoinImgView}>
                        <Image
                          resizeMode="contain"
                          style={{...styles.bitCoin, tintColor: item.tintColor}}
                          source={item.icon}
                        />
                      </View>
                    </View>
                    <View>
                      <Text style={styles.bitCoinValue}>{item.category}</Text>
                      <Text style={styles.label}>{item.cash}</Text>
                    </View>
                  </View>
                  <View style={styles.downarrowView}>
                    <Image
                      resizeMode="contain"
                      style={styles.downarrowImg}
                      source={Images.arrow}
                    />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
      </View>
      <ConfirmTradeModal
        heading={'Confirm Trade'}
        DATA={ModalDATA}
        show={modal}
        setShow={() => setModal(!modal)}
        onPress={() => setModal(!modal)}
        btnText={trade === 'Buy' ? 'Buy' : 'Sell'}
        btnBorder={trade === 'Buy' ? Theme.green : Theme.orange}
        btnBackground={trade === 'Buy' ? Theme.green : Theme.orange}
        equal={true}
      />
      <View style={styles.bottomBtn}>
        <Button
          onPress={() => setModal(true)}
          title={'Continue'}
          backgroundColor={Theme.orange}
          borderColor={Theme.orange}
        />
      </View>
    </View>
  );
};

export default Amount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
    justifyContent:"space-between",
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: '5%',
    marginBottom: '15%',
  },
  textInput: {
    color: Theme.white,
    width: '30%',
    fontSize: 50,
    fontWeight: 'bold',
  },
  arrowView: {
    width: 30,
    height: 35,
    overflow: 'hidden',
    alignItems: 'center',
  },
  arrowImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    tintColor: Theme.border,
  },
  BitcoinRowView: {
    flexDirection: 'row',
    marginVertical: '3%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.darkGrey,
  },
  imgBackground: {
    width: 35,
    height: 35,
    backgroundColor: Theme.bitcoinYellow,
    borderRadius: 10,
    marginRight: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bitcoinImgView: {
    width: 15,
    height: 22,
    alignItems: 'center',
    overflow: 'hidden',
  },
  bitCoin: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  downarrowView: {
    width: 7,
    height: 14,
    overflow: 'hidden',
    alignItems: 'center',
  },
  downarrowImg: {
    tintColor: Theme.textGrey,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  bitCoinValue: {
    color: Theme.white,
    fontWeight: 'bold',
    fontSize: Theme.normal,
  },
  label: {
    color: Theme.textGrey,
  },
  bottomBtn: {
    margin:"3%"
  }
});
