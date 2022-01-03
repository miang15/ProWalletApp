import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Theme from '../utils/Theme';

const ConfirmationComponent = ({labelText, valueText, descriptionText}) => {
  const styles = StyleSheet.create({
    rowView: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-between',
    },
    label: {
      color: Theme.white,
      fontSize: 15,
    },
    orangeText: {
      color: Theme.orangeText,
      fontSize: 13,
    },
    underLine: {
      borderWidth: 0.3,
      opacity: 0.3,
      marginVertical: '2%',
      borderColor: Theme.border,
    },
    description: {
      color: Theme.textGrey,
      textAlign: 'center',
      marginVertical: '2%',
    },
  });

  return (
    <View>
      <View style={styles.rowView}>
        <Text style={styles.label}>{labelText}</Text>
        <Text style={styles.orangeText}>{valueText}</Text>
      </View>
      {descriptionText ? (
        <Text style={styles.description}>{descriptionText}</Text>
      ) : (
        <View style={styles.underLine} />
      )}
    </View>
  );
};

export default ConfirmationComponent;
