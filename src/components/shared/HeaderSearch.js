import React, {Component} from 'react';
import {Header, Left, Text, Item, Button, Input, Icon, View} from 'native-base';
export default class HeaderSearch extends Component {
  render() {
    return (
      <View>
        <Header searchBar rounded style={{backgroundColor: 'white'}}>
          <Left>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>BOOK</Text>
          </Left>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text> Search </Text>
          </Button>
        </Header>
      </View>
    );
  }
}
