import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDown from '../../components/DropDown';

const VerifyPhone = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('+60');
  const [list, setList] = useState([
    '+92',
    '+91',
    '+97',
    '+60',
    '+62',
    '+65',
    '+80',
    '+85',
  ]);
  const refRBSheet = useRef();

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    setCountryCode(val);
  };
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Welcome to</Text>
          <Text style={{...styles.heading, marginTop: 0}}>Pepper, BRIAN!</Text>
          <Text style={styles.description}>
            Verify your account to start exchanging
          </Text>
          <Text style={styles.subHeading}>Verify phone number</Text>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.rowView}>
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={styles.innerRow}>
              <Text style={styles.countryCode}>{countryCode}</Text>
              <View style={styles.downImgView}>
                <Image style={styles.downArrow} source={Images.Down} />
              </View>
            </TouchableOpacity>
            <TextInput style={styles.textInput} />
          </View>
          <Button title={'Send Code'} top={'15%'} />
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

export default VerifyPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    margin: '3%',
  },
  heading: {
    color: Theme.white,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '5%',
  },
  description: {
    color: Theme.textGrey,
    fontSize: 14,
    marginTop: '2%',
    marginBottom: '10%',
    width: '75%',
  },
  subHeading: {
    color: Theme.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: '10%',
  },
  label: {
    color: Theme.white,
    fontSize: 15,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: 10,
    marginVertical: '2%',
    paddingHorizontal: 5,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '2%',
  },
  countryCode: {
    color: Theme.textGrey,
    fontSize: 15,
    marginRight: '5%',
  },
  downImgView: {
    width: 15,
    height: 15,
    overflow: 'hidden',
    alignItems: 'center',
  },
  downArrow: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    tintColor: Theme.textGrey,
  },
  textInput: {
    width: '80%',
    color: Theme.white,
  },
});
