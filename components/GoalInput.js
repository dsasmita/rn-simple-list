import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEndteredGoal] = useState("");

  const goalInputHandler = enterText => {
    setEndteredGoal(enterText);
  };

  const addGoalHandler = () => {
    if (enteredGoal !== "") {
      props.onAddGoal(enteredGoal);
      setEndteredGoal("");
    } else {
      alert("Input goal...!");
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goals..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    marginBottom: 5
  }
});

export default GoalInput;
