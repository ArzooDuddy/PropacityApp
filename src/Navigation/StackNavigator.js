import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '../screens/TaskManagement/TaskListScreen/TaskListScreen';
import TaskDetailsScreen from '../screens/TaskManagement/TaskDetailScreen/TaskDetailScreen';
import TaskCreateScreen from '../screens/TaskManagement/TaskCreateScreen/TaskCreateScreen';
import SplashScreen from '../screens/TaskManagement/Splash/SplashScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen}/>
      <Stack.Screen name="TaskList" component={TaskListScreen}/>
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      <Stack.Screen name="TaskCreate" component={TaskCreateScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
