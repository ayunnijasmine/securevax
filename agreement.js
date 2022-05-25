import React from 'react';
import { StyleSheet, View, Text, ScrollView,  Image, TouchableOpacity, KeyboardAvoidingView, SectionList } from 'react-native';


const agreement = ({navigation}) => {

    const handleSubmitPress = () => {
           
            navigation.navigate('Start');
          
    };
   
    const TermsConditions =[{
      title: "Terms & Conditions",
      data: [
        {
          id: "1",
          term: "term #1"
        },
        {
          id: "2",
          term: "rules and privacy policy etc"
        },
        {
          id: "3",
          term: "will update all these properly soon"
        },
      ]
    }];

    const PrivacyPolicy =[{
      title: "Privacy Policy",
      data:  [
           {
        id: "4",
        term: "term #1"
      },
      {
        id: "5",
        term: "rules and privacy policy etc"
      },
      {
        id: "6",
        term: "will update all these properly soon"
      },
    ]
    }];
    const Item = ({title}) => (
      <View>
        <Text>{title}</Text>
      </View>

    )

  return (
    <View 
      style={{ 
        flex: 1, 
        width: '100%', 
        resizeMode: 'contain', 
        backgroundColor: '#192b59'
        }}>



          <KeyboardAvoidingView enabled>
            
          <SectionList
              sections={[...TermsConditions, ...PrivacyPolicy]}
              renderItem={({item}) => (
                <Text style={styles.terms} >{item.term}</Text>
              )}
              
              renderSectionHeader={({section}) => (
                <Text style={styles.title}>{section.title}</Text>
              )}
              
              keyExtractor = {(item,index) =>index.toString()}
              stickySectionHeadersEnabled
           />

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Agree </Text>
            </TouchableOpacity>
           
          </KeyboardAvoidingView>

    </View>
  );
};
export default agreement;

const styles = StyleSheet.create({

  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },

  buttonStyle: {
    backgroundColor: 'white',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    width: '75%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    //marginLeft: 100,
    //marginRight: 100,
    marginTop: 80,
    marginBottom: 25,
    padding: 10,
  },

  buttonTextStyle: {
    color: '#192b59',
    //padding: 20,
    fontSize: 18,
    //fontWeight: "bold",
  },

  terms: {
    padding: 15,
    marginHorizontal: 25,
    fontSize: 16,
    color: '#FFFFFF',
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    elevation: 4,
    margin: 10,
    marginTop: 30,
    color: '#FFFFF4'
  },
});
