import * as React from 'react';
import {
  Animated,
  StatusBar,
  View,
  MaskedViewIOS,
} from 'react-native';

class AppLoader extends React.Component {
  static isAppLoaded: boolean = false;

  constructor(props: any) {
    super(props);

    this.state = {
      appLoader: new Animated.Value(0),
      animationComplete: false,
    }
  }
}

export default AppLoader;
