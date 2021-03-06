import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableHighlight, Share, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class MapComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render(){
   const { region } = this.props;
   console.log(region);

   return (
     <View style ={styles.container}>
       <MapView
         style={styles.map}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>
     </View>
   );
	}
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

AppRegistry.registerComponent('MapComponent', () => MapComponent);