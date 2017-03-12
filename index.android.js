import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, StyleSheet, Dimensions} from 'react-native';

import Todos from './app/components/Todos/Todos';
import AndroidToolbar from './app/components/AndroidToolbar/AndroidToolbar';
import AddButton from './app/components/AddButton/AddButton';
import AddForm from './app/components/AddForm/AddForm';
import TodoDetails from './app/components/TodoDetails/TodoDetails';
import EditForm from './app/components/EditForm/EditForm';


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
            <AddButton navigator={navigator} />
            <Todos navigator={navigator} title='todos'/>
          </View>
        )
      case 'add':
        return(
         <View style={styles.screen}>
            <AndroidToolbar title='Add Todo'/>
            <AddForm navigator={navigator} title='add'/>
          </View>
        )
      case 'details':
        return(
         <View style={styles.screen}>
            <AndroidToolbar title={route.todo.text}/>
            <TodoDetails navigator={navigator} todo={route.todo} title='details'/>
          </View>
        )
      case 'edit':
        return(
         <View style={styles.screen}>
            <AndroidToolbar title='Edit Todo'/>
            <EditForm navigator={navigator} todo={route.todo} title='edit'/>
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