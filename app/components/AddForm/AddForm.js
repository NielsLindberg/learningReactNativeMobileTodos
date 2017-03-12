import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, Switch, Button, AsyncStorage} from 'react-native';

export default class AddForm extends Component{
	constructor(){
		super();
		this.state = {
			id: '',
			text: '',
			completed: false,
			todos: []
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		this.onCompletedChange = this.onCompletedChange.bind(this);
	}

	generateId(){
		let id = Math.floor(Math.random() * 1000000000);
		this.setState({id});
	}

	onTextChange(text){
		this.setState({text});
	}

	onCompletedChange(completed){
		this.setState({completed});
	}

	onSubmit(){
		let todos = this.state.todos;

		todos.push({
			id: this.state.id,
			text: this.state.text,
			completed: this.state.completed});

		AsyncStorage.setItem('todos', JSON.stringify(todos));

		this.props.navigator.push({id: 'todos'});
	}

	getTodos(){
		AsyncStorage.getItem('todos')
		.then((value) => {
			if(value != undefined) {
				this.setState({todos: JSON.parse(value)});
			}
		});
	}

	componentDidMount(){
		this.generateId();
		this.getTodos();
	}

	render(){
		return(
			<View style={styles.addForm}>
				<TextInput
					value={this.state.text}
					placeholder='Todo Text'
					onChangeText= {(value) => this.onTextChange(value)}
				/>
				<View style={styles.completed}>
					<Text>
						Completed
					</Text>
					<Switch
						value={this.state.completed}
						onValueChange={(value) => this.onCompletedChange(value)}
					/>
				</View>
				<View style={styles.submit}>
					<Button
						title='SUBMIT'
						style={styles.btn}
						onPress={this.onSubmit}
						color='black'
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	completed: {
		flexDirection: 'row'
	},
	addForm: {
		backgroundColor:'#b0d4ff',
		padding: 20
	},
	submit: {
		marginTop: 20
	}
})
AppRegistry.registerComponent('AddForm', () => AddForm);