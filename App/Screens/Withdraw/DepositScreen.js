import React, { useRef, useState } from 'react';
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
import Picker from '../../components/Picker';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDown from '../../components/DropDown';

const DepositScreen = ({navigation}) => {
  const [coin, setCoin] = useState('GHS');
  const [list, setList] = useState(['GHS', 'INR', 'PKR', 'EUR', 'USD']);
  const refRBSheet = useRef();

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    setCoin(val);
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: '3%'}}>
          <Text style={styles.heading}>BAL $292,339.64</Text>
          <Text style={styles.text1}>How much do you want to deposit?</Text>
          <Text style={styles.label}>Country</Text>
          <Picker onLeftPress={() => refRBSheet.current.open()} label={coin} valueText={'0.00'} width={'100%'} />
          <Text style={styles.values}>1 GHS = 0.0017USD</Text>
          <Text style={styles.label}>Mobile Payment</Text>
          <TouchableOpacity style={{marginBottom: '3%'}}>
            <CustomInput
              width={'89%'}
              editable={false}
              placeholder={'Select Network'}
              RightIcons={Images.upDown}
              backgroundColor={Theme.darkRow}
              borderColor={Theme.darkRow}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Phone Number</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Enter phone number'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>Beneficiary name</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Enter a beneficiary name'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: '10%',
            }}>
            <Button
              title={'Cancel'}
              backgroundColor={Theme.black}
              borderColor={Theme.border}
              width={'48%'}
            />
            <Button
              title={'Confirm Deposit'}
              backgroundColor={Theme.orange}
              borderColor={Theme.orange}
              width={'48%'}
            />
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
    </View>
  );
};

export default DepositScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  heading: {
    color: Theme.orange,
    fontSize: Theme.heading,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: Theme.darkGrey,
    paddingVertical: 5,
    borderRadius: 8,
    marginHorizontal: '1%',
  },
  text1: {
    color: Theme.white,
    fontSize: Theme.normal,
    marginVertical: '5%',
  },
  label: {
    color: Theme.whiteText,
    fontSize: Theme.normal,
  },
  values: {
    color: Theme.white,
    fontSize: Theme.normal,
    textAlign: 'center',
    marginVertical: '2%',
  },
});
