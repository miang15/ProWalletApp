import React, {useState} from 'react';
import {
  FlatList,
  Image,
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
import Entypo from 'react-native-vector-icons/Entypo';
import Congratulations from '../../components/Congratulations';
import {useRoute} from '@react-navigation/native';

const Data = [
  {
    id: 1,
    num: 1,
  },
  {
    id: 2,
    num: 2,
  },
  {
    id: 3,
    num: 3,
  },
  {
    id: 4,
    num: 4,
  },
  {
    id: 5,
    num: 5,
  },
  {
    id: 6,
    num: 6,
  },
  {
    id: 7,
    num: 7,
  },
  {
    id: 8,
    num: 8,
  },
  {
    id: 9,
    num: 9,
  },
  {
    id: 10,
    num: '     ',
  },
  {
    id: 11,
    num: 0,
  },
  {
    id: 12,
    num: <Entypo name="erase" size={24} color={Theme.white} />,
  },
];

const Amount = ({navigation}) => {
  const route = useRoute();
  const [modal, setModal] = useState(false);
  const [sign, setSign] = useState('$');
  const [inputNum, setInputNum] = useState('');
  const [congrats, setCongrats] = useState(false);
  const trade = route?.params?.item;
  const coin = route?.params?.coinData;

  const [modalDATA, setModalData] = useState([
    {
      id: 1,
      label: coin.category + ' Amount',
      value: '0.172090',
    },
    {
      id: 2,
      label: coin.category + ' Rate',
      value: '$60,000',
    },
  ]);

  const handleNumInput = (item, index) => {
    if (index === 11) {
      let b = inputNum.slice(0, inputNum.length - 1);
      setInputNum(b);
    } else if (inputNum && inputNum !== '0') {
      let a = inputNum.toString().concat(item.toString());
      setInputNum(a);
    } else {
      setInputNum(item.toString());
    }
  };

  return (
    <View style={styles.container}>
        <Header
          onPress={() => navigation.goBack()}
          title={'Enter Amount'}
          // rightIcon={Images.upload2}
        />
          <Text numberOfLines={1} style={styles.textInput}>{sign + inputNum}</Text>

        <View style={{ position:'absolute', bottom:10, width:'100%'}}>
        <TouchableOpacity style={styles.BitcoinRowView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                ...styles.imgBackground,
                backgroundColor: coin.backgroundColor
                  ? coin.backgroundColor
                  : Theme.yellowOrange,
              }}>
              <View style={styles.bitcoinImgView}>
                <Image
                  resizeMode="contain"
                  style={{
                    ...styles.bitCoin,
                    tintColor: coin.tintColor ? coin.tintColor : null,
                  }}
                  source={coin.icon}
                />
              </View>
            </View>
            <View>
              <Text style={styles.bitCoinValue}>{coin?.category}</Text>
              <Text style={styles.label}>{coin?.cash}</Text>
            </View>
          </View>
          {/* <View style={styles.downarrowView}>
                <Image
                  resizeMode="contain"
                  style={styles.downarrowImg}
                  source={Images.arrow}
                />
              </View> */}
        </TouchableOpacity>
          <FlatList
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'space-around',
              marginBottom: '10%',
            }}
            style={{flexGrow: 0}}
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={({item, index}) => (
              <View>
                <TouchableOpacity
                  disabled={index === 9 ? true : false}
                  onPress={() => handleNumInput(item.num, index)}
                  style={styles.numBtn}>
                  <Text style={styles.numPad}>{item.num}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
          <Button
          horizontal={'3%'}
            onPress={() => setModal(true)}
            title={'Continue'}
            backgroundColor={Theme.orange}
            borderColor={Theme.orange}
          />
        </View>
      <Congratulations
        visible={congrats}
        setVisible={() => setCongrats(!congrats)}
        description={'Your ' + trade + ' has been completed successfully'}
      />
      <ConfirmTradeModal
        heading={'Confirm Trade'}
        DATA={modalDATA}
        show={modal}
        setShow={() => setModal(!modal)}
        onPress={() => {
          setModal(!modal), setCongrats(true);
        }}
        btnText={trade === 'Buy' ? 'Buy' : 'Sell'}
        btnBorder={trade === 'Buy' ? Theme.green : Theme.orange}
        btnBackground={trade === 'Buy' ? Theme.green : Theme.orange}
        equal={true}
      />
    </View>
  );
};

export default Amount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  textInput: {
    color: Theme.white,
    width: Theme.wp ('90%'),
    textAlign: 'center',
    fontSize: Theme.hp('5%'),
    fontWeight: 'bold',
    color: 'orange',
    alignSelf:"center",
    marginVertical:Theme.hp('5%')
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
    marginVertical: '10%',
    marginHorizontal:Theme.wp('3%'),
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
  numRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numBtn: {
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  numPad: {
    color: Theme.white,
    fontSize: Theme.hp('2.5%'),
    fontWeight: 'bold',
  },
});
