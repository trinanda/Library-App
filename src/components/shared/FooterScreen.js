import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import {withNavigation} from 'react-navigation';

class FooterScreen extends Component {
  render() {
    return (
      <Footer style={{elevation: 150}}>
        <FooterTab style={{backgroundColor: 'white'}}>
          <Button
            style={{backgroundColor: 'white'}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="home" style={{color: 'black'}} />
          </Button>
          <Button
            active
            style={{backgroundColor: 'white'}}
            onPress={() => this.props.navigation.navigate('History')}>
            <Icon active name="timer" color="black" style={{color: 'black'}} />
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="person" style={{color: 'black'}} />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
export default withNavigation(FooterScreen);
