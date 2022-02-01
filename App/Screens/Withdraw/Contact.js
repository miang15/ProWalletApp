import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import Button from '../../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import Theme from '../../utils/Theme';
import PayButton from '../../components/PayButton';
import CustomInput from '../../components/CustomInput';
import ContactList from '../../components/ContactList';
import Images from '../../constants/Images';
import Congratulations from '../../components/Congratulations';
import {useRoute} from '@react-navigation/native';
import Contacts from 'react-native-contacts';
import { cashPay } from '../../Services/Apis';

const CONTACTLIST = [
  {
    id: 1,
    title: 'Add Members',
    number: '+92 317 6939 2040',
  },
  {
    id: 2,
    title: 'Akana Tino',
    number: '$Sakanatino',
    background: Theme.blue,
  },
  {
    id: 3,
    number: '+237 9230 2050',
    background: Theme.greyContact,
  },
  {
    id: 4,
    title: 'Add Members',
    number: '+92 317 6939 2040',
  },
  {
    id: 5,
    title: 'Akana Tino',
    number: '$Sakanatino',
    background: Theme.blue,
  },
  {
    id: 6,
    number: '+237 9230 2050',
    background: Theme.greyContact,
  },
];

const Contact = ({navigation}) => {
  const route = useRoute();
  const values = route?.params?.item;
  const [congrats, setCongrats] = useState(false);
  const [allContacts, setAllContacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  const getContacts = async () => {
    let status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      },
    );
    console.log('STATUS: ', status);
    if (status === 'denied' || status === 'never_ask_again') {
      Alert.alert('Permissions not granted to access Contacts');
    } else {
      Contacts.getAll()
        .then(contacts => {
          setAllContacts(contacts);
          setLoading(false);
        })
        .catch(e => {
          console.log(e);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const handlePay = () => {
      setEmailError('')

      if(email == ''){
        setEmailError("Email is Required")
      } else if(!email.match(emailRegex)){
        setEmailError("Enter valid Email")
      } else {
        const data = {
          amount: values,
          receiver: email
        }
        cashPay(data).then(({data}) => {
          console.log("RES: ",data);
          setCongrats(true);
        }).catch((e) => {
          console.log("Error: ",e?.response?.data);
        })
      }
  }

  const renderContacts = ({item, index}) => (
    <ContactList
      // onPress={() => setCongrats(true)}
      title={item.displayName}
      number={item.phoneNumbers[0].number}
      backgroundColor={index % 2 == 0 ? Theme.orange : Theme.blue}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cross}>
          <Entypo name="cross" size={24} color={Theme.white} />
        </TouchableOpacity>
        <View style={styles.centerView}>
          <Text style={styles.dollar}>{values}</Text>
          <Text style={styles.pepper}>PEPPER PRO</Text>
        </View>
        <PayButton onPress={handlePay} margin={1} />
      </View>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: Theme.black,
          }}>
          <ActivityIndicator size="small" color={Theme.orange} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.label}>To</Text>
          <CustomInput
            horizontal={'3%'}
            width={'95%'}
            placeholder={'Email'}
            value={email}
            onChangeText={setEmail}
            backgroundColor={Theme.darkGrey}
            borderColor={Theme.darkGrey}
          />
          {emailError ? <Text style={styles.errorMsg}>{emailError}</Text> : null}
          <Text style={styles.suggested}>Suggested</Text>
          {allContacts ? (
            <ContactList
              // onPress={() => setCongrats(true)}
              title={allContacts[3]?.displayName}
              number={allContacts[3]?.phoneNumbers[0].number}
            />
          ) : null}
          <Text style={styles.suggested}>Contact</Text>
          {allContacts ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={allContacts}
              renderItem={renderContacts}
              keyExtractor={item => item.id}
            />
          ) : null}
        </ScrollView>
      )}
      <Congratulations
        visible={congrats}
        setVisible={() => setCongrats(!congrats)}
        description={'Your transaction has been completed successfully'}
      />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: '5%',
    marginBottom: '3%',
  },
  cross: {
    padding: 5,
    marginRight: '10%',
  },
  centerView: {
    alignItems: 'center',
  },
  dollar: {
    color: Theme.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pepper: {
    color: Theme.white,
    fontSize: 13,
  },
  label: {
    color: Theme.textGrey,
    fontSize: 15,
    marginHorizontal: '4%',
  },
  suggested: {
    color: Theme.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: '3%',
    marginTop: '5%',
    marginBottom: '2%',
  },
  errorMsg: {
    color:Theme.red,
    fontSize:13,
    marginHorizontal:"3%"
  }
});
