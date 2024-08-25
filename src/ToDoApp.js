import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList , Image} from 'react-native';

const editIndex = -1;

class ToDoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.Image} source={require("../imgs/ToDoIMG.png")}/>
                <Text style={styles.heading}>My ToDo List</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter task"
                />
                <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>
                    {editIndex !== -1 ? "Update Task" : "Add Task"}
                </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export default ToDoApp;

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

  /*
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
  */