import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      const navigation = this.props.navigation;
      const navigate = navigation.navigate;
      navigate('Login');
    }, 1500);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgView}>
          <Image style={styles.img} source={Images.splashIcon}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.black,
  },
  imgView: {
    width:150,
    height:170,
    overflow:'hidden',
    alignItems:'center',
  },
  img: {
    width:'100%',
    height:'100%',
    alignSelf:'center'
  },
  walletText: {
    color: Theme.white,
    fontSize: Theme.heading,
    fontStyle: Theme.fontFamily,
  },
});
