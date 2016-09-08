'use strict';

let React = require('react');

let {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = require('react-native');

class Initial extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>REACT HUNT</Text>
        <TouchableOpacity style={styles.button} onPress={this.props.onStateChange.bind(null, "INTRO")}>
          <Text style={styles.buttonText}>TAP SOME DUCKS!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    width: 180,
    top: -50,
  },
  buttonText: {
    color: "rgb(60,188,252)",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 60,
    fontWeight: "bold",
    top: -100,
    width: 260,
    textAlign: "center",
    color: "#fff"
  }
});

module.exports = Initial;
