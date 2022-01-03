import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';
import HistoryComponent from '../../components/HistoryComponent';
import {useNavigation} from '@react-navigation/core';
import Header from '../../components/Header';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDown from '../../components/DropDown';

const DATA = [
  {
    id: '1',
    status: 'Completed',
    btc: '0.1250041',
    date: '12/12/2021',
    price: '20.54',
    address: 'KX2929XKLKDF92KALKDFKD29LADK92LKJDFK',
    fee: '-0.05468',
    amount: '-2.25468',
    trxID: 'akd2lkadk9lkqe9kadkf',
  },
  {
    id: '2',
    status: 'Completed',
    btc: '0.1250041',
    date: '12/12/2021',
    price: '20.54',
    address: 'KX2929XKLKDF92KALKDFKD29LADK92LKJDFK',
    fee: '-0.05468',
    amount: '-2.25468',
    trxID: 'akd2lkadk9lkqe9kadkf',
  },
  {
    id: '3',
    status: 'Pending',
    btc: '0.1250041',
    date: '12/12/2021',
    price: '20.54',
    address: 'KX2929XKLKDF92KALKDFKD29LADK92LKJDFK',
    fee: '-0.05468',
    amount: '-2.25468',
    trxID: 'akd2lkadk9lkqe9kadkf',
  },
  {
    id: '4',
    status: 'Completed',
    btc: '0.1250041',
    date: '12/12/2021',
    price: '20.54',
    address: 'KX2929XKLKDF92KALKDFKD29LADK92LKJDFK',
    fee: '-0.05468',
    amount: '-2.25468',
    trxID: 'akd2lkadk9lkqe9kadkf',
  },
];
const TransactionHistory = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState('This Week');
  const [list, setList] = useState([
    'This Week',
    'Past 3 Days',
    'Past Week',
    'Last Month',
    'All',
  ]);
  const refRBSheet = useRef();

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    setFilter(val);
  };

  const renderItem = ({item, index}) => (
    <HistoryComponent
      status={item.status}
      btc={item.btc}
      date={item.date}
      price={item.price}
      address={item.address}
      fee={item.fee}
      amount={item.amount}
      trxID={item.trxID}
    />
  );
  return (
    <View style={styles.container}>
      <Header title="Transaction History" onPress={() => navigation.goBack()} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: '7%',
        }}>
        <Text style={{...styles.text, textAlign: 'left'}}>History</Text>
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...styles.text, fontSize: Theme.medium}}>{filter}</Text>
          <TouchableOpacity>
            <Image source={Icons.Down} style={styles.down} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Theme.black,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    color: Theme.white,
    fontSize: Theme.title,
    fontWeight: '600',
  },
  down: {
    height: 12,
    width: 12,
    marginRight: 5,
    marginLeft: 10,
    // alignSelf:'center',
  },
  status: {
    fontSize: Theme.medium,
    color: Theme.white,
    fontWeight: 'normal',
  },
  date: {
    fontSize: Theme.small,
    color: Theme.white,
    fontWeight: 'normal',
  },
});
