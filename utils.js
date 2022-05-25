import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';
import firebase from '../database/firebase'

export const FireBaseStorage =  firebase.storage();
export const imagePickerOptions = {
    noData: true,
  };
  
  const getFileLocalPath = response => {
    const { path, uri } = response;
    return Platform.OS === 'android' ? path : uri;
  };
  
  const createStorageReferenceToFile = response => {
    const { fileName } = response;
    console.log("response:" + response);
    console.log(fileName);
    return FireBaseStorage.ref(`test/${fileName}`);
  };
  
  export const uploadFileToFireBase = response => {
    const fileSource = getFileLocalPath(response);
    const storageRef = createStorageReferenceToFile(response);
    // console.log("firebase: ")
    console.log(response)

    return storageRef.put(fileSource, {
        contentType: 'image/jpg',
    });
  };

  export const uploadImage = (path, imgName) => {
    let ref = FireBaseStorage.ref(imgName);
    let task = ref.put(path);

    task.then(()=>{
      console.log("uploaded");
    }).catch(e=> console.log("some shit happened: ", e));
  }