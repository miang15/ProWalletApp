import React, {useState, useRef} from 'react';
import {Image} from 'react-native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDown from '../../components/DropDown';

const BankingDetails = ({navigation}) => {
  const [bankName, setBankName] = useState('All');
  const [list, setList] = useState([
    'All',
    'HBL',
    'UBL',
    'Allied',
    'Alfalah',
  ]);
  const refRBSheet = useRef();

  const handleSelectedItem = val => {
    refRBSheet.current.close()
    setBankName(val);
  }

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Banking Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.description}>
            Please provide account's details
          </Text>
          <Text style={styles.bankName}>Bank Name</Text>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.pickerRow}>
            <Text style={styles.label}>{bankName}</Text>
            <View style={styles.imgView}>
              <Image
                resizeMode="cover"
                style={styles.img}
                source={Images.Down}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.bankName}>Account number</Text>
          <CustomInput width={'98%'} />
          <Text style={{...styles.bankName, marginTop: '5%'}}>
            Account name
          </Text>
          <CustomInput width={'98%'} />
          <Button onPress={() => navigation.navigate("Confirmation")} title="Next" top={'10%'} />
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
          container: {borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor:Theme.darkGrey},
        }}>
          <DropDown list={list} selectedItem={val => handleSelectedItem(val)} />
      </RBSheet>
    </View>
  );
};

export default BankingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    margin: '3%',
  },
  description: {
    color: Theme.white,
    fontSize: 18,
    marginBottom: '8%',
  },
  bankName: {
    color: Theme.white,
    fontSize: 15,
  },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: '2%',
    marginBottom: '6%',
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: 5,
  },
  label: {
    color: Theme.textGrey,
    fontSize: 15,
  },
  imgView: {
    width: 20,
    height: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  itemBtn: {
    borderWidth:1,
    borderRadius:5,
    borderColor:Theme.green,
    backgroundColor:Theme.black,
    alignSelf:'center',
    margin:"3%",
    paddingHorizontal:20,
    paddingVertical:5,
    
  },
  itemText: {
    color:Theme.white,
    fontSize:15,
    textAlign:'center'
  }
});
