import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Portfolio from '../Screens/Portfolio/Portfolio';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import Setting from '../Screens/Setting/Setting';
import Balance from '../Screens/Portfolio/Balance';
import Entypo from 'react-native-vector-icons/Entypo'
import Profile from '../Screens/Profile/Profile';
import Swap from '../Screens/Swap';
import TransactionHistory from '../Screens/TransactionHistory/TransactionHistory';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Balance"
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
        name="Swap"
        component={Swap}
        options={{
          tabBarLabel: 'Trade',
          tabBarIcon: ({color, size}) => (
            <View style={styles.tabIconView}>
              <Image
                resizeMode="cover"
                style={styles.tabIcon}
                source={Images.trade}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Balance"
        component={Balance}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" size={25} color={Theme.text} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <View style={styles.tabIconView}>
              <Image
                resizeMode="cover"
                style={styles.tabIcon}
                source={Images.setting}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <View style={styles.tabIconView}>
              <Image
                resizeMode="cover"
                style={styles.tabIcon}
                source={Images.more}
              />
            </View>
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
