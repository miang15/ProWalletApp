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
  View,
} from 'react-native';
import Header from '../../components/Header';
import WalletComponent from '../../components/WalletComponent';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import ImagePicker from 'react-native-image-crop-picker';
import Clipboard from '@react-native-community/clipboard';

const DATA = [
  {
    id: 1,
    img: Images.Shield,
    label: 'KYC Verification',
  },
  {
    id: 2,
    img: Images.Wallet,
    label: 'Balance',
    value: '$292,339.64',
  },
  {
    id: 3,
    img: Images.ArrowDown,
    label: 'Deposit cash',
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
    img: Images.Shield,
    label: 'Security',
  },
  {
    id: 9,
    img: Images.Wallet,
    label: 'Logout',
  },
];
const Profile = ({navigation}) => {
  const [hide, setHide] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [invitationCode, setInvitationCode] = useState("526116597...")
  const [copiedText, setCopiedText] = useState('')

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
    } else if (val === 'Balance') {
      navigation.navigate('Balance');
    } else if (val === 'Deposit') {
      navigation.navigate('Deposit');
    } else if (val === 'Withdraw') {
      navigation.navigate('Withdraw');
    } else if (val === 'Banking') {
      navigation.navigate('BankingDetails');
    }
     else {
      Alert.alert('Screen Not Available');
    }
  };
  const renderWallet = ({item}) => (
    <WalletComponent
      leftIcon={item.img}
      title={item.label}
      value={item.value}
      onPress={() => handleOnClick(item.label)}
    />
  );

  const copyToClipboard = () => {
    setModalVisible(!modalVisible);
    Clipboard.setString (invitationCode)
  }

  return (
    <View style={styles.container}>
      <Header title={'Account'} onPress={() => navigation.goBack()} backgroundColor={Theme.darkGrey} />
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
              <Text style={styles.gmailText} numberOfLines={1}>
                tuhafasa@gmail.com
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
            <Text style={styles.valueText}>123456</Text>
          ) : (
            <Text style={styles.valueText}>******</Text>
          )}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.referBtn}>
            <Text style={styles.referText}>{copiedText ? copiedText : "Refer Friends to Earn"}</Text>
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
              <TouchableOpacity onPress={() => copyToClipboard()} style={styles.copyRow}>
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
        {/* <TouchableWithoutFeedback
        onPress={() => setModalVisible(!modalVisible)}
        style={{flex: 1}}>
        <ReactNativeModal
          animationOut={'bounceOut'}
          animationIn={'bounceIn'}
          isVisible={modalVisible}
          transparent={true}
          onBackdropPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalRow}>
                <AntDesign name="close" size={20} color={Theme.white} />
                <Text style={styles.modalHeading}>
                  {'Receive ' + selectedCoin}
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.close}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ReactNativeModal>
      </TouchableWithoutFeedback> */}
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
    borderWidth:1,
    borderColor:Theme.green,
    borderRadius: 20,
    paddingVertical: 50,
    paddingHorizontal:25,
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
    alignItems: 'center',
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
  },
  gmailText: {
    color: Theme.white,
    fontSize: 14,
    marginBottom: '3%',
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
    color:Theme.white,
    textAlign:'center',
    marginBottom:"10%",
    fontSize:15,
    fontWeight:'bold'
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeading: {
    color: Theme.black,
    fontSize: Theme.headingtext,
    fontWeight: 'bold',
  },
  close: {
    paddingHorizontal: 5,
  },
});
