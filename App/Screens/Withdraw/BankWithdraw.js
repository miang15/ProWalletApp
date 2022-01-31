import React, {useRef} from 'react';
import {useState} from 'react';
import {
  Alert,
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
import Congratulations from '../../components/Congratulations';
import {payoutBank, rate} from '../../Services/Apis';

const BankWithdraw = ({navigation}) => {
  const [selected, setSelected] = useState(1);
  const [congrats, setCongrats] = useState(false);
  const [transferModal, setTransferModal] = useState(false);
  const [coin, setCoin] = useState('USD');
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');
  const [rateValue, setRateValue] = useState('');
  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [accountType, setAccountType] = useState('');
  const [accountTypeError, setAccountTypeError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankNameError, setBankNameError] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountNumberError, setAccountNumberError] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [swiftCodeError, setSwiftCodeError] = useState('');
  const [bankRouting, setBankRouting] = useState('');
  const [bankRoutingError, setBankRoutingError] = useState('');
  const [bankAddress, setBankAddress] = useState('');
  const [bankAddressError, setBankAddressError] = useState('');
  const [fullName, setFullName] = useState('');
  const [list, setList] = useState(['GHS', 'INR', 'NGN', 'EUR', 'USD']);
  const [list3, setList3] = useState([
    'United States',
    'United Kingdom',
    'Sweden',
    'Australia',
  ]);
  const [list4, setList4] = useState(['mobilemoney', 'account']);

  const [ModalDATA, setModalData] = useState([
    {
      id: 1,
      label: 'Transfer Amount:',
      value: amount,
    },
    {
      id: 2,
      label: 'Transfer Fees:',
      value: (amount / 100) * 3.9,
    },
    {
      id: 3,
      label: 'Transfer to:',
      value: bankName,
    },
    {
      id: 4,
      label: 'Account Number:',
      value: accountNumber,
    },
    {
      id: 5,
      label: 'Account Name:',
      value: fullName,
    },
  ]);

  const refRBSheet = useRef();

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleAmount = val => {
    if (val !== '') {
      setAmount(val);

      rate(coin, 'USD')
        .then(({data}) => {
          if (data?.result?.status == 'success') {
            let coinRate = data?.result?.data?.rate;
            const a = coinRate * val;
            setRateValue(a);
          } else {
            Alert.alert('Something went wrong');
          }
        })
        .catch(e => {
          console.log('ERROR: ', e);
        });
    } else {
      setAmount('');
      setRateValue('');
    }
  };

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    if (selected === 1) {
      setCoin(val);
    } else if (selected === 3) {
      setCountry(val);
    } else {
      setAccountType(val);
    }
  };

  const handleTransferData = () => {
    setAmountError('');
    setCountryError('');
    setPhoneError('');
    setAccountTypeError('');
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setBankNameError('');
    setAccountNumberError('');
    setSwiftCodeError('');
    setBankRoutingError('');
    setBankAddressError('');

    if (amount == '') {
      setAmountError('Amount is Required');
    } else if (country == '') {
      setCountryError('Country is Required');
    } else if (phone == '') {
      setPhoneError('Phone Number is Required');
    } else if (accountType == '') {
      setAccountTypeError('Account Type is Required');
    } else if (firstName == '') {
      setFirstNameError('First Name is Required');
    } else if (lastName == '') {
      setLastNameError('Last Name is Required');
    } else if (email == '') {
      setEmailError('Email is Required');
    } else if (!email.match(emailRegex)) {
      setEmailError('Enter Valid Email');
    } else if (bankName == '') {
      setBankNameError('Bank Name is Required');
    } else if (accountNumber == '') {
      setAccountNumberError('Account Number is Required');
    } else if (swiftCode == '') {
      setSwiftCodeError('Swift Code is Required');
    } else if (bankRouting == '') {
      setBankRoutingError('Bank Routing Number is Required');
    } else if (bankAddress == '') {
      setBankAddressError('Bank Address is Required');
    } else {
      let a = firstName + ' ' + lastName;
      setFullName(a);
      const clone = [...ModalDATA];
      clone[0].value = amount;
      clone[1].value = (amount / 100) * 3.9;
      clone[2].value = bankName;
      clone[3].value = accountNumber;
      clone[4].value = a;
      setModalData(clone);
      setTransferModal(true);
      console.log("FULLNAME: ",a);
    }
  };

  const hanldeConfirmTransfer = () => {
    const data = {
      currency: "NGN",
      account_bank: "044",
      account_number: "0690000037",
      amount: "200",
      email: "xyz@gmail.com",
      phone_number: "123321123",
      fullname: "mian nouman",
    }
    payoutBank(data).then(({data}) => {
      setTransferModal(!transferModal)
      setCongrats(true)
      console.log("RES: ",data?.result);
    }).catch((e) => {
      console.log("Error: ",e?.response);
    })
  }

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={{margin: '3%'}}>
          <Text style={styles.label}>Select Withdraw Amount</Text>
          <Picker
            onLeftPress={() => {
              setSelected(1), refRBSheet.current.open();
            }}
            label={coin}
            placeholder={'0.00'}
            valueText={amount}
            onChangeText={val => handleAmount(val)}
            width={'100%'}
          />
          {amountError ? (
            <Text style={styles.errorMsg}>{amountError}</Text>
          ) : null}
          {amount && rateValue ? (
            <Text style={styles.values}>
              {amount + ' ' + coin + ' = ' + rateValue + 'USD'}
            </Text>
          ) : null}
          <Text style={styles.label}>Recipient’s Country</Text>
          <TouchableOpacity
            onPress={() => {
              setSelected(3), refRBSheet.current.open();
            }}
            style={{marginBottom: countryError ? 1 : '3%'}}>
            <CustomInput
              marginVertical={countryError ? '1%' : '3%'}
              width={'89%'}
              editable={false}
              value={country}
              placeholder={'United States'}
              RightIcons={Images.Down}
              onRightIcon={() => {
                setSelected(3), refRBSheet.current.open();
              }}
              backgroundColor={Theme.darkRow}
              borderColor={Theme.darkRow}
            />
          </TouchableOpacity>
          {countryError ? (
            <Text style={styles.errorMsg}>{countryError}</Text>
          ) : null}
          <Text style={styles.label}>Recipient’s Phone Number</Text>
          <CustomInput
            marginVertical={phoneError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'Enter phone number'}
            value={phone}
            onChangeText={setPhone}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {phoneError ? (
            <Text style={styles.errorMsg}>{phoneError}</Text>
          ) : null}
          <Text style={styles.label}>Account Type</Text>
          <TouchableOpacity
            onPress={() => {
              setSelected(4), refRBSheet.current.open();
            }}
            style={{marginBottom: accountTypeError ? 1 : '3%'}}>
            <CustomInput
              marginVertical={accountTypeError ? '1%' : '3%'}
              width={'89%'}
              editable={false}
              value={accountType}
              placeholder={'United States'}
              RightIcons={Images.Down}
              onRightIcon={() => {
                setSelected(4), refRBSheet.current.open();
              }}
              backgroundColor={Theme.darkRow}
              borderColor={Theme.darkRow}
            />
          </TouchableOpacity>
          {accountTypeError ? (
            <Text style={styles.errorMsg}>{accountTypeError}</Text>
          ) : null}
          <Text style={styles.label}>Recipient’s First Name</Text>
          <CustomInput
            marginVertical={firstNameError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'First Name'}
            value={firstName}
            onChangeText={setFirstName}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {firstNameError ? (
            <Text style={styles.errorMsg}>{firstNameError}</Text>
          ) : null}
          <Text style={styles.label}>Recipient’s Last Name</Text>
          <CustomInput
            marginVertical={lastNameError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'Last Name'}
            value={lastName}
            onChangeText={setLastName}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {lastNameError ? (
            <Text style={styles.errorMsg}>{lastNameError}</Text>
          ) : null}
          <Text style={styles.label}>Recipient’s Email Address</Text>
          <CustomInput
            marginVertical={emailError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'Email Address'}
            value={email}
            onChangeText={setEmail}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {emailError ? (
            <Text style={styles.errorMsg}>{emailError}</Text>
          ) : null}
          <Text style={styles.label}>Bank Name</Text>
          <CustomInput
            marginVertical={bankNameError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'070009'}
            value={bankName}
            onChangeText={setBankName}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {bankNameError ? (
            <Text style={styles.errorMsg}>{bankNameError}</Text>
          ) : null}
          <Text style={styles.label}>IBAN/Account Number</Text>
          <CustomInput
            marginVertical={accountNumberError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'IBAN/Account Number'}
            value={accountNumber}
            onChangeText={setAccountNumber}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {accountNumberError ? (
            <Text style={styles.errorMsg}>{accountNumberError}</Text>
          ) : null}
          <Text style={styles.label}>Swift Code</Text>
          <CustomInput
            marginVertical={swiftCodeError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'Enter Swift Code'}
            value={swiftCode}
            onChangeText={setSwiftCode}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {swiftCodeError ? (
            <Text style={styles.errorMsg}>{swiftCodeError}</Text>
          ) : null}
          <Text style={styles.label}>Bank Routing Numbert/Sort Code</Text>
          <CustomInput
            marginVertical={bankRoutingError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'Routing Numbert/Sort Code'}
            value={bankRouting}
            onChangeText={setBankRouting}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {bankRoutingError ? (
            <Text style={styles.errorMsg}>{bankRoutingError}</Text>
          ) : null}
          <Text style={styles.label}>Bank Address</Text>
          <CustomInput
            marginVertical={bankAddressError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'Enter Bank Address'}
            value={bankAddress}
            onChangeText={setBankAddress}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {bankAddressError ? (
            <Text style={styles.errorMsg}>{bankAddressError}</Text>
          ) : null}
          <View style={styles.btnRow}>
            <Button
              title={'Cancel'}
              width={'48%'}
              backgroundColor={Theme.black}
              borderColor={Theme.border}
            />
            <Button
              onPress={handleTransferData}
              // onPress={() => setTransferModal(true)}
              title={'Transfer'}
              width={'48%'}
              backgroundColor={Theme.orange}
              borderColor={Theme.orange}
            />
          </View>
        </View>
      </ScrollView>
      <Congratulations
        visible={congrats}
        setVisible={() => setCongrats(!congrats)}
        description={'Your transfer has been completed successfully'}
      />
      <ConfirmTradeModal
        margin={'0.5%'}
        btnBackground={Theme.orange}
        btnBorder={Theme.orange}
        heading={'Confirm Transfer'}
        DATA={ModalDATA}
        show={transferModal}
        onPress={hanldeConfirmTransfer}
        // onPress={() => {
        //   setTransferModal(!transferModal), setCongrats(true);
        // }}
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
        <DropDown
          list={selected === 1 ? list : selected === 3 ? list3 : list4}
          selectedItem={val => handleSelectedItem(val)}
        />
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
  errorMsg: {
    color: Theme.red,
    fontSize: 13,
    marginBottom: '1%',
  },
});
