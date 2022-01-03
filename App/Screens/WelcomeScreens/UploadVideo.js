import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Button from '../../components/Button';
import Documents from '../../components/Documents';
import Header from '../../components/Header';
import TopTabs from '../../components/TopTabs';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import Buy from '../Buy';
import Sell from '../Sell';
import ImagePicker from 'react-native-image-crop-picker';

const DATA = [
  {
    id: 1,
    title: '1. Record yourself',
    description: 'Turn your face slowly to the left and to the right',
  },
  {
    id: 2,
    title: '2. ID Card',
    description:
      'Move your ID towards the camera until the information is readable and hold for 3 seconds. Make sure the ID is readable',
  },
  {
    id: 3,
    title: '3. Write a note include the text:',
    description: "- Todays date " + "\n" + "- Your signature",
  },
];
const UploadVideo = ({navigation}) => {
  const [selected, setSelected] = useState(1);
  
  const renderDocuments = ({item}) => (
    <Documents title={item.title} description={item.description} />
  )

  const [video, setVideo] = useState(null);

  const pickVideo = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'video',
      includeBase64: true,
    })
      .then(data => {
        setVideo(data.path);
        Alert .alert("Uploaded Successfully")
      })
      .catch(e => {
        console.log('Error: ', e);
      });
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Upload a video of</Text>
          <Text style={{...styles.heading, marginTop: 0}}>yourself</Text>
          <Text style={styles.description}>
            Please upload a video of yourself following these steps.
          </Text>
          <View style={styles.topRowView}>
            <TouchableOpacity
              onPress={() => setSelected(1)}
              style={{
                ...styles.Btn,
                backgroundColor: selected === 1 ? '#252525' : Theme.darkRow,
              }}>
              <Text
                style={{
                  ...styles.label,
                  color: selected === 1 ? Theme.white : Theme.textGrey,
                }}>
                Instructions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected(2)}
              style={{
                ...styles.Btn,
                backgroundColor: selected === 2 ? '#252525' : Theme.darkRow,
              }}>
              <Text
                style={{
                  ...styles.label,
                  color: selected === 2 ? Theme.white : Theme.textGrey,
                }}>
                Video Demo
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderDocuments}
            keyExtractor={item => item.id}
          />
          <TouchableOpacity onPress={pickVideo} style={styles.uploadRow}>
            <View style={styles.uploadIconView}>
              <Image style={styles.uploadImg} source={Images .upload} />
            </View>
            <Text style={styles.uploadText}>Upload Video</Text>
          </TouchableOpacity>
          <Button title={"Continue"} top={"6%"} bottom={"5%"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UploadVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  innerContainer: {
    margin: '3%',
  },
  heading: {
    color: Theme.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    color: Theme.textGrey,
    fontSize: 14,
    marginTop: '2%',
    marginBottom: '8%',
    width: '80%',
  },
  subHeading: {
    color: Theme.white,
    fontSize: 17,
  },
  topRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.darkRow,
    borderRadius: 10,
    marginBottom:"5%"
  },
  Btn: {
    width: '50%',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
  },
  label: {
    color: Theme.white,
    fontSize: 14,
    textAlign: 'center',
  },
  uploadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 6,
    padding: 12,
    borderColor: Theme.border,
    backgroundColor: Theme.PIN,
    justifyContent: 'center',
    marginVertical: '2%',
  },
  uploadIconView: {
    width: 18,
    height: 18,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  uploadImg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    tintColor: Theme.white,
  },
  uploadText: {
    color: Theme.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
