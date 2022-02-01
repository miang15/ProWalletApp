import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Coins from '../components/Coins';
import Header from '../components/Header';
import Icons from '../constants/Icons';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Clipboard from '@react-native-community/clipboard';
import {coinCharge, coinPrices} from '../Services/Apis';

const Data = [
  {
    id: '1',
    icon: Icons.bitIcon,
    backgroundColor: '#453217',
    category: 'Bitcoin',
    cash: 'BTC',
    bchDigit: '98,582,.84',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$104,00',
    cashPrice: '+0.18%',
  },
  {
    id: '2',
    backgroundColor: '#454545',
    icon: Images.ETH,
    tintColor: Theme.white,
    category: 'Ethereum',
    cash: 'ETH',
    bchDigit: '98,582,.84',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$104,00',
    cashPrice: '-0.18%',
  },
  {
    id: '3',
    icon: Images.liteCoin,
    backgroundColor: '#1E2733',
    category: 'Litecoin',
    cash: 'LTC',
    bchDigit: '98,582,.84',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$204,00',
    cashPrice: '+0.91%',
  },
  {
    id: '4',
    backgroundColor: Theme.darkGrey,
    icon: Images.greenBit,
    backgroundColor: '#202832',
    category: 'Bitcoin Cash',
    cash: 'BCH',
    bchDigit: '98,582,.84',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$304,00',
    cashPrice: '+0.18%',
  },
  {
    id: '5',
    icon: Images.Doge,
    backgroundColor: '#202832',
    category: 'Dogecoin',
    cash: 'DOGE',
    bchDigit: '10,000 DOGE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$104,00',
    cashPrice: '-0.9175',
  },
  {
    id: '6',
    icon: Images.Doge,
    backgroundColor: '#202832',
    category: 'Pepper Token',
    cash: 'PEPE',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$204,00',
    cashPrice: '-0.9175',
  },
  {
    id: '7',
    icon: Images.Doge,
    backgroundColor: '#202832',
    category: 'Shiba inu',
    cash: 'SHIB',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$204,00',
    cashPrice: '-0.9175',
  },
  {
    id: '8',
    icon: Images.Doge,
    backgroundColor: '#202832',
    category: 'Ripple XRP',
    cash: 'RX',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$204,00',
    cashPrice: '-0.9175',
  },
  {
    id: '9',
    icon: Images.Doge,
    backgroundColor: '#202832',
    category: 'Stellar lumens XLM',
    cash: 'XLM',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$204,00',
    cashPrice: '-0.9175',
  },
];

const CoinsDeposit = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState('');
  const [coinsData, setCoinsData] = useState('');
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('1B4evPk29C29alkjfkasdf9Fkjkjf9FkK');
  const [copiedText, setCopiedText] = useState('');

  const handleDeposit = val => {
    console.log("ITEM: ",val);
    setSelectedCoin(val?.name);
    coinCharge("BTC")
      .then(({data}) => {
        setAddress(data?.address)
        setModalVisible(true);
      })
      .catch(e => {
        console.log('Error: ', e);
        Alert.alert("Something went wrong")
      });
  };

  const copyToClipboard = () => {
    setModalVisible(!modalVisible);
    Clipboard.setString(address);
  };

  useEffect(() => {
    coinPrices()
      .then(({data}) => {
        console.log('COIN DATA: ', data?.result);
        setCoinsData(data?.result);
        setLoading(false);
      })
      .catch(e => {
        console.log('Error: ', e);
        setLoading(false);
      });
  }, []);

  const renderCoins = ({item}) => (
    <Coins
      icon={{uri: item.image}}
      backgroundColor={item.backgroundColor}
      tintColor={item.tintColor}
      category={item.name}
      cash={item.symbol}
      onPress={() => handleDeposit(item)}
    />
  );
  return (
    <View style={styles.container}>
      <Header title={'Coins'} onPress={() => navigation.goBack()} />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'small'} color={Theme.orange} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={coinsData}
            renderItem={renderCoins}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      )}
      <TouchableWithoutFeedback
        onPress={() => setModalVisible(!modalVisible)}
        style={{flex: 1}}>
        <ReactNativeModal
          animationOut={'bounceOut'}
          animationIn={'bounceIn'}
          isVisible={modalVisible}
          transparent={true}
          onBackdropPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalRow}>
                <AntDesign name="close" size={20} color={Theme.white} />
                <Text style={styles.modalHeading}>
                  {'Receive ' + selectedCoin}
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.close}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.QRView}>
                <Image
                  resizeMode="cover"
                  style={styles.QRCode}
                  source={Images.QRAddress}
                />
              </View>
              <Text style={styles.walletText}>Wallet Address</Text>
              <Text style={styles.address}>{address}</Text>
              <TouchableOpacity
                onPress={copyToClipboard}
                style={styles.copyBtn}>
                <Text style={styles.copy}>Copy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ReactNativeModal>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CoinsDeposit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: '5%',
    backgroundColor: Theme.white,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeading: {
    color: Theme.black,
    fontSize: Theme.headingtext,
    fontWeight: 'bold',
  },
  close: {
    paddingHorizontal: 5,
  },
  QRView: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: '10%',
  },
  QRCode: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  walletText: {
    color: Theme.black,
    fontSize: Theme.normal,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  address: {
    color: Theme.black,
    fontSize: Theme.small,
    textAlign: 'center',
    marginVertical: '3%',
  },
  copyBtn: {
    backgroundColor: '#333333',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 20,
    marginVertical: '3%',
    borderRadius: 5,
    justifyContent: 'center',
  },
  copy: {
    color: Theme.white,
    fontSize: Theme.medium,
  },
});
