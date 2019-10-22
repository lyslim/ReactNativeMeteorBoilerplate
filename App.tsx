import 'react-native-meteor-polyfills/client';
import 'meteor-client';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MyListView from './components/MyListView';
import { StartUp } from './App.model';

function App(startUp: StartUp) {

	return (
		<View style={styles.container}>
			{ startUp.connected ? <MyListView /> : <Text>hello world!</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default withTracker(() => {
	return {
		connected: Meteor.status().connected,
	} as StartUp;
})(App);
