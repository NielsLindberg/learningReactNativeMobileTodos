import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class mobiletodos extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <View>
        <Text>mobiletodos</Text>
      </View>
      )
  }
}

AppRegistry.registerComponent('mobiletodos', () => mobiletodos);