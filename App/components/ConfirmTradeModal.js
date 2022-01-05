import React, {useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../utils/Theme';
import Button from './Button';

const ConfirmTradeModal = ({
  equal,
  btnText,
  btnBorder,
  btnBackground,
  DATA,
  heading,
  setShow,
  onPress,
  show,
  margin
}) => {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      margin: margin ? margin : '5%',
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
    modalRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderColor: Theme.border,
      paddingBottom: 8,
      marginBottom: '3%',
    },
    modalHeading: {
      color: Theme.black,
      fontSize: Theme.headingtext,
      fontWeight: 'bold',
    },
    rowView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: '1%',
    },
    label: {
      color: Theme.black,
      fontSize: Theme.normal,
      width: '55%',
      textAlign: 'left',
    },
    equal: {
      color: Theme.black,
      fontSize: Theme.normal,
    },
    value: {
      color: Theme.black,
      fontSize: Theme.normal,
      width: '40%',
      textAlign: 'right',
    },
  });

  return (
    <TouchableWithoutFeedback>
      <ReactNativeModal
        animationOut={'bounceOut'}
        animationIn={'bounceIn'}
        isVisible={show}
        transparent={true}
        onBackdropPress={setShow}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalRow}>
              <AntDesign name="close" size={20} color={Theme.white} />
              <Text style={styles.modalHeading}>{heading}</Text>
              <TouchableOpacity onPress={setShow}>
                <AntDesign name="close" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => (
                <View style={styles.rowView}>
                  <Text style={styles.label}>{item.label}</Text>
                  {equal ? <Text style={styles.equal}>=</Text> : null}
                  <Text style={styles.value}>{item.value}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
            <Button
              borderColor={btnBorder}
              backgroundColor={btnBackground}
              onPress={onPress}
              title={btnText}
              top={'15%'}
              bottom={'5%'}
            />
          </View>
        </View>
      </ReactNativeModal>
    </TouchableWithoutFeedback>
  );
};

export default ConfirmTradeModal;
