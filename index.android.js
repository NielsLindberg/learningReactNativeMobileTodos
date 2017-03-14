import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, StyleSheet, Dimensions, ListView} from 'react-native';

import Todos from './app/components/Todos/Todos';
import AndroidToolbar from './app/components/AndroidToolbar/AndroidToolbar';
import AddButton from './app/components/AddButton/AddButton';
import AddForm from './app/components/AddForm/AddForm';
import TodoDetails from './app/components/TodoDetails/TodoDetails';
import EditForm from './app/components/EditForm/EditForm';
import Login from './app/components/Login/Login';
import MapComponent from './app/components/MapComponent/MapComponent';

export default class mobiletodos extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  renderScene(route, navigator){
    switch(route.id){
      case 'map':
        return (
          <View style={styles.screen}>
            <AndroidToolbar />
            <MapComponent navigator={navigator} title='map'/>
          </View>
        )
      case 'login':
        return (
          <View style={styles.screen}>
            <AndroidToolbar />
            <Login navigator={navigator} title='login'/>
          </View>
        )
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
        initialRoute={{id: 'login'}}
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