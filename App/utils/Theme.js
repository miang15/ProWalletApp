import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Theme = {
  white: '#FFFFFF',
  whiteText: '#CFCFCF',
  golden: '#FABC44',
  green: '#39B54A',
  border: '#7F8D81',
  sky: '#40BFFF',
  blue: '#487FEC',
  lockBg: '#1d2027',
  smalltext: 'rgba(255, 255, 255, 0.6)',
  black: '#000000',
  darkGrey: '#191919',
  bitcoinYellow: '#F7931A',
  orange: '#FF4F12',
  ThreeD:"#3D3D3D",
  yellowOrange:"#ECB527",
  textGrey: 'rgba(255, 255, 255, 0.7)',
  text: '#A0A7C3',
  pink: '#EF5DA8',
  darkPink:"#FF27C3",
  PIN: '#191919',
  red: '#F6455C',
  redBackground: '#310E13',
  heading: 28,
  normal: 16,
  headingtext: 18,
  title: 20,
  medium: 15,
  small: 12,
  toggle: '#26283C',
  medium: 14,
  cardcolor: '#161B22',
  titletext: 24,
  iconBackground: '#202832',
  card: ' rgba(255, 255, 255, 0.05)',
  text: '#9098B1',
  smalltitle: 'rgba(255, 255, 255, 0.8)',
  grey: '#33363C',
  orangeText:"#F69510",
  blackish: '#1D2027',
  darkRow: '#0D0D0D',
  fontFamily: 'ProstoOne-Regular',
  backgroundColor:
    'linear-gradient(180deg, rgba(0, 0, 0, 0.61) 0%, rgba(0, 0, 0, 0.3) 100%)',
  lightPurple: '#A0A7C3',
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  heightPer: Dimensions.get('window').height / 100,
  widthPer: Dimensions.get('window').width / 100,

  wp,
  hp,
  containerStyle: {
    backgroundColor: '#F7F8FA',
    flex: 1,
  },
};

export default Theme;