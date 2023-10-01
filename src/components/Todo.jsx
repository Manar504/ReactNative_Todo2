import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { deleteTodo, changeTodoStatus } from '../store/todoSlice';

const ToDoItem = ({ todo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); 

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const handleChangeStatus = () => {
    dispatch(changeTodoStatus({ id: todo.id }));
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Todo-Details', todo);
      }}
      style={styles.container}
    >
      <Text style={{ fontSize: 25 }}>{todo.title}</Text>
      <TouchableOpacity
        onPress={handleDelete}
        style={[Platform.OS === 'ios' && { backgroundColor: 'red' }]}
      >
        <AntDesign name="delete" size={25} color="red" />
      </TouchableOpacity>  

      <TouchableOpacity onPress={handleChangeStatus}>
        {todo.done ? (
          <AntDesign name="checkcircleo" size={24} color="black" />
        ) : (
          <AntDesign name="checkcircle" size={24} color="black" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    minHeight: 50,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "gray",
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ToDoItem;