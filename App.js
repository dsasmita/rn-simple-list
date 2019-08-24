import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enterGoal, setEndterGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = enterText => {
    setEndterGoal(enterText);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enterGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goals..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5
  },
  listItem: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: "#EEE",
    borderColor: "black",
    borderWidth: 1
  }
});
