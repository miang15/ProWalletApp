import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../utils/Theme';
import {List} from 'react-native-paper';

const dummy = props => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section>
      <View style={styles.container}>
        <View style={styles.headingBg}>
          <View style={styles.statusBtcBg}>
            <Text style={styles.boldText}>Status : </Text>
            <Text style={{...styles.boldText, color: Theme.green}}>
              Completed
            </Text>
          </View>
          <Text style={styles.boldText}>BTC 0.1250041</Text>
        </View>
        <View style={styles.datePriceBg}>
          <Text style={styles.date}>12/12/2021</Text>
          <Text style={{...styles.date, color: Theme.white}}>$ 20.54</Text>
        </View>
      </View>

      <List.Accordion
        style={{height: 44, backgroundColor: Theme.green, width: '100%'}}
        left={props => <List.Icon {...props} />}
        theme={{colors: {primary: 'blue'}}}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
          style={{backgroundColor: 'yellow'}}
          titleStyle={[styles.textContainer, {backgroundColor: 'blue'}]}
          left={null}
          left={props => (
            <List.Icon {...props} style={{margin: 0}} icon={'account-circle'} />
          )}

          // key={index}
        />
        {/* <Text style={styles.boldText}>Sent Address</Text>
        <Text style={styles.date}>KX2929XKLKDF92KALKDFKD29LADK92LKJDFK</Text>
        <View style={styles.feeAmountBg}>
          <Text style={styles.boldText}>Fee</Text>
          <Text style={styles.boldText}>Amount</Text>
        </View>
        <View style={styles.feeAmountBg}>
          <Text style={styles.boldText}>-0.05468</Text>
          <Text style={styles.boldText}>-2.25468</Text>
        </View>
        <Text style={{...styles.boldText, marginTop: '3%'}}>TRX ID:</Text>
        <Text style={styles.date}>akd2lkadk9lkqe9kadkf</Text> */}
      </List.Accordion>
    </List.Section>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.grey,
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    borderRadius: 8,
  },
  headingBg: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBtcBg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    color: Theme.white,
    fontSize: Theme.medium,
    fontWeight: 'bold',
  },
  datePriceBg: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },
  date: {
    color: Theme.whiteText,
    fontSize: Theme.small,
    fontWeight: 'bold',
  },
  expandContainer: {
    //    justifyContent:"flex-start",
    backgroundColor: 'red',
    width: '100%',
  },
  feeAmountBg: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    marginTop: '2%',
  },
});
export default dummy;
