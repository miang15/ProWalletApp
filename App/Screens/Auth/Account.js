import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import Theme from '../../utils/Theme';
import Button from '../../components/Button';
import Images from '../../constants/Images';
import { useNavigation } from '@react-navigation/core';


const Account = () => {
    const navigation=useNavigation();
    const navigate=navigation.navigate
    return (
        <View style={styles.container}>
        
        <Image source={Images.logo} style={styles.imageContainer}/> 
        <Button title='Login' width="90%" onPress={()=>navigate('Login')}/>

        <Button title='SignUp' width="90%" transparent top={30} onPress={()=>navigate('Register')}/>
           

        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container:{
      
       flex:1,
      
       justifyContent:'center',
       alignItems:'center',
        
        backgroundColor: Theme.black,
    },
    imageContainer:{
        height:173,
        width:173,
        bottom:65,
        
    }

})
