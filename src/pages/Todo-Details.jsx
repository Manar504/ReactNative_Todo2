import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'


const TodoDetails = () => {
  const prams = useRoute().params;
  return (
    <View style={styles.big}>
    {prams &&
    <View style={styles.container}>
    <Text style={styles.title}>{prams.title}</Text>
    <Text style={styles.details} >{prams.description}</Text>
    <Text  >{prams.date}</Text>
    
  </View> }
    </View>
  )
}

export default TodoDetails

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    paddingVertical:32,
    paddingHorizontal:16,
    borderRadius:10,
    marginHorizontal:12,
    marginVertical:60,
    width:350,
    // alignItems:"center",
    backgroundColor:"#9ABCA7",
    height:200,
  },
  title:{
    fontSize:30,
    marginBottom:20,
    fontWeight:400,

    
    padding:10,
    
  } , 
  details:{
    fontSize:30,
    color:"red",
    marginBottom:20,
  }, 
  big:{
    flex:1,
   width:"100%",
   backgroundColor:"white",
   height:"100%",
   justifyContent:"center",
    alignItems:"center",

  }

})