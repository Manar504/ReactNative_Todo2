import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import CompletedTodos from '../pages/Completed';
import UncompletedTodos from '../pages/UnCompleted'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: "#131722" } }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: "Home",
            headerTitleStyle: { color: "white", fontWeight: 'bold' },
            headerTitleAlign: "center"
          }}
        ></Tab.Screen>

        <Tab.Screen
          name='Completed'
          component={CompletedTodos}
          options={{
            headerTitle: "ToDo Details",
            headerBackTitle: "Back To Home",
            headerBackTitleStyle: "color:white",
            headerStyle: { backgroundColor: "#9ABCA7" },
            headerTitleStyle: {
              color: "white",
            },
            headerTitleAlign: "center",
          }}
        ></Tab.Screen>

        {/* Add a new tab screen */}
        <Tab.Screen
          name='UnCompleted'
          component={UncompletedTodos}
          options={{
            headerTitle: "UncompletedTodos",
            headerBackTitle: "Back To Home",
            headerBackTitleStyle: "color:white",
            headerStyle: { backgroundColor: "#9ABCA7" },
            headerTitleStyle: {
              color: "white",
            },
            headerTitleAlign: "center",
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;