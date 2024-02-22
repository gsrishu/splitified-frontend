import { StyleSheet } from "react-native";
const groupStyles = StyleSheet.create({
  main:{
    margin:1,
    flex:1,
    padding:1,
  },
    headerBox1:{
        flexDirection:'row',
        width:'auto',
        height:'auto'
    },
      mainBox: {
        height: 70,
        width: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding:5
      },
      cardOne: {
        backgroundColor: 'powderblue',
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
        flexDirection: 'column',
      },
      headerBox:{
        height:200,
        width:350,
        backgroundColor:'skyblue',
        borderRadius:10,
        margin:20,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{

            width:0,
            height:2
        },
        shadowOpacity:0.50,
        shadowRadius:3.84,
        elevation:5
      },
      container1: {
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
      groupBox:{
        height:80,
        width:'auto',
        backgroundColor:'skyblue',
        borderRadius:10,
        margin:5,
        shadowColor:'#000',
        shadowOffset:{

            width:0,
            height:2
        },
        shadowOpacity:0.50,
        shadowRadius:3.84,
        elevation:5

      },
      groupContainer:{
        flexDirection: 'column',
        flex: 1,
        padding: 5,
        backgroundColor: '#f0f0f0',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Aligns children to the start (left) of the container
      },
      textContainer: {
        justifyContent: 'flex-start', // Aligns the text to the start (left) of the container

      },
      detailsText: {
        marginLeft:30,
        marginTop:10
        
      },
      
      textContainer1:{
      }
    
    });
    
    export default groupStyles
    