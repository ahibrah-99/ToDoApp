import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const renderTaskItem = ({item, index}) => {
    
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

const styles = StyleSheet.create({
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


export default TaskItem;
