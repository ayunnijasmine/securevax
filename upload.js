import React,{useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { imagePickerOptions, FireBaseStorage, getFileLocalPath, uploadFileToFireBase, uploadImage } from './utils.js';
import { Container, Picture } from './styles.js';

export default function Upload() {

  const [imageURI, setImageURI] = useState(null);
  const uploadFile = () => {
    launchImageLibrary(imagePickerOptions, imagePickerResponse => {
      const { didCancel, error } = imagePickerResponse;
      if (didCancel) {
        alert('Post canceled');
      } else if (error) {
        alert('An error occurred: ', error);
      
      } else {
        setImageURI(imagePickerResponse.assets[0].uri);
        console.log(imageURI);
        // uploadFileToFireBase(imageURI);
        uploadImage(imageURI, "testimg1.png");
      }
    });
  };

  return (
    <View style={styles.container}>


      
      <Image
        source={require('../Image/Logo.png')}
        style={{
        width: '80%',
        height: 230,
        alignSelf: 'center',
        margin: 50,
        //resizeMode: 'contain',
        }}
      />

      <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={uploadFile}>
            <Text style={styles.buttonTextStyle}>Upload</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%', 
    resizeMode: 'contain', 
    backgroundColor: '#192b59',
    padding: 25,
  },

  buttonStyle: {
    backgroundColor: "#EA5367",
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 55,
    width: '75%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    //marginLeft: 100,
    //marginRight: 100,
    marginTop: 80,
    marginBottom: 25,
    padding: 10,
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    //padding: 20,
    fontSize: 22,
    //fontWeight: "bold",
  },
});