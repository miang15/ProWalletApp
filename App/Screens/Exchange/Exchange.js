import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import {LineChart} from 'react-native-chart-kit';
import Prices from '../../components/Prices';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDown from '../../components/DropDown';

const DATA = [
  {
    id: 1,
    price: '0.000082',
    amount: '25079',
  },
  {
    id: 2,
    price: '0.000081',
    amount: '4991',
  },
  {
    id: 3,
    price: '0.000080',
    amount: '7411',
  },
  {
    id: 4,
    price: '0.000079',
    amount: '1820',
  },
  {
    id: 5,
    price: '0.000078',
    amount: '8649',
  },
  {
    id: 6,
    price: '0.000077',
    amount: '1546',
  },
  {
    id: 7,
    price: '0.000076',
    amount: '2251',
  },
];
const Exchange = ({navigation}) => {
  const [selected, setSelected] = useState(1);
  const [limitText, setLimitText] = useState('Limit Order');
  const [valueText, setValueText] = useState('0.00007861');
  const [headingText, setHeadingText] = useState('PEPE/BTC');
  const [list, setList] = useState([
    'PEPE/BTC',
    'BTC/BCH',
    'BCH/LTC',
    'LTC/PEPE',
  ]);
  const [list2, setList2] = useState(['One', 'Two', 'Three', 'Four']);
  const refRBSheet = useRef();
  const limitSheet = useRef();

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    setHeadingText(val);
  };

  const handleSelectedLimit = val => {
    limitSheet.current.close();
    setLimitText(val);
  };

  const renderPrices = ({item}) => (
    <Prices price={item.price} amount={item.amount} />
  );

  const renderBid = ({item}) => (
    <Prices
      price={item.price}
      priceColor={Theme.darkPink}
      amount={item.amount}
    />
  );
  return (
    <View style={styles.continer}>
      <View style={styles.HeaderView}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backView}>
            <Image
              resizeMode="cover"
              style={styles.back}
              source={Icons.Leftarrow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.centerRow}>
            <Text style={styles.headerText}>{headingText}</Text>
            <TouchableOpacity style={styles.downView}>
              <Image
                resizeMode="cover"
                style={styles.down}
                source={Images.Down}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.tradeText}>Trade History</Text>
        </View>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={styles.btnStyle}>
            <Text
              style={{
                ...styles.btnText,
                color: selected === 1 ? Theme.darkPink : Theme.white,
              }}>
              Buy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={styles.btnStyle}>
            <Text
              style={{
                ...styles.btnText,
                color: selected === 2 ? Theme.darkPink : Theme.white,
              }}>
              Sell
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(3)}
            style={styles.innerRow}>
            <View style={styles.orderImgView}>
              <Image
                resizeMode="cover"
                style={{
                  ...styles.orderImg,
                  tintColor: selected === 3 ? Theme.darkPink : Theme.white,
                }}
                source={Images.orders}
              />
            </View>
            <Text
              style={{
                ...styles.btnText,
                color: selected === 3 ? Theme.darkPink : Theme.white,
              }}>
              Open Orders
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.rowView}>
            <View style={{width: '48%', overflow: 'hidden'}}>
              <TouchableOpacity
                onPress={() => limitSheet.current.open()}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.limitText}>{limitText}</Text>
                <TouchableOpacity
                  onPress={() => limitSheet.current.open()}
                  style={styles.downView}>
                  <Image
                    resizeMode="cover"
                    style={styles.down}
                    source={Images.Down}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: '3%',
                }}>
                <TouchableOpacity
                  onPress={() => setValueText(Number(valueText) - 0.001)}
                  style={{...styles.symbolView, justifyContent: 'center'}}>
                  <Image
                    resizeMode="cover"
                    style={{...styles.symbol, height: '20%'}}
                    source={Images.minus}
                  />
                </TouchableOpacity>
                <Text
                  numberOfLines={1}
                  style={{
                    ...styles.limitText,
                    width: '50%',
                    marginHorizontal: '5%',
                  }}>
                  {valueText}
                </Text>
                <TouchableOpacity
                  onPress={() => setValueText(Number(valueText) + 0.001)}
                  style={styles.symbolView}>
                  <Image
                    resizeMode="cover"
                    style={styles.symbol}
                    source={Images.plus}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{...styles.limitText, marginVertical: '2%'}}>
                Equivalent $1.08
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: '3%',
                  paddingHorizontal: 3,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity style={styles.percentageBtn}>
                  <Text style={styles.percentage}>25%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.percentageBtn}>
                  <Text style={styles.percentage}>50%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.percentageBtn}>
                  <Text style={styles.percentage}>75%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.percentageBtn}>
                  <Text style={styles.percentage}>100%</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.totalView}>
                <Text style={styles.total}>Total(BTC)</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: '3%',
                }}>
                <Text style={styles.available}>Avbl</Text>
                <Text style={styles.available}>0.00041147BTC</Text>
              </View>
              <Button
                title={'Buy'}
                top={'10%'}
                bottom={'10%'}
                paddingVertical={6}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: '3%',
                }}>
                <View style={styles.circle} />
                <Text style={styles.BidText}>Bid</Text>
                <View
                  style={{...styles.circle, backgroundColor: Theme.green}}
                />
                <Text style={styles.BidText}>Ask</Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <LineChart
                  data={{
                    labels: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                    ],
                    datasets: [
                      {
                        data: [20, 45, 28, 80, 99, 43],
                      },
                    ],
                  }}
                  width={200}
                  height={80}
                  withInnerLines={false}
                  withOuterLines={false}
                  withVerticalLabels={false}
                  withHorizontalLabels={false}
                  verticalLabelRotation={30}
                  chartConfig={{
                    backgroundGradientFrom: '#1E2923',
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: '#08130D',
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    strokeWidth: 2,
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false,
                  }}
                  bezier={true}
                />
              </View>
            </View>
            <View style={{width: '48%', overflow: 'hidden'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{...styles.limitText, fontSize: 13}}>
                  Price(BTC)
                </Text>
                <Text style={{...styles.limitText, fontSize: 13}}>
                  Amount(PEPE)
                </Text>
              </View>
              <FlatList
                style={{flexGrow: 0}}
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderPrices}
                keyExtractor={item => item.id}
              />
              <Image style={styles.dottedLine} source={Images.yellowLine} />
              <Text style={styles.totalText}>0.00007500 $1.03</Text>
              <Image style={styles.dottedLine} source={Images.yellowLine} />
              <FlatList
                style={{flexGrow: 0}}
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderBid}
                keyExtractor={item => item.id}
              />
              <View style={styles.bottomRow}>
                <TouchableOpacity style={styles.rowItem}>
                  <Text style={styles.decimalText}>6 Decimal</Text>
                  <TouchableOpacity
                    style={{...styles.downView, width: 15, height: 15}}>
                    <Image
                      resizeMode="cover"
                      style={styles.down}
                      source={Images.Down}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowItem}>
                  <Text style={styles.decimalText}>Default</Text>
                  <TouchableOpacity
                    style={{...styles.downView, width: 15, height: 15}}>
                    <Image
                      resizeMode="cover"
                      style={styles.down}
                      source={Images.Down}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
      <RBSheet
        ref={limitSheet}
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
        <DropDown list={list2} selectedItem={val => handleSelectedLimit(val)} />
      </RBSheet>
    </View>
  );
};

