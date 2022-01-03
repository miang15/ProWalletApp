import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

const Withdraw = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.topRowView}>
            <Text style={styles.heading}>Withdraw</Text>
            <TouchableOpacity style={styles.refreshImgView}>
              <Image
                resizeMode="cover"
                style={styles.refreshImg}
                source={Images.refresh}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.BitcoinRowView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.imgBackground}>
                <View style={styles.bitcoinImgView}>
                  <Image
                    resizeMode="cover"
                    style={styles.bitCoin}
                    source={Images.bitCoin}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.bitCoinValue}>0.0101626 BTC</Text>
                <Text style={styles.label}>Bitcoin</Text>
              </View>
            </View>
            <View style={styles.arrowView}>
              <Image
                resizeMode="cover"
                style={styles.arrowImg}
                source={Images.arrow}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>Receiver address</Text>
          <TouchableOpacity style={styles.middleRow}>
            <Text style={styles.QRtext}>
              TRXW8YQDCYP866YJ6RDFGMK7YGMY2PRBX7PTC
            </Text>
            <View style={styles.scannerView}>
              <Image
                resizeMode="cover"
                style={styles.scannerImg}
                source={Images.scanner}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>Enter reciever amount</Text>
          <View style={styles.middleRow}>
            <Text style={styles.QRtext}>0.01000000</Text>
          </View>
          <Text style={{...styles.bitCoinValue, marginTop: '8%'}}>
            Minimum without 0.001BTC
          </Text>
          <Text style={styles.description}>
            Make sure you’ve entered the right recevier address, the funds will
            not be recovered if transferred to another address.
          </Text>
          <View style={styles.bottomRow}>
            <View>
              <Text style={styles.amountLabel}>Receive amount</Text>
              <Text style={styles.amountLabel}>Network</Text>
            </View>
            <View>
              <Text style={styles.amount}>0.01000000</Text>
              <Text style={styles.amount}>1.02 USDT</Text>
            </View>
          </View>
          <Button title="Next" top="8%" width="100%" alignSelf="center" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    marginVertical: '5%',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  topRowView: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '65%',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  heading: {
    color: Theme.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  refreshImgView: {
    width: 20,
    height: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  refreshImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  BitcoinRowView: {
    flexDirection: 'row',
    marginTop: '5%',
    padding: 10,
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
    marginRight: '5%',
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
  arrowView: {
    width: 7,
    height: 14,
    overflow: 'hidden',
    alignItems: 'center',
  },
  arrowImg: {
    tintColor: Theme.textGrey,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  bitCoinValue: {
    color: Theme.white,
    fontWeight: 'bold',
  },
  label: {
    color: Theme.textGrey,
  },
  text: {
    color: Theme.text,
    fontSize: 15,
    marginTop: '5%',
    marginBottom: '3%',
  },
  middleRow: {
    flexDirection: 'row',
    backgroundColor: Theme.darkGrey,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  QRtext: {
    color: Theme.textGrey,
    width: '85%',
  },
  scannerView: {
    width: 20,
    height: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  scannerImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  description: {
    color: Theme.text,
    lineHeight: 20,
    textAlign: 'justify',
    marginVertical: '2%',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '3%',
  },
  amountLabel: {
    color: Theme.textGrey,
    marginBottom: '5%',
  },
  amount: {
    color: Theme.white,
    marginBottom: '5%',
    textAlign: 'right',
  },
});
