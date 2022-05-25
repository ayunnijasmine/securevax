import React from 'react';
import {  StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const Start = ({navigation}) => {

    const handleSubmitPress = () => {
           
            navigation.navigate('Signup');
          
    };

    const handleSubmitPress2 = () => {
           
        navigation.navigate('Login');
      
    };

  return (
    <View style={{ flex: 1, width: '100%', resizeMode: 'contain', backgroundColor: '#192b59', }}>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View >
             
              <Image
                source={require('../Image/Logo2.png')}
                style={{
                  width: '50%',
                  height: 230,
                  alignSelf: 'center',
                  //marginBottom: 10,
                  //resizeMode: 'contain',
                  }}
              />

              <Text style={styles.text}>
                Encrypt and scan your vaccine details!
                </Text>

            </View>
    
            <TouchableOpacity
              style={styles.buttonStyle1}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle2}
              activeOpacity={0.5}
              onPress={handleSubmitPress2}>
              <Text style={styles.buttonTextStyle}>Log In</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default Start;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },

  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },

  buttonStyle1: {
    backgroundColor: '#ef7767',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 70,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    //marginTop: 15,
    marginBottom: 12,
    padding: 15,
  },

  buttonStyle2: {
    backgroundColor: '#F3966A',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 70,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 12,
    //marginBottom: 15,
    padding: 15,
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    //paddingTop: 10,
    fontSize: 25,
    //fontWeight: "bold",
  },

  text: {
    alignSelf: 'center',
    fontSize: 28,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 100,
    //marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
  },

  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    
  },
  registerTextStyle: {
    color: '#307ecc',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
    
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
});
