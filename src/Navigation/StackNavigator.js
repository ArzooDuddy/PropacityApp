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
                    headerShown: false
                }}
                initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="TaskList" options={{
                    animation: 'slide_from_bottom',
                }}
                    component={TaskListScreen} />
                <Stack.Screen name="TaskDetails"options={{
                    animation: 'slide_from_right',
                }} component={TaskDetailsScreen} />
                <Stack.Screen name="TaskCreate" options={{
                    animation: 'slide_from_bottom',
                }} component={TaskCreateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
