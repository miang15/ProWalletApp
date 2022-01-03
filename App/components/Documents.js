import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Theme from '../utils/Theme';

const Documents = ({img, width, description, title}) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent:"space-between",
          backgroundColor: Theme.PIN,
          marginVertical: '3%',
          width: width ? width : "98%",
          alignSelf:"center",
          borderRadius: 8,
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical:12,
        },
        innerView: {
          width: '70%',
        },
        heading: {
          color: Theme.white,
          fontWeight: 'bold',
          fontSize: 14,
        },
        description: {
          color: Theme.textGrey,
          fontSize: 13,
          textAlign: 'justify',
          lineHeight: 18,
        },
        imgView: {
          width: 55,
          height: 55,
          overflow: 'hidden',
          alignItems: 'center',
          backgroundColor: '#C4C4C4',
          borderRadius: 10,
        },
        img: {
            width:'100%',
            height:'100%',
            alignSelf:"center"
        }
      });
      
    return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <View style={styles.imgView}>
        <Image resizeMode='cover' style={styles.img} source={img ? img : null} />
      </View>
    </View>
  );
};

export default Documents;

