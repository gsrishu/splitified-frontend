import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Group = () => {
  return (
    <View>
    <ScrollView horizontal={true}>
    <View style={styles.headerBox1}>
      <View style={styles.headerBox}>
        <Text>Splityfy</Text>
      </View>
      <View style={styles.headerBox}>
        <Text>Splityfy</Text>
      </View>
      
      </View>
      </ScrollView>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.mainBox, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.mainBox, styles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.mainBox, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.mainBox, styles.cardFour]}>
            <Text>Black</Text>
          </View>
          <View style={[styles.mainBox, styles.cardOne]}>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
  

    </View>
  );
};

const styles = StyleSheet.create({
headerBox1:{
    flex:1,
    flexDirection:'row',

},
  mainBox: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  cardFour: {
    backgroundColor: 'powderblue',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  headerBox:{

    height:200,
    width:350,
    backgroundColor:'skyblue',
    borderRadius:4,
    margin:20,
    justifyContent:'center',
    alignItems:'center'
  },
  container1: {
    flex: 1,
    backgroundColor: '#ffffff', // Background color
  },
  header: {
    backgroundColor: '#128C7E', // Header background color
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  groupList: {
    flex: 1,
    padding: 10,
  },
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1', // Border color between groups
  },
  groupImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', // Group name text color
  },
  lastMessage: {
    fontSize: 14,
    color: '#808080', // Last message text color
  },

});

export default Group;
