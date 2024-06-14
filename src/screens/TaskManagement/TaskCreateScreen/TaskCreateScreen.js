import React, { useState } from 'react';
import { Alert, SafeAreaView, View, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { validateTask } from '../../../utils/validation';
import commonStyles from '../../../styles/commonStyles';
import TextInputField from '../../../components/TextInputField';
import { useTasks } from '../../../hooks/useTasks';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Message from '../../../components/Message';
import DatePicker from 'react-native-date-picker';

export default TaskCreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const { addTask } = useTasks();
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const handleSubmit = () => {
        const newTask = {
            id: Date.now().toString(),
            title,
            description,
            dueDate: dueDate.toISOString().split('T')[0]

        };
        const validationError = validateTask(newTask);
        if (validationError) {
            Alert.alert('Error', validationError);
        } else {
            addTask(newTask);
            setIsSuccessVisible(true);
        }


    };
    const handleSuccessClose = () => {
        setIsSuccessVisible(false);
        navigation.navigate('TaskList');
    };
    return (
        <SafeAreaView style={commonStyles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={commonStyles.container}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header back={true} onPress={() => navigation.goBack()} title={'Create Task'} />
                    <TextInputField placeholder="Title" value={title} onChangeText={setTitle} />
                    <TextInputField placeholder="Description" value={description} onChangeText={setDescription} />
                    <TextInputField placeholder="Due Date" value={dueDate.toDateString()} onChangeText={()=>setIsDatePickerOpen(true)} />
                    <DatePicker
                        modal
                        open={isDatePickerOpen}
                        date={dueDate}
                        mode="date"
                        onConfirm={(date) => {
                            setIsDatePickerOpen(false);
                            setDueDate(date);
                        }}
                        onCancel={() => {
                            setIsDatePickerOpen(false);
                        }}
                    />
                    <Button title="Submit" onPress={() => handleSubmit()} />
                    <View style={{ flex: 1 }}>
                        <Message
                            isVisible={isSuccessVisible}
                            message={`Success! \n Task Created`}
                            onClose={handleSuccessClose} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
