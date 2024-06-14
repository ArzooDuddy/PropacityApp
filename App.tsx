import * as React from 'react';
import { TaskProvider } from './src/contexts/TaskContext';
import StackNavigator from './src/Navigation/StackNavigator';

export default function App() {
  return (
    <TaskProvider>
        <StackNavigator />
    </TaskProvider>
  );
}
