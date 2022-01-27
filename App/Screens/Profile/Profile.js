import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import {
  chargeBank,
  chargeMoney,
  coinOrder,
  moneyPayout,
  payoutBank,
  payoutFee,
  rate,
  requestPhoneVerification,
} from '../../Services/Apis';

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
    // value: '$292,339.64',
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

const RECIPIENTDATA = [
  {
    id: 1,
    label: 'Recipient address :',
    value: '1B4evPk29C29alkjfkasdf9Fkjkjf9FkK',
    color: Theme.orange,
  },
  {
    id: 2,
    label: 'Amount sent :',
    value: '970 USDC',
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
  const [paypalModal, setPaypalModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [name, setName] = useState('Tamanna Hegel');
  const [email, setEmail] = useState('tuhafasa@gmail.com');
  const [phone, setPhone] = useState('+99 123 294 294');
  const [invitationCode, setInvitationCode] = useState('526116597...');
  const [copiedText, setCopiedText] = useState('');

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
      chargeBank()
        .then(({data}) => {
          console.log('RES: ', data);
          Alert.alert('CHARGE BANK API RUN');
        })
        .catch(e => {
          Alert.alert('Charge Bank API ERROR');
        });
      // navigation.navigate('Balance');
    } else if (val === 'Mobile Money Deposit') {
      chargeMoney()
        .then(({data}) => {
          console.log('RES: ', data);
          Alert.alert('Charge Money API RUN');
        })
        .catch(e => {
          console.log('ERROR: ', e);
          Alert.alert('Charge Money API ERROR');
        });
      // navigation.navigate('DepositScreen');
    } else if (val === 'Deposit crypto') {
      payoutBank()
        .then(({data}) => {
          console.log('RES: ', data);
          Alert.alert('Payout Bank API RUN');
        })
        .catch(e => {
          Alert.alert('Payout Bank API ERROR');
        });
      // navigation.navigate('CoinsDeposit');
    } else if (val === 'Bank withdraw') {
      moneyPayout()
        .then(({data}) => {
          console.log('RES: ', data);
          Alert.alert('Money Payout API RUN');
        })
        .catch(e => {
          Alert.alert('Money Payout API ERROR');
        });
      // navigation.navigate('BankWithdraw');
    } else if (val === 'Mobile money withdraw') {
      rate('XAF', 'USD')
        .then(({data}) => {
          console.log('RES: ', data);
          Alert.alert('Rate API RUN');
        })
        .catch(e => {
          console.log('ERROR: ', e);
          Alert.alert('Rate API ERROR');
        });
      // navigation.navigate('MobileMoneyWithdraw');
    } else if (val === 'Paypal withdraw') {
      payoutFee('200', 'NGN', 'account')
        .then(({data}) => {
          console.log('RES: ', data);
          Alert.alert('Payout Fee API RUN');
        })
        .catch(e => {
          console.log('Error: ', e);
          Alert.alert('Payout Fee API Error');
        });

      // setPaypalModal(true);
    } else if (val === 'USDC withdraw') {
        coinOrder().then(({data}) => {
          console.log("RES: ",data);
          Alert.alert("Coin Order Api Run")
        }).catch((e) => {
          console.log("Error: ",e);
          Alert.alert("Coin Order Api Error")
        })
      // setUsdcModal(true);
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
      // value={item.value}
      onPress={() => handleOnClick(item.label)}
    />
  );

  const copyToClipboard = () => {
    setModalVisible(!modalVisible);
    Clipboard.setString(invitationCode);
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
                  {name}
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
                {email}
              </Text>
              <Text style={styles.gmailText} numberOfLines={1}>
                {phone}
              </Text>
              <View style={styles.innerRow}>
                <Text style={styles.Vip}>VIP 0</Text>
                {/* <Text style={styles.verifiedText}>Not Verified</Text> */}
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
                <View
                  style={{
                    paddingHorizontal: 10,
                    marginTop: '10%',
                    marginBottom: '5%',
                  }}>
                  <Button
                    onPress={() => setEditModal(!editModal)}
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
                />
                <Text style={styles.label}>Withdraw Amount</Text>
                <CustomInput
                  width={'100%'}
                  backgroundColor={Theme.grayInput}
                  borderWidth={0.5}
                  marginVertical={'2%'}
                  color={Theme.black}
                  placeholder={'Enter Amount'}
                />
                <Text style={styles.label}>Processing fees</Text>
                <CustomInput
                  width={'100%'}
                  backgroundColor={Theme.grayInput}
                  borderWidth={0.5}
                  marginVertical={'2%'}
                  color={Theme.black}
                  placeholder={'$0.00'}
                />
                <Text style={styles.payout}>Payout amount = $00.00</Text>
                <View
                  style={{
                    paddingHorizontal: 10,
                    marginTop: '10%',
                    marginBottom: '5%',
                  }}>
                  <Button
                    onPress={() => {
                      setPaypalModal(!paypalModal), setConfirmModal(true);
                    }}
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
                  <Text style={styles.mailText}>brian@gmail.com</Text>
                </View>
                <View style={styles.confirmRow}>
                  <Text style={styles.mailText}>Payout amount :</Text>
                  <Text style={{...styles.mailText, color: Theme.orange}}>
                    $200.90
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 5,
                    marginTop: '10%',
                    marginBottom: '5%',
                  }}>
                  <Button
                    onPress={() => {
                      setConfirmModal(!confirmModal), setCongrats(true);
                    }}
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
              />
              <Text style={{...styles.usdcLabel, marginTop: '2%'}}>Amount</Text>
              <CustomInput
                value={'1000'}
                backgroundColor={Theme.grayInput}
                borderColor={Theme.grayInput}
                color={Theme.black}
                marginVertical={'2%'}
                width={'100%'}
              />
              <View style={{...styles.row1, marginTop: '5%'}}>
                <Text style={styles.rowText}>Blockchain Fees</Text>
                <Text style={styles.rowText}>30 USDC</Text>
              </View>
              <View style={styles.row1}>
                <Text style={styles.rowText}>Total amount</Text>
                <Text style={styles.rowText}>970 USDC</Text>
              </View>
              <Button
                onPress={() => {
                  setUsdcModal(!usdcModal), setUsdcConfirm(true);
                }}
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
        onPress={() => {
          setUsdcConfirm(!usdcConfirm), setUsdcCongrats(true);
        }}
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
});
