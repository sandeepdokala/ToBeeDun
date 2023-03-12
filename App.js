import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [taskVal, setTaskVal] = useState([]);
  function getText(val) {
    setText(val);
  }
  function getTextClick() {
    setTaskVal([...taskVal, text]);
    // console.log(taskVal);
  }
  return (
    <View style={styles.container}>
      <Text>Add your task to start working!</Text>
      <View style={styles.content}>
        <TextInput placeholder='Enter the task: ' style={styles.inputBox} onChangeText={getText}></TextInput>
        <Pressable style={styles.btnParent} onPress={getTextClick}><Text>Add</Text></Pressable>
      </View>
      <View style={styles.tasksList}>
        {taskVal.map((task, index) => {
          if (task != '')
            return <View style={styles.taskTile} key={index}><Text>{task}</Text></View>
          else {
            Alert.alert('CantBeeDun', 'Cant add empty task!!', [{text: 'OK'}]);
          }
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50
  },
  content: {
    width: '80%',
    flexDirection: 'row',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2
  },
  inputBox: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#cccccc',
    padding: 8,
    width: '80%',
    marginRight: 10
  },
  btnParent: {
    backgroundColor: '#cccccc',
    alignSelf: 'center',
    padding: 14
  },
  tasksList: {
    width: '80%'
  },
  taskTile: {
    backgroundColor: '#cccccc',
    width: '100%',
    height: 58,
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 20
  }
});
