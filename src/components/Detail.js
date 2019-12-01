import React, {Component} from 'react';
import {Image} from 'react-native';
import {Container, Content, Thumbnail, Text, Button, View} from 'native-base';
import HeaderScreen from './shared/HeaderScreens';
import Axios from 'axios';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentDidMount() {
    Axios.get(
      'http://10.10.10.7:3020/' +
        JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID')),
    )
      .then(response => this.setState({data: response.data}))
      .catch(error => console(error));
  }

  render() {
    const {data} = this.state;
    return (
      <Container>
        <HeaderScreen navigation={this.props.navigation} />
        {data.length === 0 ? (
          <Text>Loading</Text>
        ) : (
          data.map((item, index) => (
            <Content>
              <View>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    height: 200,
                    width: null,
                    flex: 1,
                    marginBottom: -200,
                  }}
                />
                <Thumbnail
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    height: 180,
                    width: 130,
                    top: 50,
                    left: -10,
                    alignSelf: 'flex-end',
                  }}
                />
              </View>
              <View style={{paddingLeft: 10, marginTop: -30}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 23,
                    lineHeight: 23,
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
                <Text style={{color: 'black', fontSize: 17, lineHeight: 17}}>
                  {item.writer}
                </Text>
              </View>
              <View style={{padding: 15, paddingTop: 50}}>
                <Text style={{fontSize: 14}}>
                  testtesttetsetesetse test test test test test test test test
                  test testtesttetsetesetse test test test test test test test
                  test test testtesttetsetesetse test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test123 test test test test test test test test test
                  test test test test123
                </Text>
              </View>
              <View style={{marginBottom: 50, alignItems: 'center', flex: 2}}>
                <Button
                  rounded
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    width: 200,
                    backgroundColor: '#F4CF5D',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>RENT</Text>
                </Button>
              </View>
            </Content>
          ))
        )}
      </Container>
    );
  }
}
