import React, {Component} from 'react';
import {View, Text, Content, Container} from 'native-base';
import HeaderScreen from './shared/HeaderScreen';
import FooterScreen from './shared/FooterScreen';
import {Image} from 'react-native';

export default class History extends Component {
  render() {
    return (
      <Container>
        <HeaderScreen title="History" navigation={this.props.navigation} />
        <Content>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              flexDirection: 'column',
              height: 400,
              alignSelf: 'center',
            }}>
            <View style={{height: 100, marginBottom: 15}}>
              <Image
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNUUkHDtes_KoUAs7unoWhsvyhtv0EZWJELjm3B6ZTIBsgMQVy',
                }}
                style={{
                  height: -100,
                  width: null,
                  flex: 1,
                  backgroundColor: 'yellow',
                  borderRadius: 50,
                }}
              />
            </View>
            <Text style={{fontSize: 24, lineHeight: 23}}>History Empty</Text>
          </View>
        </Content>
        <FooterScreen />
      </Container>
    );
  }
}
