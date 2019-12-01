import React, {Component} from 'react';
import {Container, Text, Content, View} from 'native-base';
import Popular from './Popular';
import Genre from './Genre';
import FooterScreen from '../shared/FooterScreen';
import HeaderSearch from '../shared/HeaderSearch';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <HeaderSearch navigation={this.props.navigation} />
        <Content>
          <Genre navigation={this.props.navigation} />
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, paddingLeft: 10}}>
              Popular Books
            </Text>
          </View>
          <Popular navigation={this.props.navigation} />
        </Content>
        <FooterScreen navigation={this.props.navigation} />
      </Container>
    );
  }
}
