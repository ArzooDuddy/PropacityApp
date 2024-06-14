import React,{useCallback} from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar, BackHandler,Alert } from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import { useTasks } from '../../../hooks/useTasks';
import TaskItem from '../../../components/TaskItem';
import color from '../../../styles/color';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import { useFocusEffect } from '@react-navigation/native';

export default TaskListScreen = ({ navigation }) => {
  const { tasks } = useTasks();
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, [])
  );

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