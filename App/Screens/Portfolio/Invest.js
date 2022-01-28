import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PortfolioComponent from '../../components/PortfolioComponent';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Feather from 'react-native-vector-icons/Feather';
import PayButton from '../../components/PayButton';
import { coinCharge, coinPrices } from '../../Services/Apis';
const Data = [
  {
    id: '1',
    icon: Icons.bitIcon,
    backgroundColor: '#453217',
    category: 'Bitcoin',
    cash: 'BTC',
    bchDigit: '0.008BTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$2,159.10',
    cashPrice: '15.31B',
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
    bchPrice: '$34,525.49',
    cashPrice: '21.58B',
  },
  {
    id: '3',
    icon: Images.liteCoin,
    backgroundColor: '#1E2733',
    category: 'Litecoin',
    cash: 'LTC',
    bchDigit: '20.00 LTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$137.41',
    cashPrice: '1.304B',
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
    bchPrice: '$3,400',
    cashPrice: '1.304B',
  },
  {
    id: '5',
    bchPrice: '$50,123',
    cashPrice: '$50,123',
    icon: Images.Doge,
    backgroundColor: '#202832',
    category: 'Dogecoin',
    cash: 'DOGE',
    bchDigit: '10,000 DOGE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$2,159.10',
    cashPrice: '15.31B',
  },
  {
    id: '6',
    icon: Images.Doge,
    backgroundColor: '#202832',
    category: 'Pepper Token',
    cash: 'PEPE',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$34,525.49',
    cashPrice: '21.58B',
  },
  {
    id: '7',
    icon: Icons.bitIcon,
    backgroundColor: '#453217',
    category: 'Bitcoin',
    cash: 'BTC',
    bchDigit: '0.008BTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$137.41',
    cashPrice: '1.304B',
  },
  {
    id: '8',
    backgroundColor: '#454545',
    icon: Images.ETH,
    tintColor: Theme.white,
    category: 'Ethereum',
    cash: 'ETH',
    bchDigit: '30.00 ETH',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$3,400',
    cashPrice: '1.304B',
  },
  {
    id: '9',
    icon: Images.Doge,
    backgroundColor: '#202832',
    category: 'Pepper Token',
    cash: 'PEPE',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$34,525.49',
    cashPrice: '21.58B',
  },
  {
    id: '10',
    icon: Icons.bitIcon,
    backgroundColor: '#453217',
    category: 'Bitcoin',
    cash: 'BTC',
    bchDigit: '0.008BTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$137.41',
    cashPrice: '1.304B',
  },
  {
    id: '11',
    backgroundColor: '#454545',
    icon: Images.ETH,
    tintColor: Theme.white,
    category: 'Ethereum',
    cash: 'ETH',
    bchDigit: '30.00 ETH',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$3,400',
    cashPrice: '1.304B',
  },
];

const Invest = ({navigation}) => {
  const [searchedItem, setSearchedItem] = useState('');
  const [coinsData, setCoinsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    coinPrices().then(({data}) => {
      console.log("COIN DATA: ",data?.result);
      setCoinsData(data?.result)
      setLoading(false)
    }).catch((e) => {
      console.log("Error: ",e);
      setLoading(false)
    })
  },[])

  const handleCoinPress = () => {
    coinCharge().then(({data}) => {
      console.log("RES: ",data);
      Alert.alert("Charge Api Run");
    }).catch((e) => {
      console.log("Error: ",e);
      Alert.alert("Charge Api Error")
    })
  }

  const renderItem = ({item, index}) => {
    if (searchedItem) {
      if (item.category.toLocaleLowerCase().includes(searchedItem.toLocaleLowerCase()) ) {
        return (
          <PortfolioComponent
            indexNum={index + 1}
            onPress={handleCoinPress}
            // onPress={() => navigation.navigate('BuySell', {coinData: item})}
            backgroundColor={item.backgroundColor}
            tintColor={item?.tintColor}
            icon={{uri: item.image}}
            category={item.name}
            cash={item.symbol}
            bchDigit={item.bchDigit}
            bchPrice={"$" + item.high_24h}
            cashPrice={item.low_24h}
            priceColor={Theme.green}
            underLine={true}
            chart={true}
          />
        );
      }
    } else {
      return (
        <PortfolioComponent
          indexNum={index + 1}
          onPress={handleCoinPress}
          // onPress={() => navigation.navigate('BuySell', {coinData: item})}
          backgroundColor={item.backgroundColor}
          tintColor={item?.tintColor}
          icon={{uri: item.image}}
          category={item.name}
          cash={item.symbol}
          bchDigit={item.bchDigit}
          bchPrice={"$" + item.high_24h}
          cashPrice={item.low_24h}
          priceColor={Theme.green}
          underLine={true}
          chart={true}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
      <Text style={styles.heading}>Track and Invest</Text>
      <PayButton onPress={() => navigation.navigate("PayAmount")} />
      </View>
      <View style={styles.searchRow}>
        <TouchableOpacity >
        <Feather name="search" size={24} color={Theme.textGrey} />
        </TouchableOpacity>
        <TextInput
          value={searchedItem}
          onChangeText={setSearchedItem}
          style={styles.input}
          placeholder="Search coins"
          placeholderTextColor={Theme.whiteText}
        />
      </View>
      <Text style={styles.subHeading}>Invest</Text>
    { loading ? <View style={{flex:1, justifyContent:"center"}}>
      <ActivityIndicator size={"small"} color={Theme.orange} />
    </View> 
    :
      <FlatList
        data={coinsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> }
    </View>
  );
};

export default Invest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  heading: {
    color: Theme.white,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: Theme.border,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: '3%',
    overflow: 'hidden',
    marginBottom: '3%',
  },
  input: {
    width: '95%',
    height: 40,
    color: Theme.white,
    textAlign: 'center',
  },
  subHeading: {
    color: Theme.orange,
    marginHorizontal: '3%',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: '3%',
  },
  topRow: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-between',
    marginVertical: '5%',
    marginHorizontal:"3%"
  }
});
