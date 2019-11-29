import React, {Component} from 'react';
import {
  Container,
  Text,
  Header,
  Item,
  Icon,
  Button,
  Input,
  Left,
  Content,
  View,
} from 'native-base';
import Popular from './Popular';
import Genre from './Genre';
import FooterScreen from '../FooterScreen';

// const Home = () => {
export default class Home extends Component {
  render() {
    return (
      <Container>
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
        <Content>
          <Genre />
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, paddingLeft: 10}}>
              Popular Books
            </Text>
          </View>
          <Popular navigation={this.props.navigation} />
        </Content>
        <FooterScreen />
      </Container>
    );
  }
}
