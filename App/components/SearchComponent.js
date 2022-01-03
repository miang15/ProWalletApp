import React,{useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import Icons from '../constants/Icons';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
const SearchComponent = ({placeholder, onPress}) => {
const [search, setSearch] = useState('')
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconView} onPress={onPress}>
      <Image style={styles.backIcon} source={Images.left} resizeMode="contain" />
      </TouchableOpacity>
      <TextInput
      style={styles.input}
      placeholderTextColor={Theme.white}
       placeholder={placeholder} 
       value={search}
       onChangeText={setSearch}
       />
       <View/>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
      marginTop:"5%",
      width:"94%",
    backgroundColor: Theme.text,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: '3%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: '3%',
  },
  backIconView: {
    width:20,
    height:20,
    overflow:'hidden',
    alignItems:'center',
  },
  backIcon:{
      width:'100%',
      height:'100%',
      alignSelf:'center'
    },
  input:{
      height:40,
      width:'50%',
      color:Theme.white
  }
 
});
