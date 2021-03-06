import * as React from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  TouchableOpacity
} from 'react-native';
import {
  ButtonContainerHighlight,
  ButtonContainerOpacity,
  ButtonContainerAndroidInnerView,
  ButtonContainerAndroidOuterView,
  ButtonText,
} from './styles';

interface DefaultProps {
  platformProps: PlatformProps,
  children: any,
  customStyles: string,
  onPress: any,
  text: string,
  textStyles: string,
  type: string,
}

interface PlatformProps {
  containerStyles: string,
  isHighlight: boolean,
  ripple: string,
  rippleBorder: boolean,
}

const Button: React.StatelessComponent<DefaultProps> = ({ children, customStyles, platformProps, textStyles, text, type, onPress }) => {
  const { containerStyles, isHighlight, ripple, rippleBorder }: PlatformProps = {} = platformProps;
  
  if (type === 'component') {
    if (Platform.OS === 'android' && ripple) {
      return (
        <ButtonContainerAndroidOuterView styling={containerStyles}>
          <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(ripple, rippleBorder)}>
            <ButtonContainerAndroidInnerView styling={customStyles}>
              {children}
            </ButtonContainerAndroidInnerView>
          </TouchableNativeFeedback>
        </ButtonContainerAndroidOuterView>
      )
    }

    if (isHighlight) {
      return (
        <ButtonContainerHighlight styling={customStyles} onPress={onPress}>
          {children}
        </ButtonContainerHighlight>
      );
    }
    
    return (
      <ButtonContainerOpacity styling={customStyles} onPress={onPress}>
        {children}
      </ButtonContainerOpacity>
    );
  } else if (type === 'container') {
    if (Platform.OS === 'android' && ripple) {
      return (
        <ButtonContainerAndroidOuterView styling={containerStyles}>
          <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(ripple, rippleBorder)}>
            {children}
          </TouchableNativeFeedback>
        </ButtonContainerAndroidOuterView>
      )
    }

    if (isHighlight) {
      return (
        <TouchableHighlight onPress={onPress}>
          {children}
        </TouchableHighlight>
      );
    }

    return (
      <TouchableOpacity onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }

  if (Platform.OS === 'android' && ripple) {
    return (
      <ButtonContainerAndroidOuterView styling={containerStyles}>
        <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(ripple, rippleBorder)}>
          <ButtonContainerAndroidInnerView styling={customStyles}>
            <ButtonText styling={textStyles}>
              {text}
            </ButtonText>
          </ButtonContainerAndroidInnerView>
        </TouchableNativeFeedback>
      </ButtonContainerAndroidOuterView>
    )
  }

  if (isHighlight) {
    return (
      <ButtonContainerHighlight styling={customStyles} onPress={onPress}>
        <View>
          <ButtonText styling={textStyles}>
            {text}
          </ButtonText>
        </View>
      </ButtonContainerHighlight>
    );
  }

  return (
    <ButtonContainerOpacity styling={customStyles} onPress={onPress}>
      <ButtonText styling={textStyles}>
        {text}
      </ButtonText>
    </ButtonContainerOpacity>
  );
};

Button.defaultProps = {
  customStyles: '',
  text: 'Button Text',
  onPress: () => {return false},/*alert('Button Pressed'),*/
};

export default Button;
