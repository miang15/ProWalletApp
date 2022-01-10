import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import {LineChart} from 'react-native-chart-kit';
import Button from '../components/Button';

const BuySell = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} rightIcon={Images.upload2} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.text1}>BTC Offered by Pepper</Text>
          <Text style={styles.heading}>Bitcoin (BTC)</Text>
          <Text style={styles.heading}>$805.33</Text>
          <Text style={styles.todayText}>$4.93 (0.62%) Today</Text>
          <View style={styles.chartView}>
            <LineChart
              style={{
                borderBottomWidth: 1,
                borderColor: Theme.border,
                marginVertical: '5%',
              }}
              data={{
                labels: ['1D', '1W', '1M', '3M', '1Y', '5Y', '10Y'],
                datasets: [
                  {
                    data: [0, 10, 5, 15, 0, 3, 3, 10, 5, 15, 20, 25],
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
                strokeWidth: 2, // optional, default 3
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
                navigation.navigate('Amount', {item: 'Buy'});
              }}
            />
            <Button
              onPress={() => {
                navigation.navigate('Amount', {item: 'Sell'});
              }}
              title={'Sell'}
              width={'48%'}
              backgroundColor={Theme.orange}
              borderColor={Theme.orange}
            />
          </View>
        </View>
      </ScrollView>
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
    marginHorizontal:'1%'
  },
});
