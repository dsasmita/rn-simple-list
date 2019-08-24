import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";

export default function App() {
  const [enterGoal, setEndterGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = enterText => {
    setEndterGoal(enterText);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [...currentGoals, enterGoal]);
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
      <ScrollView>
        {courseGoal.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
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
  listItem:{
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#EEE',
    borderColor: 'black',
    borderWidth: 1
  }
});
