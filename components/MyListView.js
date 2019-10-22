import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { MyCollection } from '../api/server/collections';
import {
  Text,
  FlatList
} from 'react-native';

class MyListView extends Component {
  render() {

    return (
      <FlatList
        data={this.props.items}
        renderItem={this.renderRow.bind(this)}
        keyExtractor={(item) => item._id }
      />
    );
  }

  renderRow({ item }) {
    return (<Text>{item.value}</Text>);
  }
}

export default withTracker(() => {
  return {
    items: MyCollection.find().fetch()
  };
})(MyListView);