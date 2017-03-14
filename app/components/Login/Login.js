import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, Button} from 'react-native';
import FireBaseApp from '../../modules/FireBaseApp/FireBaseApp';

export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			response: ''
		};

		this.signUp = this.signUp.bind(this);
		this.login = this.login.bind(this);
	}

	async signUp() {

    try {
        await FireBaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        FireBaseApp.auth().currentUser.sendEmailVerification(); 
        this.setState({
            response: "account created"
        });

        setTimeout(() => {
            this.props.navigator.push({
                id: "todos"
            })
        }, 1500);

    } catch (error) {
        this.setState({
            response: error.toString()
        })
    }

  }

	async login() {

    try {
        await FireBaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

        this.setState({
            response: "Logged In!"
        });

        setTimeout(() => {
            this.props.navigator.push({
                id: "todos"
            })
        }, 1500);

    } catch (error) {
        this.setState({
            response: error.toString()
        })
    }
  }

	render(){
		return (
	    <View>
	        <View>
	            <Text>Firebase Sample</Text>
	            <TextInput
	                label={"Email Address"}
	                onChangeText={(email) => this.setState({email})}
	                keyboardType="email-address"
	                autoCapitalize="none"
	            />
	            <TextInput
	                label={"Password"}
	                onChangeText={(password) => this.setState({password})}
	                password={true}
	                autoCapitalize="none"
	            />
	            <View>
	                <Button 
	                	title='Sign Up'
	                	onPress={this.signUp} 
	                	textStyle={{fontSize: 18}}
	                 />
	                <Button
	                	title='Sign Up'
	                	onPress={this.login}
	                	textStyle={{fontSize: 18}}
	               	/>
	            </View>
	        </View>
	        <View>
	            <Text>{this.state.response}</Text>
	        </View>
	    </View>
    );
	}
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Login', () => Login);