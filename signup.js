import React, { Component } from 'react';
import {   Keyboard, ToastAndroid, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator,Image } from 'react-native';
import firebase from '../database/firebase';
import { Container, Header, Content, Item, Input, Label,Form } from 'native-base';
import moment from 'moment';

import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var hobbies = [
  {label: "Male", value: "Male"},
  {label: "Female", value: "Female"},
];

export default class Signup extends Component {
  state = {
    checked: 'first',
  };
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      Phonenumber: '',
      selectedLanguage :'',
      setSelectedLanguage:'',
      show: false,
      value: '',
      mode: 'date',
      displayFormat: 'DD/MM/YYYY',
      label: 'Date',
      isLoading: false
    }
  }

  setSelectedLanguage= (value) =>{
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  showDateTimePicker = () => {
    // alert('showDateTimePicker');
     this.setState({ show: true });
     Keyboard.dismiss();
   };
 
   hideDateTimePicker = () => {
     this.setState({ show: false });
   };
 
   handleDatePicked = value => {
     this.setState({ value: value });
     setTimeout(() => {
       this.hideDateTimePicker();
     }, 250);
   };
 
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    
    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }

    const options = [
      "Option 1",
      "Option 2"
    ];
   
    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption
      });
    }
    const { checked } = this.state;

    const {label, value, show, mode, displayFormat} = this.state;
    return (
      <View style={{ flex: 1,width: '100%', resizeMode: 'contain',backgroundColor: '#192b59', }}>

      <SafeAreaView styles={styles.container}>
      <ScrollView styles={styles.scrollView}>
      <View style={styles.container}>
       
        <Image source={require('../Image/Logo.png')}
          style={{
            width: '50%',
            height: 250,
            alignSelf: 'center',
            //margin: 10,
            //resizeMode: 'contain',
          }}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="IC/Passport No"
          maxLength={15}
        />   
         <TextInput
          style={styles.inputStyle}
          placeholder="Phone number"
          value={this.state.Phonenumber}
          onChangeText={(val) => this.updateInputVal(val, 'Phonenumber')}
          maxLength={15}
        />        
          <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <View style={styles.fixToText}>
        
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => this.registerUser()}>
            <Text style={styles.buttonTextStyle}>Create an account</Text>
        </TouchableOpacity>

        
</View>
  
      
      </View>
      </ScrollView>
        </SafeAreaView>      
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#192b59',
    paddingHorizontal: 50,
    marginTop: 50,
  },

  header: {
    textAlign: 'center',
    marginTop: 50,
  },

  inputStyle: {
    color: '#FFFFFF',
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "white",
    borderBottomWidth: 1,
    fontSize: 15,
  },
  
  button: {
    backgroundColor: '#F3966A',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    width: 320,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 50,
    padding: 10,
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    //paddingTop: 10,
    fontSize: 18,
    //fontWeight: "bold",
  },

  fixToText:{
    marginTop: 25,
  },

  loginText: {
    color: 'white',
    marginTop: 25,
    textAlign: 'center'
  },
  
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});