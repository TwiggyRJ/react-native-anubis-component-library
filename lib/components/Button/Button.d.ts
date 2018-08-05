import * as React from 'react';
interface DefaultProps {
    platformProps: PlatformProps;
    children: any;
    customStyles: string;
    onPress: any;
    text: string;
    textStyles: string;
    type: string;
}
interface PlatformProps {
    containerStyles: string;
    isHighlight: boolean;
    ripple: string;
    rippleBorder: boolean;
}
declare const Button: React.StatelessComponent<DefaultProps>;
export default Button;
