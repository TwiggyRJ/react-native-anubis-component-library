import * as React from 'react';
import {
  Animated,
  StatusBar,
  View,
  MaskedViewIOS,
} from 'react-native';
import {
  Loader,
  LoaderCenteredContent,
  LoaderSplashScreenLayer,
  LoaderWhiteLayer,
} from './styles';

interface IAppLoader extends React.ClassAttributes<AppLoader> {
  animateTo: number;
  duration: number;
  image: string;
  type: string;
  splashscreenBackground: string;
}

class AppLoader extends React.Component<IAppLoader, any> {
  static defaultProps: IAppLoader = {
    animateTo: 100,
    duration: 1000,
    image: 'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_1280.png',
    type: 'image',
    splashscreenBackground: '#551a8b',
  };
  static isAppLoaded: boolean = false;

  constructor(props: any) {
    super(props);

    this.state = {
      appLoader: new Animated.Value(0),
      animationComplete: false,
    }
  }

  componentDidMount() {
    Animated.timing(this.state.appLoader, {
      toValue: this.props.animateTo,
      duration: this.props.duration,
      useNativeDriver: true,
    }).start(() => {
      this.setState({
        animationComplete: true,
      });
    });
  }

  render () {
    const opacityClearToVisible = {
      opacity: this.state.appLoader.interpolate({
        inputRange: [0, 15, 30],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp',
      }),
    };

    const imageScale = {
      transform: [
        {
          scale: this.state.appLoader.interpolate({
            inputRange: [0, 10, 100],
            outputRange: [1, 0.8, 70],
          }),
        },
      ],
    };

    const appScale = {
      transform: [
        {
          scale: this.state.appLoader.interpolate({
            inputRange: [0, 7, 100],
            outputRange: [1.1, 1.03, 1],
          }),
        },
      ],
    };

    return (
      <Loader>
        <StatusBar animated hidden={!this.state.animationComplete} />
        {
          !this.state.animationComplete ?
            <LoaderSplashScreenLayer background={this.props.splashscreenBackground} />
          : null
        }
        <MaskedViewIOS
          style={{ flex: 1 }}
          maskElement={
            <LoaderCenteredContent>
              <Animated.Image
                style={[{ height: 200, width: 200 }, imageScale]}
                source={this.props.image}
              />
            </LoaderCenteredContent>
          }
        >
          <LoaderWhiteLayer>
            <Animated.View style={[opacityClearToVisible, appScale, { flex: 1 }]}>
              {this.props.children}
            </Animated.View>
          </LoaderWhiteLayer>
        </MaskedViewIOS>
      </Loader>
    )
  }
}

export default AppLoader;
