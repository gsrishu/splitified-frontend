import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,Dimensions } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const {height} =  Dimensions.get('window')
const marginTopPercantage = 8
const Login = () => {
  const marginTop = (height * marginTopPercantage) /100
  return (
    <View style={{ flex: 1, margin: 12,marginTop }}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 34, fontWeight: 'bold', color: 'black' }}>Welcome Back </Text>
          <Image
            style={{ height: 40, width: 40, marginLeft: 10, marginRight: 5 }}
            source={require('../../images/signIn/wavingHand.png')}
          />
        </View>
        <Text style={{ fontSize: 16, marginTop: 15, fontWeight: '400', color:'#808080' }}>
          Please enter your email & Password to sign up.
        </Text>
      </View>
      <View>
        <View>
          <Text style={{ fontSize: 16, marginTop: 24, fontWeight: 'bold', color: 'black' }}>Email</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#f1f1f1',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#febb1d',
              marginTop: 8,
            }}>
            <Image
              style={{ height: 20, width: 20, marginLeft: 10, marginRight: 5 }}
              source={require('../../images/signIn/email.png')}
            />
            <TextInput
              style={{ flex: 1, paddingVertical: 10, color: '#808080' }}
              placeholder="Email"
              placeholderTextColor="#808080"
            />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, marginTop: 24, fontWeight: 'bold', color: 'black' }}>Password</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#f1f1f1',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#febb1d',
              marginTop: 8,
            }}>
            <Image
              style={{ height: 20, width: 20, marginLeft: 10, marginRight: 5 }}
              source={require('../../images/signIn/lock.png')}
            />
            <TextInput
              style={{ flex: 1, paddingVertical: 10, color: '#808080' }}
              placeholder="Password" placeholderTextColor="#808080"
            />
            <Image
              style={{ height: 20, width: 20, marginLeft: 10, marginRight: 5 }}
              source={require('../../images/signIn/hidden.png')}
            />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
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
        <TouchableOpacity style={{ marginRight: 16 }}>
          <Text style={{ fontWeight: '500', fontSize: 15, color: 'black' }}>Remember me</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
          <Text style={{ fontWeight: '500', fontSize: 15, color: '#febb1d' }}>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 1, marginTop: 24, backgroundColor: '#E5E5E5' }} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop }}>
        <Text style={{ fontWeight: '500', fontSize: 15, color: 'black' }}>Don't have an account?</Text>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 15, color: '#febb1d' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={{ backgroundColor: '#febb1d', height: 50, borderRadius: 25, justifyContent: 'center' }}
          onPress={() => console.log('Button pressed')}>
          <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 15, color: 'black' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
