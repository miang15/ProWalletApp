import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import {LineChart} from 'react-native-chart-kit';
import Button from '../components/Button';
import {useRoute} from '@react-navigation/native';
import {coin, coinChart} from '../Services/Apis';

const BuySell = ({navigation}) => {
  const route = useRoute();
  const coinId = route?.params?.coinData;
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState('');
  const [chartValue, setChartValue] = useState('');

  const handleCoin = () => {
    coin(coinId)
      .then(({data}) => {
        setCoinData(data?.result);
      })
      .catch(e => {
        console.log('Error: ', e);
      });
    handleCoinChart();
  };

  const handleCoinChart = () => {
    coinChart(coinId, '1d')
      .then(({data}) => {
        let arr = [];
        data?.result?.market_caps.map(item => arr.push(item[1]));
        setChartValue(arr);
        setLoading(false);
      })
      .catch(e => {
        console.log('Error: ', e);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleCoin();
  }, []);

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} rightIcon={Images.upload2} />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'small'} color={Theme.orange} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.text1}>
              {coinData?.symbol + ' Offered by Pepper'}
            </Text>
            <Text style={styles.heading}>
              {coinData?.name + ' (' + coinData?.symbol + ')'}
            </Text>
            <Text style={styles.heading}>{'$' + coinData?.current_price}</Text>
            <Text style={styles.todayText}>$4.93 (0.62%) Today</Text>
            <View style={styles.chartView}>
              <LineChart
                style={{
                  borderBottomWidth: 1,
                  borderColor: Theme.border,
                  marginVertical: '5%',
                  marginLeft: Theme.wp('-2%'),
                }}
                data={{
                  labels: ['1D', '1W', '1M', '3M', '1Y', '5Y', '10Y'],
                  datasets: [
                    {
                      data: chartValue,
                    },
                  ],
                }}
                width={420}
                height={200}
                withInnerLines={false}
                withOuterLines={false}
                withHorizontalLabels={false}
                withDots={false}
                chartConfig={{
                  backgroundGradientFrom: '#1E2923',
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientTo: '#08130D',
                  backgroundGradientToOpacity: 0.5,
                  color: (opacity = 1) => '#ff4f12',
                  labelColor: (opacity = 1) => '#7F8D81',
                  strokeWidth: 2,
                  barPercentage: 0.5,
                  useShadowColorFromDataset: false,
                }}
              />
            </View>
            <View style={styles.btnRow}>
              <Button
                title={'Buy'}
                width={'48%'}
                onPress={() => {
                  navigation.navigate('Amount', {
                    item: 'Buy',
                    coinData: coinData,
                  });
                }}
              />
              <Button
                onPress={() => {
                  navigation.navigate('Amount', {
                    item: 'Sell',
                    coinData: coinData,
                  });
                }}
                title={'Sell'}
                width={'48%'}
                backgroundColor={Theme.orange}
                borderColor={Theme.orange}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default BuySell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  text1: {
    color: Theme.textGrey,
    fontSize: Theme.normal,
    marginHorizontal: '3%',
    marginTop: '5%',
  },
  heading: {
    color: Theme.white,
    fontSize: Theme.heading,
    fontWeight: 'bold',
    marginHorizontal: '3%',
  },
  todayText: {
    color: Theme.yellowOrange,
    fontSize: Theme.medium,
    marginVertical: '5%',
    marginHorizontal: '3%',
  },
  btnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: '15%',
    marginHorizontal: '3%',
  },
  chartView: {
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: '1%',
  },
});
