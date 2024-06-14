import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import { useTasks } from '../../../hooks/useTasks';
import TaskItem from '../../../components/TaskItem';
import color from '../../../styles/color';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

export default TaskListScreen = ({ navigation }) => {
  const { tasks } = useTasks();

  const renderList = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TaskDetails', { task: item })}>
      <TaskItem task={item} />
    </TouchableOpacity>
  )
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar backgroundColor={color.black} />
      <View style={commonStyles.container}>
        <Header title={'Task List'} />
        {tasks.length === 0 ? (
        <View style={commonStyles.emptyContainer}>
          <Text style={commonStyles.sm_txt}>No items. Create a task.</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderList}
          showsVerticalScrollIndicator={false}
        />)
      }
       <Button title={'Create Task'} onPress={() => navigation.navigate('TaskCreate')}/>
      </View>
    </SafeAreaView>
  );
};