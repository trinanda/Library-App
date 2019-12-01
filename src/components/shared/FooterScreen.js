import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
export default class FooterScreen extends Component {
  render() {
    return (
      <Footer style={{elevation: 150}}>
        <FooterTab style={{backgroundColor: 'white'}}>
          <Button style={{backgroundColor: 'white'}}>
            <Icon name="home" style={{color: 'black'}} />
          </Button>
          <Button active style={{backgroundColor: 'white'}}>
            <Icon active name="timer" color="black" style={{color: 'black'}} />
          </Button>
          <Button>
            <Icon name="person" style={{color: 'black'}} />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
