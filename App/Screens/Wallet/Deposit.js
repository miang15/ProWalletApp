import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import {useNavigation} from '@react-navigation/core';
import Clipboard from '@react-native-community/clipboard';

const Deposit = () => {
  const navigation = useNavigation();
  const [description, setDescription] = useState(
    'Only deposit BTC to this address, if a deposit is below the required minimum amount, the funds will not be credited to your account',
  );
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString(description);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Share this Text',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity");
        } else {
          console.log("Shared")
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Dismissed")
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.topRowView}>
            <Text style={styles.heading}>Deposit</Text>
            <TouchableOpacity style={styles.refreshImgView}>
              <Image
                resizeMode="cover"
                style={styles.refreshImg}
                source={Images.refresh}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.QRView}>
            <Image
              resizeMode="cover"
              style={styles.QRimg}
              source={Images.QRCode}
            />
          </View>
          <Text style={styles.QRtext}>TRXW8YQDCYP866YJ6RDFGMK7YGMY2PRBX7P</Text>
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
          <Text style={styles.description}>{description}</Text>
          <View style={styles.bottomRow}>
            <TouchableOpacity
              style={styles.copyBtn}
              activeOpacity="0.6"
              onPress={copyToClipboard}>
              <Text style={styles.btnText}>Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.copyBtn}
              activeOpacity="0.6"
              onPress={onShare}>
              <Text style={styles.btnText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Deposit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    marginVertical: '5%',
    padding: 20,
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
  QRView: {
    width: 170,
    height: 170,
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '12%',
    marginBottom: '5%',
    borderRadius: 8,
  },
  QRimg: {
    width: '100%',
    height: '100%',
  },
  QRtext: {
    color: Theme.whiteText,
    textAlign: 'center',
  },
  BitcoinRowView: {
    flexDirection: 'row',
    marginTop: '15%',
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
  description: {
    color: Theme.text,
    lineHeight: 20,
    textAlign: 'justify',
    marginVertical: '5%',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%',
  },
  copyBtn: {
    borderWidth: 1,
    borderColor: Theme.white,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: '5%',
  },
  btnText: {
    color: Theme.white,
    textAlign: 'center',
  },
});
