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

// Import task class
import task from 'task.js';

// Import useState and useEffect from react
import React, {useState, useEffect} from 'react';

export default function App() {
  //const welcomeMsg = "Hello World! Testing Message...";

  // Task
  const [task ,setTaskLabel] = useState("");          //input
  const [edit_index ,setEditIndex] = useState(-1);    //edit index

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
    setTask('');
    console.log(`Task added/updated!`);
  }
}

// Edit task
function editTask(index) {
  const taskToEdit = tasks[index];
  setTask(taskToEdit.label);
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
      <Text> {welcomeMsg} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
