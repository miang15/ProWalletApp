import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import ConfirmationComponent from '../../components/ConfirmationComponent';
import Header from '../../components/Header';
import Theme from '../../utils/Theme';

const DATA = [
  {
    id: 1,
    label: 'Cash to Receive',
    value: 'PHP 183.95',
  },
  {
    id: 2,
    label: 'Transfer Fee',
    value: 'PHP 10',
  },
  {
    id: 3,
    label: 'Fee',
    value: 'CELO 0.03',
    description: 'The mining fee will be deducted from final amount',
  },
  {
    id: 4,
    label: 'Earned Loyality Points',
    value: '62.47',
  },
  {
    id: 5,
    label: 'Total Payable',
    value: 'CELO 1',
  },
];
const Confirmation = ({navigation}) => {
  const renderConfirmation = ({item}) => (
    <ConfirmationComponent
      labelText={item.label}
      valueText={item.value}
      descriptionText={item.description}
    />
  );
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title={'Confirmation'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderConfirmation}
        keyExtractor={item => item.id}
      />
          <View style={styles.bottomView}>
            <Text style={styles.limitText}>Daily Limit: SGD 3,000</Text>
            <Text style={styles.limitText}>
              Remaining Daily Limit: SGD 3,000
            </Text>
          </View>
        </View>
        <Button onPress={() => navigation.navigate("ExchangeSuccess")} title={'Exchange'} horizontal={'3%'} top={'5%'} />
      </ScrollView>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    margin: '3%',
    backgroundColor: Theme.darkRow,
    borderRadius: 5,
  },
  bottomView: {
    backgroundColor: '#252525',
    marginHorizontal: '3%',
    marginTop: '6%',
    marginBottom: '10%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  limitText: {
    color: Theme.textGrey,
    textAlign: 'center',
  },
});
