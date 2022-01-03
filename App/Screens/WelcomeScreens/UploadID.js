import React, { useState } from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme'
import ImagePicker from 'react-native-image-crop-picker';

const UploadID = ({navigation}) => {
        const [frontImage, setFrontImage] = useState (null)
        const [backImage, setBackImage] = useState(null)
  
    const pickFrontImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(image => {
        setFrontImage(image.path);
        Alert .alert("Uploaded Successfully")
      })
      .catch(e => {
        console.log('Error: ', e);
      });
  };

  const pickBackImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(image => {
        setBackImage(image.path);
        Alert.alert("Uploaded Successfully")
      })
      .catch(e => {
        console.log('Error: ', e);
      });
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Welcome to</Text>
          <Text style={{...styles.heading, marginTop: 0}}>Pepper, BRIAN!</Text>
          <Text style={styles.description}>
            Verify your account to start exchanging
          </Text>
          <Text style={styles.subHeading}>Upload a photo of your ID</Text>
          <Text style={{...styles.description, marginTop:0}}>If you have two sides, Please upload both. </Text>
        <View style={styles.rowView}>
            <TouchableOpacity onPress={pickFrontImage} style={styles.topView}>
                <View style={styles.imgView}>
                    <Image resizeMode='cover' style={styles.img} source={Images.copyIcon} />
                </View>
                <Text style={styles.uploadText}>Upload Front</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickBackImage} style={styles.topView}>
                <View style={styles.imgView}>
                    <Image resizeMode='cover' style={styles.img} source={Images.copyIcon} />
                </View>
                <Text style={styles.uploadText}>Upload Back</Text>
            </TouchableOpacity>
        </View>
        <Button title={"Continue"} top={"20%"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UploadID;

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
  },
  description: {
    color: Theme.textGrey,
    fontSize: 14,
    marginTop: '2%',
    marginBottom: '10%',
    
  },
  subHeading: {
    color: Theme.white,
    fontSize: 17,
  },
  rowView: {
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
  },
  topView: {
      borderWidth:1,
      borderColor:Theme.border,
      justifyContent:"center",
      alignItems:'center',
      width:"45%",
      marginHorizontal:"3%",
      borderRadius:10,
      paddingVertical:12
  },
  imgView: {
      width:20,
      height:22,
      overflow:"hidden",
      alignItems:'center',
      marginBottom:"5%"
  },
  img: {
      width:'100%',
      height:"100%",
      alignSelf:"center",
      tintColor:Theme.white
  },
  uploadText: {
      color:Theme.textGrey,
      fontSize:12
  }
});
