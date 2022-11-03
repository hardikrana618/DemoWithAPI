/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';

class App extends Component {
  onPress = async () => {
    await axios
      .post('https://reqres.in/api/users', {
        name: 'morpheus1',
        job: 'leader2',
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log('ERROR ', error);
      })
      .finally(function () {
        // always executed
      });
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={this.onPress}
            style={{
              backgroundColor: '#EDEDED',
              paddingHorizontal: '10%',
              paddingVertical: '3%',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: 'black',
              }}>
              Call API
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
