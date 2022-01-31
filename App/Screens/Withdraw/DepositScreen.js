import React, {useRef, useState} from 'react';
import {
  Alert,
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
import Congratulations from '../../components/Congratulations';
import Icons from '../../constants/Icons';
import {chargeMoney, rate} from '../../Services/Apis';

const DepositScreen = ({navigation}) => {
  const [congrats, setCongrats] = useState(false);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(1);
  const [coin, setCoin] = useState('XAF');
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');
  const [rateValue, setRateValue] = useState('');
  const [network, setNetwork] = useState('');
  const [networkError, setNetworkError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [list, setList] = useState(['XAF', 'INR', 'EUR', 'USD']);
  const [list3, setList3] = useState([
    'mobile_money_rwanda',
    'mobile_money_uganda',
    'mobile_money_zambia',
    'mobile_money_ghana',
    'mobile_money_franco',
    'mpesa',
  ]);
  const refRBSheet = useRef();
  const [ModalDATA, setModalData] = useState([
    {
      id: 1,
      label: 'Deposit Amount :',
      value: amount,
    },
    {
      id: 2,
      label: 'Deposit Fees (3.9%) :',
      value: (amount / 100) * 3.9,
    },
    {
      id: 3,
      label: 'Total Deposit :',
      value: (amount / 100) * 3.9 + amount,
    },
  ]);

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleAmount = val => {
    if(val !== ''){
      setAmount(val);

    const clone = [...ModalDATA];
    clone[0].value = val;
    clone[1].value = (val / 100) * 3.9;
    clone[2].value = Number(clone[1].value) + Number(val);
    setModalData(clone);

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
      setAmount('')
      setRateValue('')
    }
  };

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    if (selected === 1) {
      setCoin(val);
    } else {
      setNetwork(val);
    }
  };

  const handleAmountDeposit = () => {
    setAmountError('');
    setNetworkError('');
    setPhoneError('');
    setFullNameError('');
    setEmailError('');

    if (amount == '') {
      setAmountError('Amount is Required');
    } else if (network == '') {
      setNetworkError('Network is Required');
    } else if (phone == '') {
      setPhoneError('Phone Number is Required');
    } else if (fullName == '') {
      setFullNameError('Beneficiary Name is Required');
    } else if (email == '') {
      setEmailError('Email is Required');
    } else if (!email.match(emailRegex)) {
      setEmailError('Enter valid Email');
    } else {
      setModal(true);
    }
  };

  const handleConfirmDeposit = () => {
    const data = {
      currency: coin,
      network: network,
      amount: amount,
      email: email,
      phone_number: phone,
      fullname: fullName,
    }
    console.log("DATA: ",data);
    chargeMoney(data).then(({data}) => {
      if(data?.result?.status == "success"){
        setModal(!modal)
        setCongrats(true)
      } else {
        Alert.alert("Something went wrong")
      }
      console.log("RES: ",data)
    }).catch((e) => {
      console.log("Error: ",e);
      Alert.alert("Something went wrong")
    })
  }

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: '3%'}}>
          <Text style={styles.heading}>BAL $292,339.64</Text>
          <Text style={styles.text1}>How much do you want to deposit?</Text>
          <Text style={styles.label}>Country</Text>
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
          <Text style={styles.label}>Mobile Payment</Text>
          <TouchableOpacity
            onPress={() => {
              setSelected(3), refRBSheet.current.open();
            }}
            style={{marginBottom: networkError ? 1 : '3%'}}>
            <CustomInput
              marginVertical={networkError ? '1%' : '3%'}
              width={'89%'}
              editable={false}
              value={network}
              onRightIcon={() => {
                setSelected(3), refRBSheet.current.open();
              }}
              placeholder={'Select Network'}
              RightIcons={Icons.downBold}
              backgroundColor={Theme.darkRow}
              borderColor={Theme.darkRow}
            />
          </TouchableOpacity>
          {networkError ? (
            <Text style={styles.errorMsg}>{networkError}</Text>
          ) : null}
          <Text style={styles.label}>Phone Number</Text>
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
          <Text style={styles.label}>Beneficiary name</Text>
          <CustomInput
            marginVertical={fullNameError ? '1%' : '3%'}
            width={'95%'}
            placeholder={'Enter a beneficiary name'}
            value={fullName}
            onChangeText={setFullName}
            borderColor={Theme.darkRow}
            backgroundColor={Theme.darkRow}
          />
          {fullNameError ? (
            <Text style={styles.errorMsg}>{fullNameError}</Text>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: '10%',
            }}>
            <Button
              onPress={() => navigation.goBack()}
              title={'Cancel'}
              backgroundColor={Theme.black}
              borderColor={Theme.border}
              width={'48%'}
            />
            <Button
              onPress={handleAmountDeposit}
              title={'Confirm Deposit'}
              backgroundColor={Theme.orange}
              borderColor={Theme.orange}
              width={'48%'}
            />
          </View>
        </View>
      </ScrollView>
      <Congratulations
        visible={congrats}
        setVisible={() => {setCongrats(!congrats), navigation.goBack()}}
        description={'Your deposition has been completed successfully'}
      />
      <ConfirmTradeModal
        margin={'1%'}
        heading={'Confirm Deposit'}
        DATA={ModalDATA}
        show={modal}
        setShow={() => setModal(!modal)}
        onPress={handleConfirmDeposit}
        btnText={'Confirm Deposit'}
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
        <ScrollView>
          <DropDown
            list={selected === 1 ? list : list3}
            selectedItem={val => handleSelectedItem(val)}
          />
        </ScrollView>
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
  errorMsg: {
    color: Theme.red,
    fontSize: 13,
    marginBottom: '1%',
  },
});
