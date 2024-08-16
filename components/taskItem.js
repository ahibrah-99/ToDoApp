import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ item, index, markTaskDone, editTask, deleteTask }) => {

    const [isDoneButtonVisible, setDoneButtonVisible] = useState(true);

    function handle_markTaskDone() {
        markTaskDone(index);
        setDoneButtonVisible(false);
    }

    return (
        <View style={styles.task}>
            <Text style={styles.itemList}>{!isDoneButtonVisible && '✅'}</Text>
            <Text style={styles.itemList}>{item.label}</Text>
            <View style={styles.taskButtons}>
                {isDoneButtonVisible && (
                    <TouchableOpacity onPress={handle_markTaskDone}>
                        <Text style={styles.editButton}>Done</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => editTask(index)}>
                    <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(index)}>
                    <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
        marginRight: 5
    },
    taskButtons: {
        flexDirection: "row",
        padding: 20
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
