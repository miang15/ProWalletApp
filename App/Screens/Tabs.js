import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopTabs from '../components/TopTabs';
import Theme from '../utils/Theme';

const Tabs = () => {
  return (
    <View style={styles.container}>
      <TopTabs />
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
});
