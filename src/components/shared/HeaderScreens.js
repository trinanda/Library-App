import React, {Component} from 'react';
import {Header, Left, Body, Right, Title, Icon, View} from 'native-base';
import {TouchableOpacity} from 'react-native';
export default class HeaderScreen extends Component {
  render() {
    return (
      <View>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" />
            </TouchableOpacity>
          </Left>
          <Body style={{alignItems: 'center'}}>
            <Title style={{color: 'black'}}>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}
