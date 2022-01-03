import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Theme from '../utils/Theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fingerprint from '../Screens/FingerPrint/Fingerprint';
import Buy from '../Screens/Buy';
import Sell from '../Screens/Sell';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.white,
        labelStyle: {
          fontSize: 15,
          top: 10,
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor: Theme.white,
        tabStyle: {
          height: 55,
        },
        tabBarIndicatorStyle: {
          height: 50,
          borderRadius: 10,
          backgroundColor: Theme.grey,
        },
        tabBarStyle: {
          backgroundColor: Theme.black,
          height: 50,
          marginVertical:"5%",
          marginHorizontal:'2%'
        },
        tabBarLabelStyle: {
          fontSize: 15,
          textTransform:"none",
          alignSelf:'center'
        },
      }}>
      <Tab.Screen name="Buy" component={Buy} options={{
          tabBarLabel: 'Buy'}} />
      <Tab.Screen name="Sell" component={Sell} options={{
          tabBarLabel: 'Sell'}}/>
    </Tab.Navigator>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.darkGrey,
    borderRadius: 4,
    marginVertical: '8%',
    marginHorizontal: '3%',
    alignItems: 'center',
  },
  text: {
    color: Theme.white,
    textAlign: 'center',
    fontSize: Theme.normal,
  },
  btn: {
    width: '30%',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Theme.grey,
  },
});
