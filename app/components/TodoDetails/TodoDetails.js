import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableHighlight, Share, AsyncStorage, StyleSheet} from 'react-native';

export default class TodoDetails extends Component{
	constructor(){
		super();
		this.state = {
		}
		this.onEdit = this.onEdit.bind(this);
	}

	onEdit(){

	}
	onDelete(){

	}
	onShare(){

	}

	render(){
		return(
			<View style={styles.container}>
				<TouchableHighlight
					style={styles.editButton}
					onPress={this.onEdit}
				>
					<Text style={styles.text}>Edit Todo</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.delButton}
					onPress={this.onDelete}
				>
					<Text style={styles.text}>Delete Todo</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.shareButton}
					onPress={this.onShare}
				>
					<Text style={styles.text}>Share in Message</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#b0d4ff',
		padding: 20
	},
	delButton: {
		backgroundColor: '#800000',
		padding: 10
	},
	editButton: {
		backgroundColor: '#397d02',
		padding: 10
	},
	shareButton: {
		backgroundColor: '#363636',
		padding: 10
	},
	text: {
		color: '#ffffff',
		textAlign: 'center'
	}
});

AppRegistry.registerComponent('TodoDetails', () => TodoDetails);