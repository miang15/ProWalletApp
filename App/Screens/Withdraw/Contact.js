import {
    FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Button from '../../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import Theme from '../../utils/Theme';
import PayButton from '../../components/PayButton';
import CustomInput from '../../components/CustomInput';
import ContactList from '../../components/ContactList';
import Images from '../../constants/Images';
import Congratulations from '../../components/Congratulations';
import { useState } from 'react';

const CONTACTLIST = [
    {
        id:1,
        title: "Add Members",
        number: "+92 317 6939 2040",
    },
    {
        id:2,
        title: "Akana Tino",
        number: "$Sakanatino",
        background: Theme.blue
    },
    {
        id:3,
        number: "+237 9230 2050",
        background: Theme.greyContact
    },
    {
        id:4,
        title: "Add Members",
        number: "+92 317 6939 2040",
    },
    {
        id:5,
        title: "Akana Tino",
        number: "$Sakanatino",
        background: Theme.blue
    },
    {
        id:6,
        number: "+237 9230 2050",
        background: Theme.greyContact
    },
]
const Contact = ({navigation}) => {
  const [congrats, setCongrats] = useState(false);

    const renderContacts = ({item}) => (
        <ContactList
        onPress={() => setCongrats(true)}
         title={item.title}
         number={item.number}
         backgroundColor={item.background} 
        />
    )

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cross}>
          <Entypo name="cross" size={24} color={Theme.white} />
        </TouchableOpacity>
        <View style={styles.centerView}>
          <Text style={styles.dollar}>$10</Text>
          <Text style={styles.pepper}>PEPPER PRO</Text>
        </View>
        <PayButton margin={1} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>To</Text>
        <CustomInput
          horizontal={'3%'}
          width={'95%'}
          placeholder={'Name, $CAshtag, SMS, Email'}
          backgroundColor={Theme.darkGrey}
          borderColor={Theme.darkGrey}
        />
        <Text style={styles.suggested}>Suggested</Text>
        <ContactList onPress={() => setCongrats(true)} img={Images.profilePic} title={"Armandine Takafor"} number={"+923123456789"} />
        <Text style={styles.suggested}>Contact</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={CONTACTLIST}
        renderItem={renderContacts}
        keyExtractor={item => item.id}
        />
      </ScrollView>
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
      color:Theme.white,
      fontSize:18,
      fontWeight:"bold",
      marginHorizontal:"3%",
      marginTop:"5%",
      marginBottom:"2%"
  }
});
