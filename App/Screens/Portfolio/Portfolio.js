import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import PortfolioComponent from '../../components/PortfolioComponent';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import {LineChart} from 'react-native-chart-kit';

const Data = [
  {
    id: '1',
    icon: Icons.bitIcon,
    backgroundColor: "#453217",
    category: 'Bitcoin',
    cash: 'BTC',
    bchDigit: '0.002 BTC',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$50,123',
    cashPrice: '+0.18%',
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
    bchPrice: '$3,400',
    cashPrice: '-0.18%',
  },
  {
    id: '3',
    icon: Images.liteCoin,
    backgroundColor: "#1E2733",
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
    backgroundColor: "#202832",
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
    backgroundColor: "#202832",
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
    backgroundColor: "#202832",
    category: 'Pepper Token',
    cash: 'PEPE',
    bchDigit: '30,000 PEPE',
    cashDigit: '625,849.756ARDR',
    bchPrice: '$0.0005',
    cashPrice: '-0.9175',
  },
];

const Portfolio = () => {
  const renderItem = ({item, index}) => (
    <PortfolioComponent
      backgroundColor={item.backgroundColor}
      tintColor={item?.tintColor}
      icon={item.icon}
      category={item.category}
      cash={item.cash}
      bchDigit={item.bchDigit}
      // cashDigit={item.cashDigit}
      bchPrice={item.bchPrice}
      // cashPrice={item.cashPrice}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Jack’s Portfolio</Text>
      <Text style={styles.balance}>$292,339.64</Text>
      <View style={styles.changeProfitBg}>
        <View style={styles.changeBg}>
          <Text style={styles.time}>24H Change</Text>
          <TouchableOpacity style={styles.iconChangeBg}>
            <Image
              style={styles.icon}
              source={Icons.downBold}
              resizeMode="contain"
            />
            <Text style={styles.changeText}>6,376.79(-2.13%)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.changeBg}>
          <Text style={styles.time}>Profit</Text>
          <TouchableOpacity style={styles.iconChangeBg}>
            <Image
              style={{...styles.icon, tintColor: Theme.green}}
              source={Icons.upBold}
              resizeMode="contain"
            />
            <Text style={{...styles.changeText, color: Theme.green}}>
              292,294.64
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <LineChart
      style={{marginHorizontal:'3%'}}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={400}
        height={120}
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
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false,
        }}
        bezier={true}
      /> */}
      <View style={styles.menuBg}>
        <View style={styles.iconTextBg}>
          <Text style={styles.menu}>Coins</Text>
          {/* <View style={{marginLeft: '5%'}}>
            <TouchableOpacity>
              <Image
                style={{
                  ...styles.icon,
                  tintColor: Theme.white,
                }}
                source={Icons.upBold}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  ...styles.icon,
                  tintColor: Theme.white,
                }}
                source={Icons.downBold}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.iconTextBg}>
          <Text style={styles.menu}>Holdings</Text>
          {/* <View style={{marginLeft: '5%'}}>
            <TouchableOpacity>
              <Image
                style={{
                  ...styles.icon,
                  tintColor: Theme.white,
                }}
                source={Icons.upBold}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  ...styles.icon,
                  tintColor: Theme.white,
                }}
                source={Icons.downBold}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.iconTextBg}>
          <Text style={styles.menu}>Price</Text>
          {/* <View style={{marginLeft: '5%'}}>
            <TouchableOpacity>
              <Image
                style={{
                  ...styles.icon,
                  tintColor: Theme.white,
                }}
                source={Icons.upBold}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  ...styles.icon,
                  tintColor: Theme.white,
                }}
                source={Icons.downBold}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View> */}
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

export default Portfolio;

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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 8,
    marginBottom:"5%",
    paddingHorizontal: '5%',
    paddingLeft:"8%"
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
