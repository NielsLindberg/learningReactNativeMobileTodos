import React, {Component} from 'react';
import {AppRegistry, Image, Text, View, ListView, TouchableHighlight, StyleSheet} from 'react-native';
import FireBaseApp from '../../modules/FireBaseApp/FireBaseApp';

export default class Todos extends Component{
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			todoDataSource: ds
		}
		this.pressRow = this.pressRow.bind(this);
		this.renderRow = this.renderRow.bind(this);

		this.itemsRef = FireBaseApp.database().ref();
	}

	getTodos(){
		this.itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          completed: child.val().completed,
          text: child.val().text,
          id: child.key
        });
      });

      this.setState({
					todoDataSource: this.state.todoDataSource.cloneWithRows(items)
				});
    });
	}

	componentWillMount(){
		this.getTodos();
	}

	pressRow(todo) {
		this.props.navigator.push({
			id: 'details',
			todo: todo
		});
	}

	renderRow(todo){
		let image;
		if(todo.completed) {
			image = <Image 
				style={styles.checkImage}
				source={require('./check.png')}
				/>
		} else {
			image = <Text></Text>
		}
		return(
			<TouchableHighlight onPress={() => {
				this.pressRow(todo)}}>
				<View style={styles.row}>
						<Text style={styles.text}>{todo.text}</Text>
						<View style={styles.check}>
							{image}
						</View>
				</View>
			</TouchableHighlight>
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

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 12,
		backgroundColor: '#b0d4ff',
		marginBottom: 3
	},
	text: {
		flex: 1
	},
	check:{
		flex:1
	},
	checkImage:{
		alignSelf: 'flex-end'
	}
})

AppRegistry.registerComponent('Todos', () => Todos);