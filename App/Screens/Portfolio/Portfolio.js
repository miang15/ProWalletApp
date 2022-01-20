import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import BalanceComponent from '../../components/BalanceComponent';
import PortfolioComponent from '../../components/PortfolioComponent';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
const Data = [
  {
    id: '1',
    icon: Icons.bitIcon,
    backgroundColor: "#453217",
    category: 'Bitcoin',
    cash: 'BTC',
    bchDigit: '0.008BTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$50,123',
    cashPrice: '$50,123',
  },
  {
    id: '2',
    backgroundColor: "#454545",
    icon: Images.ETH,
    tintColor:Theme.white,
    category: 'Ethereum',
    cash: 'ETH',
    bchDigit: '30.00 ETH',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$50,123',
    cashPrice: '$50,123',
  },
  {
    id: '3',
    icon: Images.liteCoin,
    backgroundColor: "#1E2733",
    category: 'Litecoin',
    cash: 'LTC',
    bchDigit: '20.00 LTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$50,123',
    cashPrice: '$50,123',
  },
  {
    id: '4',
    backgroundColor: Theme.darkGrey,
    icon: Images.greenBit,
    backgroundColor: "#202832",
    category: 'Bitcoin Cash',
    cash: 'BCH',
    bchDigit: '4.00 BCH',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$50,123',
    cashPrice: '$50,123',
  },
  {
    id: '5',bchPrice: '$50,123',
    cashPrice: '$50,123',
    icon: Images.Doge,
    backgroundColor: "#202832",
    category: 'Dogecoin',
    cash: 'DOGE',
    bchDigit: '10,000 DOGE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$50,123',
    cashPrice: '$50,123',
  },
  {
    id: '6',
    icon: Images.Doge,
    backgroundColor: "#202832",
    category: 'Pepper Token',
    cash: 'PEPE',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$50,123',
    cashPrice: '$50,123',
  },

];
const Portfolio = ({navigation}) => {
  const renderItem = ({item, index}) => (

    <PortfolioComponent
      onPress={() => navigation.navigate('BuySell', {coinData: item})}
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
    />

  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Portfolio Value</Text>
      <Text style={styles.value}>$292,339.64</Text>
      <Text style={styles.text1}>+$986.51 (3.56%)</Text>
      <Text style={styles.text2}>Fiat Balances</Text>
      <View style={styles.rowView}>
        <View style={styles.textRow}>
          <Text style={styles.dollar} >$</Text>
          <Text style={styles.text3}>US Dollar</Text>
          <Text style={styles.text4}>USD</Text>
        </View>
        <Text style={styles.text5}>$5000</Text>
      </View>
      <Text style={styles.crypto}>Crypto Balances</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
    paddingHorizontal: '3%',
  },
  heading: {
    color:Theme.white,
    fontSize:18,
    fontWeight:"bold",
    marginTop:"15%",
    marginHorizontal:"2%"
  },
  value: {
    color:Theme.orange,
    fontSize:30,
    fontWeight:'bold',
    marginVertical:"1%",
    marginHorizontal:"2%"
  },
  text1: {
    color:Theme.green,
    fontSize:Theme.normal,
    marginHorizontal:"2%"
  },
  text2: {
    color:Theme.textGrey,
    fontSize:Theme.normal,
    marginTop:'5%',
    marginBottom:"3%",
    marginHorizontal:"2%"
  },
  underline: {
    borderWidth:0.3,
    borderColor:Theme.border,
    marginHorizontal:"2%"
  },
  rowView: {
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between",
    marginHorizontal:"2%",
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    paddingVertical:8,
    borderColor:Theme.border
  },
  textRow: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  dollar: {
    color:Theme.white,
    fontSize:18,
    backgroundColor:Theme.darkGrey,
    paddingVertical:3,
    paddingHorizontal:10,
    borderRadius:20
  },
  text3: {
    color:Theme.white,
    fontSize:Theme.normal,
    fontWeight:'bold',
    marginHorizontal:'2%'
  },
  text4: {
    color:Theme.textGrey,
    fontSize:Theme.normal
  },
  text5: {
    color:Theme.orange,
    fontSize:Theme.normal,
    fontWeight:'bold'
  },
  crypto: {
    color:Theme.textGrey,
    fontSize:Theme.normal,
    borderBottomWidth:0.5,
    borderColor:Theme.border,
    paddingVertical:12,
    marginHorizontal:"2%"
  }
});
