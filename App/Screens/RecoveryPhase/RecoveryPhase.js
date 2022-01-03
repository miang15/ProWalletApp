import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import {
    Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

const RecoveryPhase = () => {
  const navigation=useNavigation();
  const [warning, setWarning] = useState(false)
  const [data, setData] = useState([
    'awful',
    'render',
    'rug',
    'more',
    'foot',
    'excess',
    'vivid',
    'page',
    'cash',
    'bullet',
    'glass',
    'figure',
  ]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Your recovery phase</Text>
              <Text style={styles.description}>
            Write down or copy these words in right order and save them
            somewhere safe.
          </Text>
          <View style={styles.itemView}>
            {data.map((item,index) => {
              return (
                <TouchableOpacity style={styles.chipItem}>
                  <Text style={styles.chipText}>{index+1 + '.'}  {item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity style={{alignSelf:"center", paddingHorizontal:10, paddingVertical:5}}>
          <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.innerContainer}>
      { warning ?  <View style={styles.rowView}>
            <View style={styles.alertView}>
                <Image style={styles.alertImg} source={Images.alert} />
            </View>
            <Text style={styles.alertText}>Never share recovery phrase with anyone, store it securely!</Text>
        </View> : null }
        <Button title="Continue" onPress={() => setWarning(!warning)} top='3%' />
      </View>
    </View>
  );
};

export default RecoveryPhase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
    justifyContent:'space-between'
  },
  innerContainer: {
    padding: 20,
    marginVertical: '5%',
  },
  heading: {
    color: Theme.white,
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: '3%',
  },
  description: {
    color: Theme.text,
    textAlign: 'center',
  },
  itemView:{
      flex: 1, 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      paddingHorizontal:20,
      marginVertical:'10%',
      alignSelf:'center',
      justifyContent:"center"
    },
  chipItem: {
    borderWidth: 1,
    borderColor: Theme.green,
    borderRadius: 3,
    marginBottom:"1%",
    paddingVertical: 5,
    alignSelf:'center',
    paddingHorizontal: 10,
  },
  chipText: {
    color: Theme.green,
    fontSize:13
  },
  copyText: {
      color:Theme.red,
      textAlign:'center',
      fontWeight:'bold',
      fontSize:15  
  },
  rowView: {
      flexDirection:'row',
      backgroundColor:Theme.redBackground,
      marginVertical:'3%',
      alignItems:'center',
      paddingHorizontal:10,
      paddingVertical:8,
  },
  alertView:{
    width:20,
    height:20,
    alignItems:'center',
    alignSelf:'center',
    overflow:'hidden',
  },
  alertImg: {
      width:'100%',
      height:'100%',
      alignSelf:'center'
  },
  alertText: {
      color:Theme.red,
      textAlign:'center',
      paddingHorizontal:5
  }
});
