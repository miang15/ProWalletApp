import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from '../../components/Header';
import WalletComponent from '../../components/WalletComponent';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import ImagePicker from 'react-native-image-crop-picker';
import Clipboard from '@react-native-community/clipboard';
import ReactNativeModal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../components/CustomInput';
import Button from '../../components/Button';
import Congratulations from '../../components/Congratulations';
import ConfirmTradeModal from '../../components/ConfirmTradeModal';
import {cashWithdraw, coinWithdraw} from '../../Services/Apis';

const DATA = [
  {
    id: 1,
    img: Images.Shield,
    label: 'KYC Verification',
  },
  {
    id: 2,
    img: Images.Wallet,
    label: 'Bank Deposit',
  },
  {
    id: 3,
    img: Images.ArrowDown,
    label: 'Mobile Money Deposit',
  },
  {
    id: 4,
    img: Images.ArrowDown,
    label: 'Deposit crypto',
  },
  {
    id: 5,
    img: Images.ArrowDown,
    label: 'Bank withdraw',
  },
  {
    id: 6,
    img: Images.ArrowDown,
    label: 'Mobile money withdraw',
  },
  {
    id: 7,
    img: Images.ArrowDown,
    label: 'Paypal withdraw',
  },
  {
    id: 8,
    img: Images.ArrowDown,
    label: 'USDC withdraw',
  },
  {
    id: 9,
    img: Images.Shield,
    label: 'Security',
  },
  {
    id: 10,
    img: Images.Wallet,
    label: 'Logout',
  },
];

