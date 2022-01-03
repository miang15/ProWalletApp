import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

const ExchangeSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={Images.check} />
          </View>
          <Text style={styles.text1}>
            Your rate will be guaranteed for the next 02.57 minutes
          </Text>
          <Text style={styles.text2}>
            Please transfer CELO 1 to the following CELO address
          </Text>
          <TouchableOpacity style={styles.copyRow}>
              <Text style={styles.copyText} numberOfLines={1}>0x72a526116597b53eee...</Text>
              <View style={styles.copyIconView}>
                  <Image style={styles.copyImg} source={Images.copyIcon} />
              </View>
          </TouchableOpacity>
          <Text style={styles.text3}>Once your CELO Transaction has been confirmed, we will release the FIAT.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExchangeSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    margin: '3%',
  },
  imgView: {
    width: 150,
    height: 150,
    padding: 22,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: Theme.green,
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '25%',
    marginBottom: '8%',
  },
  img: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  text1: {
    color: Theme.white,
    textAlign: 'center',
    marginHorizontal: '8%',
  },
  text2: {
    color: Theme.white,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    marginHorizontal: '7%',
    marginVertical: '8%',
  },
  copyRow: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"center",
      borderWidth:0.5,
      paddingHorizontal:5,
      paddingVertical:15,
      borderRadius:10,
      margin:"5%",
      overflow:"hidden",
      borderColor:Theme.border,
      backgroundColor:Theme.PIN
  },
  copyText: {
      color:Theme.textGrey,
      marginHorizontal:"3%",
      textAlign:'center',
      width:"60%",
  },
  copyIconView: {
      width:20,
      height:22,
      overflow:'hidden',
      alignItems:'center'
  },
  copyImg: {
      width:"100%",
      height:'100%',
      alignSelf:"center"
  },
  text3: {
      color:Theme.white,
      textAlign:"center",
      marginHorizontal:"6%",
      marginVertical:"5%"
  }
});
