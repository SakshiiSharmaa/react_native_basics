import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
 import { Entypo } from '@expo/vector-icons';
import Calendar from "./Calendar";
import Card from "./Card";





const TodoList = ({ todosList }) => {
  const navigation = useNavigation();
  
  const onClickHandler = (data) => {
    navigation.navigate("Detail", data);
  };

  return (
  
    <>
    <View style={styles.view}> 
       <Calendar/>
      <Card todosList={todosList}/>
    
    {/* <View style={styles.view}> */}
    <Text style={styles.txt}>InComplete</Text>
    <FlatList
    
    contentContainerStyle={styles.container}
    keyExtractor={(item) => item.key.toString()}
    data={todosList}
    // ListHeaderComponent={() => {
    //   return (<Text style={styles.txt}>InComplete</Text>)
      
    // }}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={()=>onClickHandler(item)}>
        <View style={styles.item}>
        <MaterialIcons name="radio-button-unchecked" size={20} color="#0074CC" />
          <Text style={styles.text}>{item.item}</Text>
          
          <View style={styles.buttongrp}>
          <Text style={styles.date}>{item.deadline}</Text>
          
         
          </View>
          </View>
        
      </TouchableOpacity>
    )}
  />
  </View>
    {/* <View style={styles.view}>
    <Text style={styles.txt}> Complete </Text>
  </View>
  <FlatList
    contentContainerStyle={styles.container}
    keyExtractor={(item) => item.key.toString()}
    data={todosList}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={()=>onClickHandler(item)}>
        <View style={styles.item}>
        <View style={styles.buttongrp1}>
        <AntDesign name="checkcircle" size={20} color="#0074CC" />
        </View>
          <Text style={styles.text}>{item.item}</Text>
          <View style={styles.buttongrp}>
          <Entypo name="circle-with-cross" size={24} color="black" />
            
            </View>
          </View>
      
      </TouchableOpacity>
    )} />*/}
  
  
  </>
  
    
  );
};

const styles = StyleSheet.create({
  
  
  view:{
     borderWidth:1,
     borderColor:'grey',
     flex:1,
     
  },
  container: {
    padding: 10,
    
    // top:100,
    
  },
  flat:{
    flex:1,
    
    
  },
  item: {
    // margin: 10,
    marginVertical:10,
    marginRight:-15,
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
   color:'#595959',
  
    fontSize: 16,
    fontStyle: "italic",
    flex:10,
    padding:5,
    
    
    
  },
  txt: {
    
   fontWeight: '700',
   fontSize: 20,
   color:'#595959',
   alignSelf: "center",
   paddingHorizontal: 10,
   paddingVertical: 5,
   marginHorizontal: 10,
   marginVertical: 25,

   
   

  },
  buttongrp:{
    flexDirection: 'row',
    
    
    
  },
  date:{
   color:'#808080',
   fontWeight:'bold',
   borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,

    
    
    
   
  },

});

export default TodoList;
