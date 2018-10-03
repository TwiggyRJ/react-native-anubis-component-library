import * as React from 'react';
interface IAppLoaderIOS extends React.ClassAttributes<AppLoaderIOS> {
    animateTo: number;
    duration: number;
    image: any;
    type: string;
    isAppLoaded: boolean;
    splashscreenBackground: string;
}
declare class AppLoaderIOS extends React.Component<IAppLoaderIOS, any> {
    static defaultProps: IAppLoaderIOS;
    constructor(props: any);
    started: boolean;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
export default AppLoaderIOS;
