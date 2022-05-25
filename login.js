import React, { Component } from 'react';
import { SafeAreaView,ScrollView,StyleSheet, Text, TouchableOpacity, Image, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { color } from 'react-native-reanimated';
import firebase from '../database/firebase';


export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to sign in!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(

        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
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
            marginTop: 60,
            //resizeMode: 'contain',
          }}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />

        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => this.userLogin()}>
            <Text style={styles.buttonTextStyle}>Log In</Text>
          </TouchableOpacity>

           
                       
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
    
  },
  
  scrollView: {
      
  },

  inputStyle: {
    color: '#FFFFFF',
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "white",
    borderBottomWidth: 1,
  },

  button: {
    backgroundColor: '#F3966A',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 40,
    //marginBottom: 15,
    padding: 10,
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    //paddingTop: 10,
    fontSize: 18,
    //fontWeight: "bold",
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
    backgroundColor: '#fff'
  }
});