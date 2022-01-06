import React, {useRef} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import ConfirmTradeModal from '../../components/ConfirmTradeModal';
import CustomInput from '../../components/CustomInput';
import DropDown from '../../components/DropDown';
import Header from '../../components/Header';
import Picker from '../../components/Picker';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';

const DATA = [
  {
    id: 1,
    label: 'Transfer Amount:',
    value: '$2300',
  },
  {
    id: 2,
    label: 'Transfer Fees:',
    value: '$2300',
  },
  {
    id: 3,
    label: 'Transfer to:',
    value: 'ABC Bank',
  },
  {
    id: 4,
    label: 'Account Number:',
    value: '392049020',
  },
  {
    id: 5,
    label: 'Account Name:',
    value: 'Abdul Al Mamun',
  },
];
const BankWithdraw = ({navigation}) => {
  const [transferModal, setTransferModal] = useState(false);
  const [coin, setCoin] = useState('USD');
  const [list, setList] = useState(['GHS', 'INR', 'PKR', 'EUR', 'USD']);
  const refRBSheet = useRef();

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    setCoin(val);
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={{margin: '3%'}}>
          <Text style={styles.label}>Select Withdraw Amount</Text>
          <Picker
            onLeftPress={() => refRBSheet.current.open()}
            label={coin}
            valueText={'0.00'}
            width={'100%'}
          />
          <Text style={styles.values}>1 GHS = 0.0017USD</Text>
          <Text style={styles.label}>Recipient’s Country</Text>
          <TouchableOpacity style={{marginBottom: '3%'}}>
            <CustomInput
              width={'89%'}
              editable={false}
              placeholder={'United States'}
              RightIcons={Images.Down}
              backgroundColor={Theme.darkRow}
              borderColor={Theme.darkRow}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Recipient’s Phone Number</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Enter phone number'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>Account Type</Text>
          <TouchableOpacity style={{marginBottom: '3%'}}>
            <CustomInput
              width={'89%'}
              editable={false}
              placeholder={'United States'}
              RightIcons={Images.Down}
              backgroundColor={Theme.darkRow}
              borderColor={Theme.darkRow}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Recipient’s First Name</Text>
          <CustomInput
            width={'95%'}
            placeholder={'First Name'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>Recipient’s Last Name</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Last Name'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>Recipient’s Email Address</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Email Address'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>Bank Name</Text>
          <CustomInput
            width={'95%'}
            placeholder={'070009'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>IBAN/Account Number</Text>
          <CustomInput
            width={'95%'}
            placeholder={'IBAN/Account Number'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>Swift Code</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Enter Swift Code'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>Bank Routing Numbert/Sort Code</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Routing Numbert/Sort Code'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <Text style={styles.label}>Bank Address</Text>
          <CustomInput
            width={'95%'}
            placeholder={'Enter Bank Address'}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          <View style={styles.btnRow}>
            <Button
              title={'Cancel'}
              width={'48%'}
              backgroundColor={Theme.black}
              borderColor={Theme.border}
            />
            <Button
              onPress={() => setTransferModal(true)}
              title={'Transfer'}
              width={'48%'}
              backgroundColor={Theme.orange}
              borderColor={Theme.orange}
            />
          </View>
        </View>
      </ScrollView>
      <ConfirmTradeModal
        margin={'0.5%'}
        btnBackground={Theme.orange}
        btnBorder={Theme.orange}
        heading={'Confirm Transfer'}
        DATA={DATA}
        show={transferModal}
        onPress={() => setTransferModal(!transferModal)}
        setShow={() => setTransferModal(!transferModal)}
        btnText={'Confirm Transfer'}
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

export default BankWithdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  label: {
    color: Theme.textGrey,
    fontSize: Theme.medium,
  },
  values: {
    color: Theme.white,
    fontSize: Theme.normal,
    textAlign: 'center',
    marginVertical: '1%',
  },
  btnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: '15%',
  },
});
