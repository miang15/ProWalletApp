import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import ImagePicker from 'react-native-image-crop-picker';

const ProofAddress = ({navigation}) => {
  const [document, setDocument] = useState (null);

  const pickImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(image => {
        setDocument(image.path);
        Alert.alert("Uploaded Successfully")
      })
      .catch(e => {
        console.log('Error: ', e);
      });
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
          <Text style={styles.subHeading}>Proof of Address</Text>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.textBox}
            numberOfLines={5}
            multiline={true}
          />
          <Text style={styles.label}>Proof of Address</Text>
          <TouchableOpacity onPress={pickImage} style={styles.uploadRow}>
            <View style={styles.uploadIconView}>
              <Image style={styles.uploadImg} source={Images.upload} />
            </View>
            <Text style={styles.uploadText}>Upload Document</Text>
          </TouchableOpacity>
          <Text style={styles.bottomText}>
            Please upload the full page of your utility bill or bank statement
            with your name .{' '}
            <Text style={{...styles.bottomText, color: Theme.red}}>
              Document must be issued within last 3 months
            </Text>
          </Text>
          <Button title={'Continue'} top={'5%'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProofAddress;

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
    width: '75%',
  },
  subHeading: {
    color: Theme.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  label: {
    color: Theme.white,
    fontSize: 15,
  },
  textBox: {
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: 10,
    color: Theme.white,
    lineHeight: 40,
    textAlignVertical: 'top',
    marginTop: '2%',
    marginBottom: '10%',
  },
  uploadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 6,
    padding: 12,
    borderColor: Theme.border,
    backgroundColor: Theme.PIN,
    justifyContent: 'center',
    marginVertical: '2%',
  },
  uploadIconView: {
    width: 18,
    height: 18,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  uploadImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    tintColor: Theme.white,
  },
  uploadText: {
    color: Theme.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomText: {
    color: Theme.white,
    marginVertical: '5%',
    textAlign: 'justify',
    fontSize: 14,
  },
});
