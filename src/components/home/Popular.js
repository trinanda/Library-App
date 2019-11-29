import React, {Component} from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {View, Card, CardItem} from 'native-base';
import Axios from 'axios';

// TODO | InsyaAllah will continuing working in this file
// function Item({title, writer, image, id, navigation}) {
const Item = ({title, writer, image, id, navigation}) => {
  return (
    <SafeAreaView>
      <Text>{id}</Text>
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
  );
};

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }
  componentDidMount() {
    Axios.get('http://10.10.10.7:3020/').then(res => {
      const library = res.data;
      console.log(library);
      this.setState({entries: res.data});
    });
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.entries}
          renderItem={({item}) => (
            <Item
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
    );
  }
}
