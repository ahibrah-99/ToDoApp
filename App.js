import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList , Image} from 'react-native';
import Task from './components/Task';
import TaskItem from './components/taskItem';

/* Save and Load data using AsyncStorage API */
import AsyncStorage from '@react-native-async-storage/async-storage'; //install using npm install @react-native-async-storage/async-storage
import { useEffect } from 'react';
/*
import { saveTasksToStorage } from './components/saveData';
import { loadTasksFromStorage } from './components/loadData';
*/
async function loadTasksFromStorage() {
  try {
    const jsonValue = await AsyncStorage.getItem('tasks');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load tasks:', e);
    return [];
  }
}

async function saveTasksToStorage(tasks) {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem('tasks', jsonValue);
    console.log('Tasks saved successfully!');
  } catch (e) {
    console.error('Failed to save tasks:', e);
  }
}


export default function App() {

  const [task, setTaskLabel] = useState("");  // input
  const [editIndex, setEditIndex] = useState(-1);  // edit index
  const [tasks, setTasks] = useState([]);  // task list
  const [isEditing, setIsEditing] = useState(false);  // task being edited ?

  useEffect(() => {
    // Load tasks from storage when the app starts
    const fetchTasks = async () => {
      const loadedTasks = await loadTasksFromStorage();
      setTasks(loadedTasks);
    };

    fetchTasks();
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);


  // Add or update a task
  function addTask() {
    if (task.trim()) {
        if (editIndex !== -1) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex].label = task;
            setTasks(updatedTasks);
            setEditIndex(-1);
            setIsEditing(false);  // Exit edit mode, show delete buttons again
        } else {
            setTasks([...tasks, new Task(task)]);
        }
        setTaskLabel('');
        console.log('A task has been added!');
    }
}

  // Edit task
  function editTask(index) {
    const taskToEdit = tasks[index];
    setTaskLabel(taskToEdit.label);
    setEditIndex(index);
    setIsEditing(true);  // Enter edit mode
    console.log('A task has been edited!');
  }

  // Mark task as done
  function markTaskDone(index) {
    console.log('Tasks:', tasks);
    console.log('Index:', index);
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 1;
    setTasks(updatedTasks);
    console.log('A task has been marked as done!');
  }

  // Delete task
  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].deleted = 1;
    console.log(`${updatedTasks[index].label} is now being deleted... ${updatedTasks[index].deleted}`)
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    console.log('A task has been deleted!');
    console.log(updatedTasks);
  }

  return (
  <View style={styles.container}>
    <Image style={styles.Image} source={require("./imgs/ToDoIMG.png")}/>
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
            isEditing={isEditing}  // Pass isEditing to TaskItem
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
  marginTop: 20,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'stretch',
  },
  Image: {
    padding: 20,
    width: 80,
    height: 100,
  },
  heading: {
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: 7,
  color: "black",
  },
  input: {
  borderWidth: 3,
  borderColor: "#ccc",
  padding: 10,
  marginBottom: 10,
  borderRadius: 10,
  fontSize: 18,
  width: '70%'
  },
  addButton: {
  backgroundColor: "black",
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
