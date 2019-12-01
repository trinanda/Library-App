import React, {Component} from 'react';
import {Image, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {View, Card, CardItem, Text, Content, Container} from 'native-base';
import Axios from 'axios';
import Config from 'react-native-config';
import HeaderScreen from '../shared/HeaderScreen';
import FooterScreen from '../shared/FooterScreen';

const ItemFunction = ({title, writer, image, navigation}) => {
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity style={{padding: 10}} onPress={navigation}>
          <Card>
            <CardItem cardBody>
              <Image
                source={{uri: image}}
                style={{height: 100, width: 50, padding: 77, flex: 1}}
              />
            </CardItem>
            <CardItem footer>
              <View>
                <Text style={{color: '#98A0B3'}}>{writer}</Text>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <Text>Start</Text>
              </View>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this.category = this.props.navigation.getParam('category', 'NO-CATEGORY');
  }

  componentDidMount() {
    Axios.get(Config.API_URL + '/categories/' + this.category)
      .then(response => this.setState({entries: response.data}))
      .catch(error => console(error));
  }

  render() {
    return (
      <Container>
        <HeaderScreen
          navigation={this.props.navigation}
          title={this.category}
        />
        <Content>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              data={this.state.entries}
              renderItem={({item}) => (
                <ItemFunction
                  writer={item.writer}
                  title={item.name}
                  image={item.image}
                  id={item.id}
                  navigation={() => {
                    this.props.navigation.navigate('Detail', {
                      itemId: item.id,
                      otherParam: 'anything you want here',
                    });
                  }}
                />
              )}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </SafeAreaView>
        </Content>
        <FooterScreen />
      </Container>
    );
  }
}
