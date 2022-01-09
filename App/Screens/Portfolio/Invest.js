import React from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import PortfolioComponent from '../../components/PortfolioComponent';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Feather from 'react-native-vector-icons/Feather';
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
];

const Invest = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <PortfolioComponent
    indexNum={index + 1}
      onPress={() => navigation.navigate('BuySell')}
      backgroundColor={item.backgroundColor}
      tintColor={item?.tintColor}
      icon={item.icon}
      category={item.category}
      cash={item.cash}
      bchDigit={item.bchDigit}
      bchPrice={item.bchPrice}
      cashPrice={item.cashPrice}
      priceColor={Theme.green}
      underLine={true}
      chart={true}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Track and Invest</Text>
      <View style={styles.searchRow}>
        <Feather name="search" size={24} color={Theme.textGrey} />
        <TextInput
          style={styles.input}
          placeholder="Search coins"
          placeholderTextColor={Theme.whiteText}
        />
      </View>
      <Text style={styles.subHeading}>Invest</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
    marginTop: '10%',
    marginBottom: '5%',
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
      color:Theme.orange,
      marginHorizontal:"3%",
      fontSize:30,
      fontWeight:"bold",
      marginVertical:"3%"
  }
});
