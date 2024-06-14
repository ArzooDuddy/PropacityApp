import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTasks = async () => {
  const tasks = await AsyncStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = async (tasks) => {
  await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
};
