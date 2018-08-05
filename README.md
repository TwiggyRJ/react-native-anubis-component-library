# React Native Anubis Component Library

This a barebones component library for React Native, the components here are made to give you scaffolding to create your own unique components.

This started as base components from my different projects, I build a base component and extend it on my various different pages.

## Getting Started

This library is built using TypeScript and Styled-Components, to use these components you will need to use Styled-Components.

All styles passed to these components should be strings.

### Prerequisites

You need to use npm or yarn as this is an NPM module

### Installing

To install run one of the following commands:

```
yarn add react-native-anubis-component-library
```

```
npm install react-native-anubis-component-library
```

Once you have installed it import your desired components:

```
import { Button } from 'react-native-anubis-component-library';
```

## Example

```
import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-anubis-component-library';

export default class ExamplePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Button
        platformProps={{
          containerStyles: '', /* container style wrapper around TouchableNativeFeedback */
          isHighlight: true, /* If button should be a TouchableHighlight
          ripple: '#FFFFFF', /* TouchableNativeFeedback ripple colour */
          rippleBorder: true, /* TouchableNativeFeedback has no border */
        }}
        customStyles={''}
        textStyles={'color: #ffffaa'}
        onPress={() => alert('I have been clicked!')}
        text="Click Me!"
      />
    )
  }
}
```

## Components

Here are the components provided in this component library

### Buttons

The button component is provided with a number of configurations. The component will default to [TouchableNativeFeedback](https://facebook.github.io/react-native/docs/touchablenativefeedback) on Android and [TouchableHighlight](https://facebook.github.io/react-native/docs/touchablehighlight) and [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity).

The Button component takes these props:

- customStyles: string of styles to be passed to the button
- platformProps:
  - containerStyles
  - isHighlight: on iOS sets the button as TouchableHighlight (iOS Only)
  - ripple: on Android string of ripple colour for TouchableNativeFeedback (Android Only)
  - rippleBorder: on Android boolean if true for TouchableNativeFeedback (Android Only)
- onPress: function for the onPress event
- text: your text
- textStyles: string of styles for the button text
- type: these define what sort of button you will get
  - component: Component acts like a HOC and it renders your component inside it.
  - container: Barebones with no styling
  - text: an ordinary button which contains text

## Built With

* [TypeScript](https://www.typescriptlang.org/) - TypeScript v3
* [Styled-Components](https://www.styled-components.com/) - Components are built and styled using Styled-Components
* [Yarn](https://yarnpkg.com/en/) - Package Manager

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

- **Aaron Fryer** - *Initial work* - [TwiggyRJ](https://github.com/TwiggyRJ/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
