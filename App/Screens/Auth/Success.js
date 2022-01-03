import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Images from '../../constants/Images'
import Theme from '../../utils/Theme'

const Success = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={Images.check} />
            </View>       
            <Text style={styles.success}>Successful!</Text>     
            <Text style={styles.description}>Your password has been reset succesfully</Text>
            <View style={styles.rowView}>
                <Text style={styles.gotoText}>Go to</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('BottomTab')} style={styles.btn}>
                    <Text style={styles.btnText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Theme.black,
    },
    imgView: {
        width:150,
        height:150,
        padding:22,
        borderWidth:2,
        borderRadius:100,
        borderColor:Theme.green,
        overflow:'hidden',
        alignItems:'center',
        alignSelf:'center',
        marginTop:'25%',
        marginBottom:'10%'
    },
    img: {
        width:'100%',
        height:'100%',
        alignSelf:'center'
    },
    success: {
        color:Theme.white,
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:'5%'
    },
    description: {
        color:Theme.textGrey,
        fontSize:15,
        paddingHorizontal:50,
        lineHeight:22,
        textAlign:'center'
    },
    rowView: {
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginVertical:'20%'
    },
    gotoText: {
        color:Theme.text,
        fontSize:Theme.headingtext,
    },
    btn: {
     padding:5   
    },
    btnText: {
        color:Theme.green,
        fontSize:Theme.headingtext,
        fontWeight:'bold'
    }
})
