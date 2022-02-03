import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';

const HistoryComponent = ({
  status,
  btc,
  date,
  price,
  address,
  fee,
  amount,
  trxID,
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headingBg}>
          <View style={styles.statusBtcBg}>
            <Text style={styles.boldText}>Status : </Text>
            <Text
              style={{
                ...styles.boldText,
                color: status === 'Pending' ? Theme.pink : Theme.green,
              }}>
              {status}
            </Text>
          </View>
          <Text style={{...styles.boldText, color: Theme.golden}}>
            BTC {btc}
          </Text>
        </View>
        <View style={styles.datePriceBg}>
          <Text style={styles.date}>{date}</Text>
          <Text style={{...styles.date, color: Theme.white}}>$ {price}</Text>
        </View>
        {!show && (
          <TouchableOpacity
            activeOpacity="0.6"
            onPress={() => {
              setShow(true);
            }}>
            <Image
              style={{
                ...styles.downIcon,
                alignSelf: 'flex-end',
                marginTop: '5%',
              }}
              source={Icons.Down}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>

      {show && (
        <View style={styles.expandBg}>
          <Text style={styles.boldText}>Sent Address</Text>
          <Text style={styles.date}>{address}</Text>
          <View style={styles.feeAmountBg}>
            <Text style={styles.boldText}>Fee</Text>
            <Text style={styles.boldText}>Amount</Text>
          </View>
          <View style={styles.feeAmountBg}>
            <Text style={styles.boldText}>{fee}</Text>
            <Text style={styles.boldText}>{amount}</Text>
          </View>
          <Text style={{...styles.boldText, marginTop: '3%'}}>TRX ID:</Text>
          <View style={styles.taxIconBg}>
            <Text style={styles.date}>{trxID}</Text>
            <TouchableOpacity
              activeOpacity="0.6"
              onPress={() => setShow(false)}>
              <Image
                style={styles.downIcon}
                source={Icons.above}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Theme.grey,
    paddingBottom: '5%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: '5%',
  },

  container: {
    paddingTop: '5%',
    paddingHorizontal: '4%',
  },
  headingBg: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBtcBg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    color: Theme.white,
    fontSize: Theme.medium,
    fontWeight: 'bold',
  },
  expandBg: {
    marginTop: '3%',
    paddingHorizontal: '4%',
    borderTopWidth: 1,
    borderTopColor: Theme.border,
    paddingTop: '2%',
  },
  datePriceBg: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },
  date: {
    color: Theme.whiteText,
    fontSize: Theme.small,
    fontWeight: 'bold',
  },
  expandContainer: {
    backgroundColor: 'red',
    width: '100%',
  },
  feeAmountBg: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    marginTop: '2%',
  },
  taxIconBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  downIcon: {
    width: 12,
    height: 12,
    tintColor: Theme.white,
  },
});
export default HistoryComponent;
