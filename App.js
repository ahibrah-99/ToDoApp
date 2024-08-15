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

// Task class definition
export class Task {
  constructor(label) {
      this.label = label;
      this.status = 0;        // 0 for pending and 1 for done
  }
}

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

const renderTaskItem = ({item, index}) =>
{
  return (
    <View style={styles.task}>
            <Text
                style={styles.itemList}>{item.label}</Text>
            <View
                style={styles.taskButtons}>
                <TouchableOpacity
                    onPress={() => markTaskDone(index)}>
                    <Text
                        style={styles.editButton}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => editTask(index)}>
                    <Text
                        style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => deleteTask(index)}>
                    <Text
                        style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
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
},
title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
},
itemList: {
    fontSize: 19,
},
taskButtons: {
    flexDirection: "row",
},
editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
},
deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
},

});
