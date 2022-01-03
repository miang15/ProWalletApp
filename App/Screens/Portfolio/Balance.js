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
    bchDigit: '98,582,.84',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$104,00',
    cashPrice: '+0.18%',
  },
  {
    id: '2',
    backgroundColor: "#454545",
    icon: Images.ETH,
    tintColor:Theme.white,
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
    backgroundColor: "#1E2733",
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
    backgroundColor: "#202832",
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
    backgroundColor: "#202832",
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
    backgroundColor: "#202832",
    category: 'Pepper Token',
    cash: 'PEPE',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$204,00',
    cashPrice: '-0.9175',
  },

];
const Balance = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <BalanceComponent
      icon={item.icon}
      tintColor={item?.tintColor}
      category={item.category}
      cash={item.cash}
      backgroundColor={item.backgroundColor}
      bchPrice={item.bchPrice}
      cashPrice={item.cashPrice}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Jack’s Balance</Text>
      <Text style={styles.balance}>$292,339.64</Text>
      <View style={styles.changeProfitBg}>
        <View style={styles.changeBg}>
          <Text style={styles.time}>24H Change</Text>
          <View style={styles.iconChangeBg}>
            <Image
              style={styles.icon}
              source={Icons.downBold}
              resizeMode="contain"
            />
            <Text style={styles.changeText}>6,376.79(-2.13%)</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.changeBg}>
          <Text style={styles.time}>Profit</Text>
          <View style={styles.iconChangeBg}>
            <Image
              style={{...styles.icon, tintColor: Theme.green}}
              source={Icons.upBold}
              resizeMode="contain"
            />
            <Text style={{...styles.changeText, color: Theme.green}}>
              292,294.64
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.menuBg}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Send')}
          style={styles.menu}>
          <View style={styles.iconBg}>
            <Image
              style={styles.menuIcon}
              source={Icons.send}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.menuText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Receive')}
          style={styles.menu}>
          <View style={styles.iconBg}>
            <Image
              style={{...styles.menuIcon, width: 20, height: 20}}
              source={Icons.receiveIcon}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.menuText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <View style={styles.iconBg}>
            <Image
              style={styles.menuIcon}
              source={Icons.nft}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.menuText}>NFT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.menu}>
          <Image
              style={styles.Icon}
              source={Images.loan}
              resizeMode="contain"
            />
          <Text style={styles.menuText}>Loans</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.labelRow}>
        <Text style={styles.labelText}>Coin Rates</Text>
        <View style={styles.iconChangeBg}>
          <Text style={{...styles.changeText, color:Theme.white}}>Last 24h</Text>
            <Image
              style={{...styles.icon, tintColor:Theme.textGrey, marginRight:0, marginLeft:5}}
              source={Icons.downBold}
              resizeMode="contain"
            />
          </View>
      </View>

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
    fontSize: Theme.medium,
    fontWeight: 'bold',
    marginTop: '10%',
  },
  balance: {
    color: Theme.white,
    textAlign: 'center',
    fontSize: Theme.title,
    fontFamily: Theme.fontFamily,
    fontWeight: 'bold',
    marginTop: '10%',
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
  },
  icon: {
    width: 13,
    height: 13,
    tintColor: Theme.orange,
    marginRight: '5%',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '5%',
    alignSelf: 'center',
    paddingHorizontal: '3%',
  },
  menu: {
    flexDirection: 'column',
  },
  iconBg: {
    width: 45,
    height: 45,
    borderRadius: 50,
    padding: '5%',
    backgroundColor: Theme.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: Theme.white,
    fontSize: Theme.medium,
    alignSelf: 'center',
    marginTop: '5%',
    fontSize: Theme.medium,
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
  Icon: {
    width: 45,
    height: 45,
  },
  labelRow: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    margin:'3%',
    marginBottom:'5%'
  },
  labelText: {
    color:Theme.white,
    fontFamily:Theme.fontFamily
  }
});
