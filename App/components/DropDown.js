import React from 'react';
import Theme from '../utils/Theme';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function DropDown({selectedItem, list}) {
  const handleSelected = val => {
    selectedItem(val);
  }
  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {list.map(item => {
          return (
            <TouchableOpacity onPress={() => handleSelected(item)} style={styles.itemBtn}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
  );
}

const styles = StyleSheet.create({
  itemBtn: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Theme.green,
    backgroundColor: Theme.black,
    alignSelf: 'center',
    margin: '3%',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  itemText: {
    color: Theme.white,
    fontSize: 15,
    textAlign: 'center',
  },
});
