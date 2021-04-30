
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
export default class WriteStoryScreen extends React.Component {
    render(){
  return (
    <View style={styles.container}>
    
     <Text>Write Story</Text>
       <View><TextInput style={styles.bar}
        placeholder= "Title Of The Story"> 
        
          </TextInput>
          <TextInput style={styles.bar}
        placeholder= "Author Of The Story"> 
        
          </TextInput>
          <TextInput style={styles.bar}
        placeholder= "Write Story"> 
        
          </TextInput>
          </View>
        
     
        <TouchableOpacity style={styles.bar}>
          <Text>Submit</Text>
        </TouchableOpacity>

    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'bottom',
    justifyContent: 'center',
  },
  searchBar:{
    flexDirection:'row',
    height:40,
    width:'auto',
    borderWidth:0.5,
    alignItems:'center',
    backgroundColor:'grey',

  },
  bar:{
    borderWidth:2,
    height:30,
    width:300,
    paddingLeft:10,
  },
  searchButton:{
    borderWidth:1,
    height:30,
    width:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green'
  }
});
