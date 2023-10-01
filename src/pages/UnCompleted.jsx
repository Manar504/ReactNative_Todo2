import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ToDoItem from '../components/Todo';

const UncompletedTodos = () => {
  const [uncompletedTodos, setUncompletedTodos] = useState([]);
  const { todos } = useSelector(state => state.todo);

  useEffect(() => {
    if (todos) {
      const filteredTodos = todos.filter(todo => !todo.done);
      setUncompletedTodos(filteredTodos);
    }
  }, [todos]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {uncompletedTodos.length ? (
        <>
          {uncompletedTodos.map(todo => (
            <ToDoItem key={todo.id} todo={todo} />
          ))}
        </>
      ) : (
        <Text>No Uncompleted Todos Found!</Text>
      )}
    </View>
  );
};

export default UncompletedTodos;