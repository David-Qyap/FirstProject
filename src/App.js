import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  const [result, setResult] = useState('');

  const handleButtonPress = text => {
    setResult(result + text);
  };

  const handleEqualPress = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(result));
  };

  const handleClearPress = () => {
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleClearPress()}
          style={[styles.button, styles.gray]}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('/')}
          style={[styles.button, styles.orange]}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('√ ')}
          style={[styles.button, styles.orange]}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleButtonPress('7')}
          style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('8')}
          style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('9')}
          style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('*')}
          style={[styles.button, styles.orange]}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleButtonPress('4')}
          style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('5')}
          style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('6')}
          style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('-')}
          style={[styles.button, styles.orange]}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleButtonPress('1')}
          style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('2')}
          style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('3')}
          style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('+')}
          style={[styles.button, styles.orange]}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleButtonPress('0')}
          style={[styles.button, styles.wide]}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress('.')}
          style={styles.button}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleEqualPress()}
          style={[styles.button, styles.orange]}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  result: {
    flex: 2,
    backgroundColor: '#181818',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  resultText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  gray: {
    backgroundColor: '#A9A9A9',
  },
  orange: {
    backgroundColor: '#FFA500',
  },
  wide: {
    flex: 2,
    backgroundColor: '#FFA500',
  },
});
