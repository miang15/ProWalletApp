import React, { useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Images from '../constants/Images';
import Theme from '../utils/Theme';

const Congratulations = ({visible, setVisible, description, margin}) => {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      margin: margin ? margin : '2%',
      backgroundColor: Theme.white,
      borderRadius: 20,
      padding: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    imgView: {
        width:80,
        height:80,
        overflow:"hidden",
        alignItems:"center",
        borderRadius:50,
        alignSelf:"center",
        marginVertical:"10%"
    },
    img: {
        width:"100%",
        height:"100%",
        alignSelf:"center"
    },
    heading: {
        color:Theme.black,
        fontSize:25,
        textAlign:"center",
        alignSelf:"center",
        marginBottom:"5%"
    },
    description: {
        color:Theme.border,
        fontSize:16,
        textAlign:'center',
        alignSelf:"center",
        marginBottom:"10%"
    },
    closeBtn: {
        alignSelf:'center',
        paddingHorizontal:5,
        alignItems:"center",
        marginVertical:"10%"
    },
    close: {
        color:Theme.black,
        fontSize:16,
        fontWeight:'bold',
        textDecorationLine:"underline",
    }
  });
  return (
    <TouchableWithoutFeedback onPress={setVisible} >
      <ReactNativeModal
        animationOut={'bounceOut'}
        animationIn={'bounceIn'}
        isVisible={visible}
        transparent={true}
        onBackdropPress={setVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.imgView}>
                <Image resizeMode='cover' style={styles.img} source={Images.group48} />
            </View>
            <Text style={styles.heading}>Congratulations!!!</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity onPress={setVisible} style={styles.closeBtn}>
                <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </TouchableWithoutFeedback>
  );
};

export default Congratulations;
