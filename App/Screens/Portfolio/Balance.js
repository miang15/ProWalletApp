import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import PortfolioComponent from '../../components/PortfolioComponent';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import {chargeBank, coinPrices} from '../../Services/Apis';

const Data = [
  {
    id: '1',
    icon: Icons.bitIcon,
    backgroundColor: '#453217',
    category: 'Bitcoin',
    cash: 'BTC',
    bchDigit: '0.002 BTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$50,123',
    cashPrice: '+0.18%',
  },
  {
    id: '2',
    backgroundColor: '#454545',
    icon: Images.ETH,
    tintColor: Theme.white,
    category: 'Ethereum',
    cash: 'ETH',
    bchDigit: '30.00 ETH',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$3,400',
    cashPrice: '-0.18%',
  },
  {
    id: '3',
    icon: Images.liteCoin,
    backgroundColor: '#1E2733',
    category: 'Litecoin',
    cash: 'LTC',
    bchDigit: '20.00 LTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$180,00',
    cashPrice: '+0.91%',
  },
  {
    id: '4',
    backgroundColor: Theme.darkGrey,
    icon: Images.greenBit,
    backgroundColor: '#202832',
    category: 'Bitcoin Cash',
    cash: 'BCH',
    bchDigit: '4.00 BCH',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$700.00',
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
    bchPrice: '$0.24',
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
    bchPrice: '$0.0005',
    cashPrice: '-0.9175',
  },
];

const Balance = ({navigation}) => {
  const [coinsData, setCoinsData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const handleBankDeposit = () => {
    const data = {
      currency: `NGN`,
      network: 'bank',
      account_bank: '044',
      amount: '200',
      email: 'xyz@gmail.com',
      phone_number: '123321123',
      fullname: 'mian nouman',
      type: 'debit_ng_account',
      account_number: '0690000037',
    };

    chargeBank(data)
      .then(({data}) => {
        if (data?.result?.status == 'success') {
          Alert.alert('Success!', 'Bank Charged Successfully', [
            {text: 'Ok', onPress: () => navigation.goBack()},
          ]);
        } else {
          Alert.alert('Something went wrong');
        }
        console.log('RES: ', data?.result);
      })
      .catch(e => {
        console.log('Error ', e);
      });
  };

  const renderItem = ({item, index}) => (
    <PortfolioComponent
      onPress={handleBankDeposit}
      // onPress={() => navigation.navigate('BuySell', {coinData: item.id})}
      backgroundColor={item.backgroundColor}
      tintColor={item?.tintColor}
      icon={{uri: item.image}}
      category={item.name}
      cash={item.symbol}
      bchDigit={item.current_price}
      bchPrice={'$' + item.high_24h}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Balance</Text>
      <Text style={styles.balance}>$292,339.64</Text>
      <View style={styles.changeProfitBg}>
        <View style={styles.changeBg}>
          <Text style={styles.time}>24H Change</Text>
          <TouchableOpacity style={styles.iconChangeBg}>
            <View style={styles.iconView}>
              <Image
                style={styles.icon}
                source={Icons.downBold}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.changeText}>6,376.79(-2.13%)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.changeBg}>
          <Text style={styles.time}>Profit</Text>
          <TouchableOpacity style={styles.iconChangeBg}>
            <View style={styles.iconView}>
              <Image
                style={{...styles.icon, tintColor: Theme.green}}
                source={Icons.upBold}
                resizeMode="contain"
              />
            </View>
            <Text style={{...styles.changeText, color: Theme.green}}>
              292,294.64
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuBg}>
        <View style={styles.iconTextBg}>
          <Text style={styles.menu}>Coins</Text>
        </View>
        <View style={styles.iconTextBg}>
          <Text style={styles.menu}>Holdings</Text>
        </View>
        <View style={styles.iconTextBg}>
          <Text style={styles.menu}>Price</Text>
        </View>
      </View>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'small'} color={Theme.orange} />
        </View>
      ) : (
        <FlatList
          data={coinsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
    paddingHorizontal: '3%',
  },
  headingText: {
    color: Theme.white,
    textAlign: 'center',
    fontSize: Theme.headingtext,
    fontWeight: 'bold',
    marginTop: '10%',
  },
  balance: {
    color: Theme.orange,
    textAlign: 'center',
    fontSize: Theme.heading,
    fontFamily: Theme.fontFamily,
    backgroundColor: Theme.darkGrey,
    fontWeight: 'bold',
    marginTop: '10%',
    paddingVertical: 3,
    marginHorizontal: '3%',
    borderRadius: 8,
  },
  changeProfitBg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: '10%',
  },
  changeBg: {
    flexDirection: 'column',
  },
  time: {
    color: Theme.text,
    fontSize: Theme.medium,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: '2%',
  },
  iconChangeBg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '3%',
  },
  iconView: {
    width: 10,
    height: 10,
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: '5%',
  },
  icon: {
    width: '100%',
    height: '100%',
    tintColor: Theme.orange,
  },
  changeText: {
    color: Theme.orange,
    fontSize: Theme.medium,
    fontWeight: 'bold',
  },
  divider: {
    width: 1,
    height: 35,
    backgroundColor: Theme.text,
  },
  graphBg: {
    width: 250,
    height: 150,
    backgroundColor: Theme.text,
    width: '100%',
    paddingVertical: '7%',
    borderRadius: 10,
  },
  graph: {
    width: '100%',
    height: '100%',
  },
  menuBg: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 8,
    marginBottom: '5%',
    paddingHorizontal: '5%',
    paddingLeft: '8%',
  },
  iconTextBg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    color: Theme.white,
    fontFamily: Theme.fontFamily,
  },
});
