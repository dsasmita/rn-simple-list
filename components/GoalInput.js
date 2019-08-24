import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const GoalInput = props => {
  const [enterGoal, setEndterGoal] = useState("");

  const goalInputHandler = enterText => {
    setEndterGoal(enterText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goals..."
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enterGoal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enterGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default GoalInput;
