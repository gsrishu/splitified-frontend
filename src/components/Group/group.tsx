import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import groupStyles from '../../styles/groupStyle';
const Group = () => {
  return (
    <View style={groupStyles.main}>
      <View style={groupStyles.headerBox1}>
        <ScrollView horizontal={true}>
          <View style={groupStyles.headerBox}>
            <Text>Splityfy</Text>
          </View>
          <View style={groupStyles.headerBox}>
            <Text>Splityfy</Text>
          </View>
        </ScrollView>
      </View>

      {/* <View style={groupStyles.container}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            margin: 5,
            marginLeft: 20,
          }}>
          Friends
        </Text>
        <ScrollView horizontal={true}>
          <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
            <Text>Red</Text>
          </View>
        </ScrollView>
      </View> */}
      <View style={groupStyles.groupContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: 'black',
              margin: 5,
              marginLeft: 20,
            }}>
            Groups
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              margin: 5,
              marginLeft: 20,
              alignItems: 'flex-end',
            }}>
            Create One
          </Text>
        </View>

        <ScrollView>
          <View style={groupStyles.groupContainer}>
            <View style={[groupStyles.row, groupStyles.groupBox]}>
              <View style={groupStyles.textContainer}>
                <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
                  <Text>GP</Text>
                </View>
              </View>
              <View style={groupStyles.textContainer}>
                <Text style={groupStyles.detailsText}>Group Name</Text>
              </View>
            </View>
          </View>
          <View style={groupStyles.groupContainer}>
            <View style={[groupStyles.row, groupStyles.groupBox]}>
              <View style={[groupStyles.mainBox, groupStyles.cardOne]}>
                <Text>GP</Text>
              </View>
              <Text style={groupStyles.detailsText}>Group Details</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Group;