const Profile = ({navigation}) => {
  const [hide, setHide] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [usdcModal, setUsdcModal] = useState(false);
  const [usdcConfirm, setUsdcConfirm] = useState(false);
  const [usdcCongrats, setUsdcCongrats] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [congrats, setCongrats] = useState(false);
  const [editCongrats, setEditCongrats] = useState(false);
  const [paypalModal, setPaypalModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [userName, setUserName] = useState('Tamanna Hegel');
  const [name, setName] = useState(userName);
  const [nameError, setNameError] = useState('');
  const [userEmail, setUserEmail] = useState('tuhafasa@gmail.com');
  const [email, setEmail] = useState(userEmail);
  const [emailError, setEmailError] = useState('');
  const [userPhone, setUserPhone] = useState('+99 123 294 294');
  const [phone, setPhone] = useState(userPhone);
  const [phoneError, setPhoneError] = useState('');
  const [paypalId, setPaypalId] = useState('');
  const [paypalIdError, setPaypalIdError] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawAmountError, setWithdrawAmountError] = useState('');
  const [processingFees, setProcessingFees] = useState('');
  const [processingFeesError, setProcessingFeesError] = useState('');
  const [payOutAmount, setPayOutAmount] = useState('');
  const [invitationCode, setInvitationCode] = useState('526116597...');
  const [copiedText, setCopiedText] = useState('');
  const [receipientAddress, setReceipientAddress] = useState('');
  const [receipientAddressError, setReceipientAddressError] = useState('');
  const [usdcAmount, setUsdcAmount] = useState('');
  const [usdcAmountError, setUsdcAmountError] = useState('');

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [RECIPIENTDATA, setRECIPIENTDATA] = useState([
    {
      id: 1,
      label: 'Recipient address :',
      value: receipientAddress,
      color: Theme.orange,
    },
    {
      id: 2,
      label: 'Amount sent :',
      value: usdcAmount + ' USDC',
    },
  ]);

  const pickImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(image => {
        setProfileImage(image.path);
      })
      .catch(e => {
        console.log('Error: ', e);
      });
  };

  const handleOnClick = val => {
    if (val === 'KYC Verification') {
      navigation.navigate('Welcome');
    } else if (val === 'Bank Deposit') {
      navigation.navigate('Balance');
    } else if (val === 'Mobile Money Deposit') {
      navigation.navigate('DepositScreen');
    } else if (val === 'Deposit crypto') {
      navigation.navigate('CoinsDeposit');
    } else if (val === 'Bank withdraw') {
      navigation.navigate('BankWithdraw');
    } else if (val === 'Mobile money withdraw') {
      navigation.navigate('MobileMoneyWithdraw');
    } else if (val === 'Paypal withdraw') {
      setPaypalModal(true);
    } else if (val === 'USDC withdraw') {
      setUsdcModal(true);
    } else if (val === 'Logout') {
      setLogoutConfirm(true);
    } else if (val === 'Security') {
      navigation.navigate('Fingerprint');
    } else {
      Alert.alert('Screen Not Available');
    }
  };

  const renderWallet = ({item}) => (
    <WalletComponent
      leftIcon={item.img}
      title={item.label}
      onPress={() => handleOnClick(item.label)}
    />
  );

  const copyToClipboard = () => {
    setModalVisible(!modalVisible);
    Clipboard.setString(invitationCode);
  };

  const handleWithdrawAmount = val => {
    setWithdrawAmount(val);
    if (processingFees) {
      let a = Number(processingFees) + Number(val);
      setPayOutAmount(a);
    }
  };

  const handleProcessingFees = val => {
    setProcessingFees(val);
    if (withdrawAmount) {
      let a = Number(withdrawAmount) + Number(val);
      setPayOutAmount(a);
    }
  };

  const handleConfirmPaypal = () => {
    setPaypalIdError('');
    setWithdrawAmountError('');
    setProcessingFeesError('');

    if (paypalId === '') {
      setPaypalIdError('Enter Paypal ID');
    } else if (!paypalId.match(emailRegex)) {
      setPaypalIdError('Paypal ID is Invalid');
    } else if (withdrawAmount === '') {
      setWithdrawAmountError('Enter Withdraw Amount');
    } else if (processingFees === '') {
      setProcessingFeesError('Enter Processing Fees');
    } else {
      setPaypalModal(!paypalModal);
      setConfirmModal(true);
    }
  };

  const submitPaypalAmount = () => {
    const data = {
      to: paypalId,
      amount: payOutAmount,
    };
    cashWithdraw(data)
      .then(({data}) => {
        console.log('RES: ', data);
        setConfirmModal(!confirmModal);
        setCongrats(true);
      })
      .catch(e => {
        console.log('Error: ', e?.response?.data?.error);
        Alert.alert(e?.response?.data?.error);
      });
  };

  const handleUsdcWithdraw = () => {
    setReceipientAddressError('');
    setUsdcAmountError('');

    if (receipientAddress == '') {
      setReceipientAddressError('Enter Recipient Address');
    } else if (usdcAmount == '') {
      setUsdcAmountError('Enter Amount');
    } else {
      const clone = [...RECIPIENTDATA];
      clone[0].value = receipientAddress;
      clone[1].value = usdcAmount + ' USDC';
      setUsdcModal(!usdcModal);
      setUsdcConfirm(true);
    }
  };

  const handleConfirmationUsdc = () => {
    const data = {
      amount: usdcAmount,
      to: receipientAddress,
    };

    coinWithdraw(data)
      .then(({data}) => {
        console.log('RES: ', data);
        setUsdcConfirm(!usdcConfirm);
        setUsdcCongrats(true);
      })
      .catch(e => {
        console.log('Error: ', e?.response?.data?.error);
        Alert.alert(e?.response?.data?.error);
      });
  };

  const handleSaveChanges = () => {
    setNameError('');
    setEmailError('');
    setPhoneError('');

    if (name == '') {
      setNameError('Name is Required');
    } else if (email == '') {
      setEmailError('Email is Required');
    } else if (!email.match(emailRegex)) {
      setEmailError('Enter Valid Email');
    } else if (phone == '') {
      setPhoneError('Phone Number is Required');
    } else {
      setUserName(name);
      setUserEmail(email);
      setUserPhone(phone);
      setEditModal(!editModal);
      setEditCongrats(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Account'}
        onPress={() => navigation.goBack()}
        backgroundColor={Theme.darkGrey}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.topRow}>
            <TouchableOpacity onPress={pickImage} style={styles.profilePicView}>
              <Image
                resizeMode="cover"
                style={styles.profilePic}
                source={profileImage ? {uri: profileImage} : Images.profilePic}
              />
            </TouchableOpacity>
            <View style={styles.innerView}>
              <View style={styles.editRow}>
                <Text style={styles.userName} numberOfLines={1}>
                  {userName}
                </Text>
                <TouchableOpacity
                  onPress={() => setEditModal(true)}
                  style={styles.editView}>
                  <Image
                    style={styles.edit}
                    resizeMode="contain"
                    source={Images.Edit}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.gmailText} numberOfLines={1}>
                {userEmail}
              </Text>
              <Text style={styles.gmailText} numberOfLines={1}>
                {userPhone}
              </Text>
              <View style={styles.innerRow}>
                <Text style={styles.Vip}>VIP 0</Text>
              </View>
            </View>
          </View>
          <View style={styles.valueRow}>
            <Text style={styles.estimated}>Estimated Value</Text>
            {hide ? (
              <TouchableOpacity
                onPress={() => setHide(!hide)}
                style={styles.eyeView}>
                <Image style={styles.eye} source={Icons.eye} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setHide(!hide)}
                style={styles.eyeView}>
                <Image style={styles.eye} source={Icons.Hide} />
              </TouchableOpacity>
            )}
          </View>
          {hide ? (
            <Text style={{...styles.valueText, letterSpacing: 1}}>
              $292,339.64
            </Text>
          ) : (
            <Text style={styles.valueText}>******</Text>
          )}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.referBtn}>
            <Text style={styles.referText}>
              {copiedText ? copiedText : 'Refer Friends to Earn'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.heading}>Wallet</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderWallet}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Copy Invitation Code</Text>
            <TouchableOpacity
              onPress={() => copyToClipboard()}
              style={styles.copyRow}>
              <Text style={styles.copyText} numberOfLines={1}>
                {invitationCode}
              </Text>
              <View style={styles.copyIconView}>
                <Image style={styles.copyImg} source={Images.copyIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback
        onPress={() => setEditModal(!editModal)}
        style={{flex: 1}}>
        <ReactNativeModal
          animationOut={'bounceOut'}
          animationIn={'bounceIn'}
          isVisible={editModal}
          transparent={true}
          onBackdropPress={() => setEditModal(!editModal)}>
          <View style={styles.centeredView}>
            <View style={styles.paypalModalView}>
              <View style={styles.modalRow}>
                <AntDesign name="close" size={20} color={Theme.white} />
                <Text style={styles.modalHeading}>Edit Info</Text>
                <TouchableOpacity
                  onPress={() => setEditModal(!editModal)}
                  style={styles.close}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{margin: '3%'}}>
                <Text style={styles.label}>Name</Text>
                <CustomInput
                  width={'100%'}
                  backgroundColor={Theme.grayInput}
                  borderWidth={0.5}
                  marginVertical={'2%'}
                  color={Theme.black}
                  placeholder={'Name'}
                  value={name}
                  onChangeText={setName}
                />
                {nameError ? (
                  <Text style={styles.errorMsg}>{nameError}</Text>
                ) : null}
                <Text style={styles.label}>Email</Text>
                <CustomInput
                  width={'100%'}
                  backgroundColor={Theme.grayInput}
                  borderWidth={0.5}
                  marginVertical={'2%'}
                  color={Theme.black}
                  placeholder={'Email'}
                  value={email}
                  onChangeText={setEmail}
                />
                {emailError ? (
                  <Text style={styles.errorMsg}>{emailError}</Text>
                ) : null}
                <Text style={styles.label}>Phone</Text>
                <CustomInput
                  width={'100%'}
                  backgroundColor={Theme.grayInput}
                  borderWidth={0.5}
                  marginVertical={'2%'}
                  color={Theme.black}
                  placeholder={'Phone Number'}
                  value={phone}
                  onChangeText={setPhone}
                />
                {phoneError ? (
                  <Text style={styles.errorMsg}>{phoneError}</Text>
                ) : null}
                <View
                  style={{
                    paddingHorizontal: 10,
                    marginTop: '10%',
                    marginBottom: '5%',
                  }}>
                  <Button
                    onPress={handleSaveChanges}
                    title={'Save'}
                    backgroundColor={Theme.orange}
                    borderColor={Theme.orange}
                  />
                </View>
              </View>
            </View>
          </View>
        </ReactNativeModal>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => setPaypalModal(!paypalModal)}
        style={{flex: 1}}>
        <ReactNativeModal
          animationOut={'bounceOut'}
          animationIn={'bounceIn'}
          isVisible={paypalModal}
          transparent={true}
          onBackdropPress={() => setPaypalModal(!paypalModal)}>
          <View style={styles.centeredView}>
            <View style={styles.paypalModalView}>
              <View style={styles.modalRow}>
                <AntDesign name="close" size={20} color={Theme.white} />
                <Text style={styles.modalHeading}>Paypal Info</Text>
                <TouchableOpacity
                  onPress={() => setPaypalModal(!paypalModal)}
                  style={styles.close}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{margin: '3%'}}>
                <Text style={styles.label}>Paypal ID</Text>
                <CustomInput
                  width={'100%'}
                  backgroundColor={Theme.grayInput}
                  borderWidth={0.5}
                  marginVertical={'2%'}
                  color={Theme.black}
                  placeholder={'Enter Paypal ID'}
                  value={paypalId}
                  onChangeText={setPaypalId}
                />
                {paypalIdError ? (
                  <Text style={styles.errorMsg}>{paypalIdError}</Text>
                ) : null}
                <Text style={styles.label}>Withdraw Amount</Text>
                <CustomInput
                  width={'100%'}
                  backgroundColor={Theme.grayInput}
                  borderWidth={0.5}
                  marginVertical={'2%'}
                  color={Theme.black}
                  placeholder={'Enter Amount'}
                  value={withdrawAmount}
                  onChangeText={withdrawAmount =>
                    handleWithdrawAmount(withdrawAmount)
                  }
                />
                {withdrawAmountError ? (
                  <Text style={styles.errorMsg}>{withdrawAmountError}</Text>
                ) : null}
                <Text style={styles.label}>Processing fees</Text>
                <CustomInput
                  width={'100%'}
                  backgroundColor={Theme.grayInput}
                  borderWidth={0.5}
                  marginVertical={'2%'}
                  color={Theme.black}
                  placeholder={'$0.00'}
                  value={processingFees}
                  onChangeText={processingFees =>
                    handleProcessingFees(processingFees)
                  }
                />
                {processingFeesError ? (
                  <Text style={styles.errorMsg}>{processingFeesError}</Text>
                ) : null}
                {payOutAmount ? (
                  <Text style={styles.payout}>
                    {'Payout amount = ' + '$' + payOutAmount}
                  </Text>
                ) : null}
                <View
                  style={{
                    paddingHorizontal: 10,
                    marginTop: '10%',
                    marginBottom: '5%',
                  }}>
                  <Button
                    onPress={handleConfirmPaypal}
                    title={'Confirm'}
                    backgroundColor={Theme.orange}
                    borderColor={Theme.orange}
                  />
                </View>
              </View>
            </View>
          </View>
        </ReactNativeModal>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => setConfirmModal(!confirmModal)}
        style={{flex: 1}}>
        <ReactNativeModal
          animationOut={'bounceOut'}
          animationIn={'bounceIn'}
          isVisible={confirmModal}
          transparent={true}
          onBackdropPress={() => setConfirmModal(!confirmModal)}>
          <View style={styles.centeredView}>
            <View style={styles.paypalModalView}>
              <View style={styles.modalRow}>
                <AntDesign name="close" size={20} color={Theme.white} />
                <Text style={styles.modalHeading}>Confirm Withdraw</Text>
                <TouchableOpacity
                  onPress={() => setConfirmModal(!confirmModal)}
                  style={styles.close}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{margin: '3%'}}>
                <View style={styles.confirmRow}>
                  <Text style={styles.mailText}>Paypal ID :</Text>
                  <Text style={styles.mailText}>{paypalId}</Text>
                </View>
                <View style={styles.confirmRow}>
                  <Text style={styles.mailText}>Payout amount :</Text>
                  <Text style={{...styles.mailText, color: Theme.orange}}>
                    {'$' + payOutAmount}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 5,
                    marginTop: '10%',
                    marginBottom: '5%',
                  }}>
                  <Button
                    onPress={submitPaypalAmount}
                    title={'Continue'}
                    backgroundColor={Theme.orange}
                    borderColor={Theme.orange}
                  />
                </View>
              </View>
            </View>
          </View>
        </ReactNativeModal>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => setUsdcModal(!usdcModal)}
        style={{flex: 1}}>
        <ReactNativeModal
          animationOut={'bounceOut'}
          animationIn={'bounceIn'}
          isVisible={usdcModal}
          transparent={true}
          onBackdropPress={() => setUsdcModal(!usdcModal)}>
          <View style={styles.centeredView}>
            <View style={{...styles.paypalModalView, paddingHorizontal: 10}}>
              <View style={styles.headingRow}>
                <Text style={styles.usdcText1}>USDC(ECR20)</Text>
                <Text style={styles.usdcText2}>5,000.00</Text>
              </View>
              <Text style={styles.usdcLabel}>Recipient address</Text>
              <CustomInput
                placeholder={'Enter recipient address'}
                backgroundColor={Theme.grayInput}
                borderColor={Theme.grayInput}
                color={Theme.black}
                marginVertical={'2%'}
                width={'100%'}
                value={receipientAddress}
                onChangeText={setReceipientAddress}
              />
              {receipientAddressError ? (
                <Text style={styles.errorMsg}>{receipientAddressError}</Text>
              ) : null}
              <Text style={{...styles.usdcLabel, marginTop: '2%'}}>Amount</Text>
              <CustomInput
                value={usdcAmount}
                onChangeText={setUsdcAmount}
                backgroundColor={Theme.grayInput}
                borderColor={Theme.grayInput}
                color={Theme.black}
                marginVertical={'2%'}
                width={'100%'}
              />
              {usdcAmountError ? (
                <Text style={styles.errorMsg}>{usdcAmountError}</Text>
              ) : null}
              <View style={{...styles.row1, marginTop: '5%'}}>
                <Text style={styles.rowText}>Blockchain Fees</Text>
                <Text style={styles.rowText}>30 USDC</Text>
              </View>
              <View style={styles.row1}>
                <Text style={styles.rowText}>Total amount</Text>
                <Text style={styles.rowText}>970 USDC</Text>
              </View>
              <Button
                onPress={handleUsdcWithdraw}
                title={'Confirm Withdraw'}
                backgroundColor={Theme.orange}
                borderColor={Theme.orange}
                top={'10%'}
                bottom={'8%'}
              />
            </View>
          </View>
        </ReactNativeModal>
      </TouchableWithoutFeedback>
      <ConfirmTradeModal
        show={usdcConfirm}
        setShow={() => setUsdcConfirm(!usdcConfirm)}
        onPress={handleConfirmationUsdc}
        heading={'Confirm Withdraw'}
        DATA={RECIPIENTDATA}
        btnText={'Confirm Withdraw'}
        btnBackground={Theme.orange}
        btnBorder={Theme.orange}
      />
      <ConfirmTradeModal
        show={logoutConfirm}
        setShow={() => setLogoutConfirm(!logoutConfirm)}
        onPress={() => {
          setLogoutConfirm(!logoutConfirm), navigation.navigate('Login');
        }}
        heading={'Confirm Logout'}
        btnText={'Confirm'}
        btnBackground={Theme.orange}
        btnBorder={Theme.orange}
      />
      <Congratulations
        visible={usdcCongrats}
        setVisible={() => setUsdcCongrats(!usdcCongrats)}
        description={'Your transaction has been completed successfully'}
      />
      <Congratulations
        visible={congrats}
        setVisible={() => setCongrats(!congrats)}
        description={'Your withdraw has been completed successfully'}
      />
      <Congratulations
        visible={editCongrats}
        setVisible={() => setEditCongrats(!editCongrats)}
        description={'Your changes saved successfully'}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    margin: '3%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: Theme.darkRow,
    borderWidth: 1,
    borderColor: Theme.green,
    borderRadius: 20,
    paddingVertical: 50,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Theme.darkRow,
    borderRadius: 10,
    padding: 15,
  },
  profilePicView: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 35,
  },
  profilePic: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  innerView: {
    marginLeft: '5%',
    width: '70%',
  },
  gmailText: {
    color: Theme.white,
    fontSize: 14,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Vip: {
    color: Theme.orange,
    fontWeight: 'bold',
  },
  verifiedText: {
    color: Theme.textGrey,
    fontSize: 8,
    marginHorizontal: '5%',
    backgroundColor: '#252525',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  estimated: {
    color: Theme.textGrey,
    fontSize: 15,
  },
  eyeView: {
    width: 20,
    height: 20,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  eye: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  valueText: {
    color: Theme.white,
    letterSpacing: 10,
    marginVertical: '2%',
  },
  referBtn: {
    borderWidth: 0.3,
    borderColor: Theme.yellowOrange,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: '3%',
    marginBottom: '8%',
  },
  referText: {
    color: Theme.orange,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    color: Theme.white,
    fontSize: 18,
    marginBottom: '3%',
  },
  copyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: Theme.border,
    backgroundColor: Theme.PIN,
  },
  copyText: {
    color: Theme.textGrey,
    marginHorizontal: '3%',
    textAlign: 'center',
  },
  copyIconView: {
    width: 20,
    height: 22,
    overflow: 'hidden',
    alignItems: 'center',
  },
  copyImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  modalText: {
    color: Theme.white,
    textAlign: 'center',
    marginBottom: '10%',
    fontSize: 15,
    fontWeight: 'bold',
  },
  paypalModalView: {
    marginVertical: '5%',
    backgroundColor: Theme.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  modalRow: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: Theme.border,
  },
  modalHeading: {
    color: Theme.black,
    fontSize: Theme.headingtext,
    fontWeight: 'bold',
  },
  close: {
    paddingHorizontal: 5,
  },
  label: {
    color: Theme.black,
    fontSize: Theme.medium,
    marginTop: '2%',
  },
  payout: {
    color: Theme.black,
    fontSize: Theme.normal,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
  confirmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '2%',
    paddingHorizontal: 3,
  },
  mailText: {
    color: Theme.black,
    fontSize: Theme.medium,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: Theme.border,
    marginVertical: '3%',
    paddingBottom: 5,
  },
  usdcText1: {
    color: Theme.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  usdcText2: {
    color: Theme.orange,
    fontSize: 20,
    fontWeight: 'bold',
  },
  usdcLabel: {
    color: Theme.black,
    fontSize: 15,
    marginTop: '5%',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '2%',
  },
  rowText: {
    color: Theme.black,
    fontSize: 15,
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editView: {
    width: 15,
    height: 15,
    overflow: 'hidden',
    alignItems: 'center',
  },
  edit: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  userName: {
    color: Theme.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorMsg: {
    color: Theme.red,
    fontSize: 13,
  },
});
