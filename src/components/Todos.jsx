import { View, Text } from 'react-native'
import React from 'react'
import ToDoItem from './Todo' 
import { useSelector } from 'react-redux'

const Todos = () => {
  const {todos} = useSelector((state) => state.todo);

  return (
    <View>
      {todos.map(todo => (
        <ToDoItem todo={todo} key={todo.id}/>
      ))}
    </View>
  )
}

export default Todos