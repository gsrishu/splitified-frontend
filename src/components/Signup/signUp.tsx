import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const {height} =  Dimensions.get('window')
const marginTopPercantage = 8
const Signup = ({navigation}) => {
  const marginTop = (height * marginTopPercantage) /100
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1, margin: 12,marginTop}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 34, fontWeight: 'bold', color: 'black'}}>Create Account </Text>
            <Image
              style={{height: 40, width: 40, marginLeft: 10, marginRight: 5}}
              source={require('../../images/signIn/signUp.jpeg')}
            />
          </View>
          <Text style={{fontSize: 16, marginTop: 15, fontWeight: '400', color:'#808080'}}>Please enter your email & Password to sign up.</Text>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 15, color: 'black'}}>Email</Text>
            <View style={{marginTop: 2, flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f1f1', borderRadius: 10, borderWidth: 1, borderColor: '#febb1d'}}>
              <Image style={{height: 20, width: 20, marginLeft: 10, marginRight: 5}} source={require('../../images/signIn/email.png')} />
              <TextInput style={{flex: 1, paddingVertical: 10, color: '#808080'}} placeholder="Email" placeholderTextColor="#808080" />
            </View>
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 15, color: 'black'}}>User Name</Text>
            <View style={{marginTop: 2, flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f1f1', borderRadius: 10, borderWidth: 1, borderColor: '#febb1d'}}>
              <Image style={{height: 20, width: 20, marginLeft: 10, marginRight: 5}} source={require('../../images/signIn/email.png')} />
              <TextInput style={{flex: 1, paddingVertical: 10, color: '#808080'}} placeholder="User Name" placeholderTextColor="#808080" />
            </View>
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 15, color: 'black'}}>Password</Text>
            <View style={{marginTop: 4, flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f1f1', borderRadius: 10, borderWidth: 1, borderColor: '#febb1d'}}>
              <Image style={{height: 20, width: 20, marginLeft: 10, marginRight: 5}} source={require('../../images/signIn/lock.png')} />
              <TextInput style={{flex: 1, paddingVertical: 10, color: '#808080'}} placeholder="Password" placeholderTextColor="#808080" />
              <Image style={{height: 20, width: 20, marginLeft: 10, marginRight: 5}} source={require('../../images/signIn/hidden.png')} />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 25}}>
          <View>
          <BouncyCheckbox
            size={25}
            fillColor="#febb1d"
            unfillColor="#FFFFFF"
            iconStyle={{borderColor: ''}}
            innerIconStyle={{borderWidth: 2}}
            textStyle={{fontFamily: 'JosefinSans-Regular'}}
          />
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'black'}}>I agree to Splitify</Text>
            </TouchableOpacity>
            </View>
            <View>
            <Text style={{fontWeight: '500', fontSize: 15, marginLeft: 5, color: '#febb1d'}}>Terms & Policy</Text>
            </View>
          </View>
          <View style={{height: 1,marginTop:15, backgroundColor: '#ddd', borderTopWidth: 1, borderColor: '#ddd'}} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
            <Text style={{fontWeight: '500', fontSize: 15, color: 'black'}}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{fontWeight: '500', fontSize: 15, color: '#febb1d', marginLeft: 5}}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 1,marginTop, backgroundColor: '#ddd', borderTopWidth: 1, borderColor: '#ddd'}} />
          <View style={{marginTop: 10}}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#febb1d', height: 50, borderRadius: 25}} onPress={() => navigation.navigate('Login')}>
              <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 15, color: 'black'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
