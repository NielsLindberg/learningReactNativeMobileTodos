import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, StyleSheet, Dimensions} from 'react-native';

import Todos from './app/components/Todos/Todos';
import AndroidToolbar from './app/components/AndroidToolbar/AndroidToolbar';

export default class mobiletodos extends Component{
  constructor(){
    super();
    this.state = {
    }
  }
  renderScene(route, navigator){
    switch(route.id){
      case 'todos':
        return (
          <View style={styles.screen}>
            <AndroidToolbar />
            <Todos navigator={navigator} title='todos'/>
          </View>
        )
    }
  }
  render(){
    return(
      <Navigator
        initialRoute={{id: 'todos'}}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
      )
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#2b4970',
    height:Dimensions.get('window').height
  }
});

AppRegistry.registerComponent('mobiletodos', () => mobiletodos);