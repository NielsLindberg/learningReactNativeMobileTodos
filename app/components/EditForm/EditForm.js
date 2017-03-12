import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, Switch, Button, AsyncStorage} from 'react-native';

export default class EditForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			id: this.props.todo.id,
			text: this.props.todo.text,
			completed: this.props.todo.completed
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		this.onCompletedChange = this.onCompletedChange.bind(this);
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
AppRegistry.registerComponent('EditForm', () => EditForm);