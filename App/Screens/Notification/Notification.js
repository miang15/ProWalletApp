import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Theme from '../../utils/Theme';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notification</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Notifications will appear here</Text>
        <Text style={styles.refresh}>Refresh</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  heading: {
    color: Theme.white,
    textAlign: 'center',
    marginVertical: '8%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerContainer: {
    flex:1,
    justifyContent: 'center',
    padding:20,
    marginBottom:"20%"
  },
  text: {
    color: Theme.white,
    textAlign: 'center',
  },
  refresh: {
      color:Theme.green,
      textAlign:'center',
      marginVertical:'5%'
  }
});
