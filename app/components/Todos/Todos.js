import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, TouchableHighlight} from 'react-native';

export default class Todos extends Component{
	constructor(){
		super();
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			todoDataSource: ds
		}
	}

	getTodos(){
		let todos = [
			{text: 'Todo One', completed: false},
			{text: 'Todo Two', completed: false},
			{text: 'Todo Three', completed: false}
		];

		this.setState({
			todoDataSource: this.state.todoDataSource.cloneWithRows(todos)
		});
	}

	componentWillMount(){
		this.getTodos();
	}

	componentDidMount(){
		this.getTodos();
	}

	renderRow(todo){
		return(
			<View>
					<Text>{todo.text}</Text>
			</View>
			)
	}

	render(){
		return(
			<ListView
				dataSource={this.state.todoDataSource}
				renderRow={this.renderRow}
			/>
			)
	}
}

AppRegistry.registerComponent('Todos', () => Todos);