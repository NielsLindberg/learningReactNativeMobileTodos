import React, {Component} from 'react';
import {AppRegistry, Text, View, ToolbarAndroid, StyleSheet} from 'react-native';

export default class AndroidToolbar extends Component{
	constructor(){
		super();
		this.state = {

		}
	}

	static defaultProps = {
		title: 'MobileTodos'
	}

	render(){
		return(
			<View>
				<ToolbarAndroid
					style={styles.toolbar}
					title={this.props.title}
					titleColor="white"
				/>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	toolbar: {
		height: 58,
		backgroundColor: '#2b4970'
	}
})
AppRegistry.registerComponent('AndroidToolbar', () => AndroidToolbar);