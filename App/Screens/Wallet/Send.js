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
import ReceiveComponent from '../../components/ReceiveComponent';
import SearchComponent from '../../components/SearchComponent';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

const Data = [
  {
    id: '1',
    icon: Icons.bitIcon,
    tintColor: Theme.green,
    category: 'BitCoin',
    bchPrice: '0 BTC',
  },
  {
    id: '2',
    icon: Images.ETH,
    tintColor: Theme.green,
    category: 'Ethrereum',
    bchPrice: '0 ETH',
  },
  {
    id: '3',
    icon: Images.coin,
    category: 'BNB',
    bchPrice: '0 BNB',
  },
  {
    id: '4',
    icon: Images.smartChain,
    category: 'Smart Chain',
    bchPrice: '0 BNB',
  },
  {
    id: '5',
    icon: Images.greenBit,
    category: 'BTC',
    bchPrice: '0 BCH',
  },
  {
    id: '6',
    icon: Images.liteCoin,
    category: 'LiteCoin',
    bchPrice: '0 LTC',
  },
  {
    id: '7',
    icon: Images.polygon,
    category: 'Polygon',
    bchPrice: '0 MATIC',
  },
];

const Send = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <ReceiveComponent
    onPress={() => navigation.navigate('Withdraw')}
      icon={item.icon}
      tintColor={item.tintColor}
      category={item.category}
      bchPrice={item.bchPrice}
    />
  );
  return (
    <View style={styles.container}>
      <SearchComponent onPress={() => navigation.goBack()} placeholder="Search - Send" />
      <FlatList
        contentContainerStyle={{marginTop: '2%'}}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
    justifyContent: 'center',
  },
});
