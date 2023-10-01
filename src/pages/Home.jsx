import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, TextInput, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todos from '../components/Todos'; 
import {  useDispatch } from 'react-redux' 
import {addTodo} from '../store/todoSlice'
import { useSelector } from 'react-redux'


const Home = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();  

  

  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    const asyncTodos = await AsyncStorage.getItem("todos");
    if (asyncTodos) setTodos(JSON.parse(asyncTodos)); 
    
  }; 
  const createTodo = async () => {
    dispatch(addTodo({ title, description }));
  };

  
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>TODO APP</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setTitle(val)}
          placeholder="Enter your todo"
        />
        <TextInput
          style={styles.input}
          onChangeText={(val) => setDescription(val)}
          placeholder="Description"
        />
      </SafeAreaView>
      <TouchableOpacity>
        <Text
          onPress={createTodo}
          style={[styles.button, Platform.OS === 'ios' && { backgroundColor: 'red' }]}
        >
          ADD TODO
        </Text>
      </TouchableOpacity>
      
          <View style={styles.Divider} />
          <Todos />
       
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#131722',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  Divider: {
    width: '85%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 500,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    margin: 'auto',
    fontSize: 20,
    marginTop: 20,
  },
});

export default Home;



