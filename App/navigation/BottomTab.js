import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import Setting from '../Screens/Setting/Setting';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../Screens/Profile/Profile';
import Swap from '../Screens/Swap';
import TransactionHistory from '../Screens/TransactionHistory/TransactionHistory';
import Balance from '../Screens/Portfolio/Balance';
import Icons from '../constants/Icons';
import Invest from '../Screens/Portfolio/Invest';
import Portfolio from '../Screens/Portfolio/Portfolio';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Invest"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 12, textAlign: 'center'},
        tabBarActiveTintColor: Theme.green,
        tabBarInactiveTintColor: Theme.text,
        tabBarStyle: {
          backgroundColor: Theme.darkGrey,
          height: 60,
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 0,
        },
      }}>
      <Tab.Screen
        name="Swap"
        component={Swap}
        options={{
          tabBarLabel: 'Swap',
          tabBarIcon: ({color, size}) => (
            <View style={{...styles.tabIconView, width: 20, height: 20}}>
              <Image
                resizeMode="cover"
                style={{
                  ...styles.tabIcon,
                  transform: [{rotate: '90deg'}],
                  tintColor: Theme.text,
                }}
                source={Icons.arrow}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({color, size}) => (
            <View style={styles.tabIconView}>
              <Image
                resizeMode="cover"
                style={styles.tabIcon}
                source={Images.portfolio}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={Invest}
        options={{
          tabBarLabel: 'Invest',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="wallet" size={20} color={Theme.text} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-alt" size={20} color={Theme.text} />
          ),
        }}
      />
      <Tab.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="clock" size={20} color={Theme.text} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabIconView: {
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
  },
  tabIcon: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});