export default Exchange;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    margin: '3%',
  },
  HeaderView: {
    backgroundColor: Theme.darkGrey,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  backView: {
    width: 30,
    height: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  back: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  centerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: Theme.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  downView: {
    width: 20,
    height: 20,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: '3%',
  },
  down: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  tradeText: {
    color: Theme.textGrey,
    fontSize: 14,
  },
  btnStyle: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  btnText: {
    color: Theme.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderImgView: {
    width: 17,
    height: 19,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  orderImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '2%',
  },
  limitText: {
    color: Theme.white,
  },
  symbolView: {
    width: 30,
    height: 30,
    backgroundColor: Theme.ThreeD,
    padding: 5,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 4,
  },
  symbol: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  percentageBtn: {
    borderWidth: 0.5,
    borderColor: Theme.border,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  percentage: {
    color: Theme.textGrey,
    fontSize: 10,
  },
  totalView: {
    backgroundColor: Theme.darkGrey,
    paddingVertical: 8,
    marginVertical: '5%',
    borderRadius: 5,
  },
  total: {
    color: Theme.textGrey,
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.6,
  },
  available: {
    color: Theme.white,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: Theme.darkPink,
  },
  BidText: {
    color: Theme.white,
    marginLeft: '3%',
    marginRight: '10%',
  },
  dottedLine: {
    width: '100%',
    height: 1.5,
    marginVertical: '5%',
  },
  totalText: {
    color: Theme.green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  decimalText: {
    color: Theme.white,
    fontSize: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.darkGrey,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
