import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import Theme from '../../utils/Theme';
import Button from '../../components/Button';
import ConfirmTradeModal from '../../components/ConfirmTradeModal';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Congratulations from '../../components/Congratulations';
import DropDown from '../../components/DropDown';
import RBSheet from 'react-native-raw-bottom-sheet';

const Data = [
  {
    id: 1,
    num: 1,
  },
  {
    id: 2,
    num: 2,
  },
  {
    id: 3,
    num: 3,
  },
  {
    id: 4,
    num: 4,
  },
  {
    id: 5,
    num: 5,
  },
  {
    id: 6,
    num: 6,
  },
  {
    id: 7,
    num: 7,
  },
  {
    id: 8,
    num: 8,
  },
  {
    id: 9,
    num: 9,
  },
  {
    id: 10,
    num: '     ',
  },
  {
    id: 11,
    num: 0,
  },
  {
    id: 12,
    num: <Entypo name="erase" size={24} color={Theme.white} />,
  },
];

const PayAmount = ({navigation}) => {
  const [inputNum, setInputNum] = useState('$0');
  const [congrats, setCongrats] = useState(false);
  const [label, setLabel] = useState("USD");

  const refRBSheet = useRef();
  const [list, setList] = useState([
    'GHS', 'INR', 'PKR', 'EUR', 'USD'
  ]);

  const handleSelectedItem = val => {
    refRBSheet.current.close();
    setLabel(val);
  };

  const handleNumInput = (item, index) => {
    if (index === 11) {
      let b = inputNum.slice(0, inputNum.length - 1);
      setInputNum(b);
      console.log('SLICE: ', b);
    } else if (inputNum) {
      let a = inputNum.toString().concat(item.toString());
      setInputNum(a);
      console.log('value ', a);
    } else {
      setInputNum(item.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: '3%'}}>
          <Text style={styles.textInput}>{inputNum}</Text>
          <TouchableOpacity onPress={() => refRBSheet.current.open()} style={styles.pickerRow}>
            <Text style={styles.text1}>{label}</Text>
            <AntDesign name="down" size={12} color={Theme.textGrey} />
          </TouchableOpacity>
          <View style={{marginTop:"10%"}}>
            <FlatList
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'space-around',
                marginBottom: '10%',
              }}
              style={{flexGrow: 0}}
              showsVerticalScrollIndicator={false}
              data={Data}
              renderItem={({item, index}) => (
                <View>
                  <TouchableOpacity
                    disabled={index === 9 ? true : false}
                    onPress={() => handleNumInput(item.num, index)}
                    style={styles.numBtn}>
                    <Text style={styles.numPad}>{item.num}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <Button
            onPress={() =>navigation.navigate("Contact")}
            title={'Pay'}
            backgroundColor={Theme.orange}
            borderColor={Theme.orange}
          />
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

export default PayAmount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  textInput: {
    color: Theme.white,
    width: '90%',
    marginVertical: '15%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  numRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numBtn: {
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  numPad: {
    color: Theme.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pickerRow: {
      backgroundColor:Theme.darkGrey,
      alignSelf:'center',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"space-between",
      paddingHorizontal:15,
      paddingVertical:8,
      borderRadius:8,
      marginVertical:"5%"
  },
  text1: {
      color:Theme.white,
      fontSize:15,
      fontWeight:'bold',
      marginHorizontal:"3%"
  }
});
