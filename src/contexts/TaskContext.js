import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = async (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
