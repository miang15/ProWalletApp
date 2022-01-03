import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import SettingComponent from '../../components/SettingComponent';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';

const DATA = [
  {
    id: 1,
    label: '1. Verify Phone Number',
    icon: Icons.Right,
  },
  {
    id: 2,
    label: '2. Proof of Address',
    icon: Icons.Right,
  },
  {
    id: 3,
    label: '3. Upload ID',
    icon: Icons.Right,
  },
  {
    id: 4,
    label: '4. Upload a video of yourself',
    icon: Icons.Right,
  },
];
const Welcome = ({navigation}) => {

  const handleOnClick = val => {
    if(val === '1. Verify Phone Number'){
      navigation.navigate("VerifyPhone")
    } else if(val === '2. Proof of Address') {
      navigation.navigate("ProofAddress")
    }
    else if(val === '3. Upload ID') {
      navigation.navigate("UploadID")
    } else {
      navigation.navigate("UploadVideo")
    }
  }

  const renderLabels = ({item}) => (
    <SettingComponent
    onPress={() => handleOnClick(item.label)}
      Title={item.label}
      rightIcon={item.icon}
      fontSize={14}
      fontWeight={'bold'}
      backgroundColor={Theme.PIN}
    />
  );
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Welcome to</Text>
          <Text style={{...styles.heading, marginTop: 0}}>Pepper, BRIAN!</Text>
          <Text style={styles.description}>
            Please complete the following items to verify your account
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderLabels}
            keyExtractor={item => item.id}
          />
          <Button title={"Continue"} top={"15%"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Welcome;

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
    marginTop: '15%',
  },
  description: {
    color: Theme.textGrey,
    fontSize: 14,
    marginTop: '2%',
    marginBottom: '10%',
    width: '75%',
  },
});
