import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
  Left,
  Right,
} from 'native-base';
import {View} from 'react-native';
export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content style={{paddingLeft: 20}}>
          <View style={{marginTop: 90}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', maxWidth: 200}}>
              Here To Get Welcome !
            </Text>
          </View>
          <View style={{paddingRight: 15}}>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Left>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Sign in
                  </Text>
                </Left>
                <Right>
                  <Button
                    style={{backgroundColor: 'black', borderRadius: 30}}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Icon name="arrow-forward" style={{fontSize: 35}} />
                  </Button>
                </Right>
              </View>
            </Form>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 80,
              paddingRight: 20,
            }}>
            <Left>
              <Text style={{fontSize: 18, textDecorationLine: 'underline'}}>
                Sign up
              </Text>
            </Left>
            <Right>
              <Text style={{fontSize: 18, textDecorationLine: 'underline'}}>
                Forgot Password
              </Text>
            </Right>
          </View>
        </Content>
      </Container>
    );
  }
}
