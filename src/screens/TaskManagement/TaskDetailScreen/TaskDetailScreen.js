import React,{useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useTasks } from '../../../hooks/useTasks';
import commonStyles from '../../../styles/commonStyles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import styles from './styles';
import Message from '../../../components/Message';

export default TaskDetailsScreen = ({ route, navigation }) => {
  const { task } = route?.params;
  const { deleteTask } = useTasks();
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleDelete = () => {
    deleteTask(task.id);
    setIsSuccessVisible(true)
  };
  const handleSuccessClose = () => {
    setIsSuccessVisible(false);
    navigation.goBack();
};
  return (
    <SafeAreaView style={commonStyles.container}>
      <View>
        <Header back={true} onPress={()=>navigation.goBack()} title={'Task Details'} />
        <View style={[commonStyles.w_9, styles.list_vw]}>
          <Text style={commonStyles.regular_txt}>Title: {task.title}</Text>
          <Text style={commonStyles.sm_txt}>Description: {task.description}</Text>
          <Text style={styles.date_txt}>Due Date: {task.dueDate}</Text>
        </View>
        <Button title="Delete Task" onPress={handleDelete} />
        <Message
          isVisible={isSuccessVisible}
          message={`Success! \n Task deleted `}
          onClose={handleSuccessClose} />
      </View>
    </SafeAreaView>
  );
};
