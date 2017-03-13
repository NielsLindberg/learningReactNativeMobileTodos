import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, Switch, Button} from 'react-native';
import FireBaseApp from '../../modules/FireBaseApp/FireBaseApp';

export default class AddForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			text: '',
			completed: false
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
		this.onCompletedChange = this.onCompletedChange.bind(this);

		this.itemsRef = FireBaseApp.database().ref();
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
		this.itemsRef.push({
			text: this.state.text,
			completed: this.state.completed});

		this.props.navigator.push({id: 'todos'});
	}

	componentDidMount(){
		this.generateId();
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