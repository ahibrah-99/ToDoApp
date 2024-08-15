// Import expo status bar
import { StatusBar } from 'expo-status-bar';

// Import components
import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  FlatList } from 'react-native';

// Import useState and useEffect from react
import React, {useState, useEffect} from 'react';

import Task from './components/task';
import TaskItem from './components/taskItem';

export default function App() {
  // Task
  const [task ,setTaskLabel] = useState("");          //input
  const [editIndex ,setEditIndex] = useState(-1);    //edit index

  // TaskList
  const [tasks ,setTasks] = useState([]);

// Add or update a task
function addTask() {
  if (task.trim()) {
    if (editIndex !== -1) {
      // Edit existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].label = task;
      setTasks(updatedTasks);
      setEditIndex(-1);
    } else {
      // Add new task
      setTasks([...tasks, new Task(task)]);
    }
    setTaskLabel(''); // Reset the input field
    console.log(`Task added/updated!`);
  }
}

// Edit task
function editTask(index) {
  const taskToEdit = tasks[index];
  setTaskLabel(taskToEdit.label);
  setEditIndex(index);
  console.log(`Task is being edited!`);
}

// Mark task as done
function markTaskDone(index) {
  const updatedTasks = [...tasks];
  updatedTasks[index].status = 1;
  setTasks(updatedTasks);
  console.log(`Task marked as done!`);
}

// Delete task
function deleteTask(index) {
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
  console.log(`Task deleted!`);
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
                renderItem={renderTaskItem}
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
