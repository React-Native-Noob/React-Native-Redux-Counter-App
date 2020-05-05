/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  state = {
    counter: 0,
  };

  increaseCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };

  decreaseCounter = () => {
    this.setState({counter: this.state.counter - 1});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.increaseCounter();
            }}>
            <Text style={styles.fontStyle}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.fontStyle}>{this.state.counter}</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.decreaseCounter();
            }}>
            <Text style={styles.fontStyle}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 250,
  },
  fontStyle: {
    fontSize: 20,
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
});
