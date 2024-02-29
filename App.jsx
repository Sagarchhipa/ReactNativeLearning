import React from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter your course goal" style={styles.text} />
      <Button title="Add Goal" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    margin: 5,
    marginTop: 30,
    width: '85%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
  },
});

export default App;
