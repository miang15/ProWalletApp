import React, {useRef, useState} from 'react';
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
import ConfirmTradeModal from '../../components/ConfirmTradeModal';
import Icons from '../../constants/Icons';

const ModalDATA = [
  {
    id: 1,
    label: 'Withdraw Amount :',
    value: '$2300.00',
  },
  {
    id: 2,
    label: 'Withdraw Fees (3.9%) :',
    value: '$89.70',
  },
  {
    id: 3,
    label: 'Total Withdraw :',
    value: '$2,210.0',
  },
];

const MobileMoneyWithdraw = ({navigation}) => {
  const [modal, setModal] = useState(false);
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
          <Text style={styles.text1}>How much do you want to withdraw?</Text>
          <Text style={styles.label}>Country</Text>
          <Picker
            onLeftPress={() => refRBSheet.current.open()}
            label={coin}
            valueText={'0.00'}
            width={'100%'}
          />
          <Text style={styles.values}>0.0017USD = 1 GHS</Text>
          <Text style={styles.label}>Mobile Payment</Text>
          <TouchableOpacity style={{marginBottom: '3%'}}>
            <CustomInput
              width={'89%'}
              editable={false}
              placeholder={'Select Network'}
              RightIcons={Icons.downBold}
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
          <Text style={styles.label}>Recipient’s Email Address</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Enter email Address'}
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
            onPress={() => setModal(true)}
              title={'Confirm Withdraw'}
              backgroundColor={Theme.orange}
              borderColor={Theme.orange}
              width={'48%'}
            />
          </View>
        </View>
      </ScrollView>
      <ConfirmTradeModal
      margin={'1%'}
        heading={'Confirm Withdraw'}
        DATA={ModalDATA}
        show={modal}
        setShow={() => setModal(!modal)}
        onPress={() => setModal(!modal)}
        btnText={'Confirm Withdraw'}
        btnBackground={Theme.orange}
        btnBorder={Theme.orange}
      />
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

export default MobileMoneyWithdraw;

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
