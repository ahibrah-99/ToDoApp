import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Task from './components/Task';
import TaskItem from './components/taskItem';

export default function App() {
    const [task, setTaskLabel] = useState("");  // input
    const [editIndex, setEditIndex] = useState(-1);  // edit index
    const [tasks, setTasks] = useState([]);  // task list

    // Add or update a task
    function addTask() {
        if (task.trim()) {
            if (editIndex !== -1) {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex].label = task;
                setTasks(updatedTasks);
                setEditIndex(-1);
            } else {
                setTasks([...tasks, new Task(task)]);
            }
            setTaskLabel('');
        }
    }

    // Edit task
    function editTask(index) {
        const taskToEdit = tasks[index];
        setTaskLabel(taskToEdit.label);
        setEditIndex(index);
    }

    // Mark task as done
    function markTaskDone(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = 1;
        setTasks(updatedTasks);
    }

    // Delete task
    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>My ToDo List</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task"
                value={task}
                onChangeText={(text) => setTaskLabel(text)}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={addTask}>
                <Text style={styles.addButtonText}>
                    {editIndex !== -1 ? "Update Task" : "Add Task"}
                </Text>
            </TouchableOpacity>
            <FlatList
                data={tasks}
                renderItem={({ item, index }) => (
                    <TaskItem
                        item={item}
                        index={index}
                        markTaskDone={markTaskDone}
                        editTask={editTask}
                        deleteTask={deleteTask}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        marginTop: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        color: "green",
    },
    input: {
        borderWidth: 3,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    addButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
});
