import React, {Component} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {View, Card, CardItem, Left} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Axios from 'axios';

export default class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    Axios.get('http://10.10.10.7:3020/categories')
      .then(respon => this.setState({entries: respon.data}))
      .catch(error => console.log(error));
  }

  _renderItem({item, index}) {
    return (
      <View>
        <TouchableOpacity>
          <Card>
            <CardItem cardBody style={{backgroundColor: '#28BFDB'}}>
              <Left style={{marginRight: -130, paddingLeft: 10}}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {item.category}
                </Text>
              </Left>
              <Image
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                }}
                style={{height: 120, width: null, flex: 1, borderRadius: 20}}
              />
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        layout={'default'}
        ref={c => {
          this._carousel = c;
        }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={400}
        itemWidth={250}
      />
    );
  }
}
