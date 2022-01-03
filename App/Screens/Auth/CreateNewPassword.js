import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

const CreateNewPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.imgView}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={Images.greenLock}
            />
          </View>
          <Text style={styles.heading}>Create New Password</Text>
          <Text style={styles.description}>
            Your new password must be different from previously used password
          </Text>
          <Text style={styles.label}>Create new password</Text>
          <CustomInput placeholder='Enter new password' LeftIcons={Icons.Lock} RightIcons={Icons.eye} secureTextEntry={true} />
          <Text style={styles.label}>Create new password</Text>
          <CustomInput placeholder='Enter new password' LeftIcons={Icons.Lock} RightIcons={Icons.eye} secureTextEntry={true}/>
        <Button title='Save' top='8%' onPress={() => navigation.navigate('Success')}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    margin: '3%',
  },
  imgView: {
    width: 130,
    height: 130,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Theme.darkGrey,
  },
  img: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  heading: {
    color: Theme.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '2%',
  },
  description: {
      color:Theme.textGrey,
      fontSize:15,
      textAlign:'center',
      marginBottom:'5%'
  },
  label: {
      color:Theme.border,
      marginTop:"3%"
  }
});
