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

import {connect} from 'react-redux';

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.props.increaseCounter();
            }}>
            <Text style={styles.fontStyle}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.fontStyle}>{this.props.counter}</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.props.decreaseCounter();
            }}>
            <Text style={styles.fontStyle}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterApp);

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
