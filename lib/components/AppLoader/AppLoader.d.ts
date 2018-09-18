import * as React from 'react';
interface IAppLoader extends React.ClassAttributes<AppLoader> {
    animateTo: number;
    duration: number;
    image: any;
    type: string;
    isAppLoaded: boolean;
    splashscreenBackground: string;
}
declare class AppLoader extends React.Component<IAppLoader, any> {
    static defaultProps: IAppLoader;
    constructor(props: any);
    started: boolean;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
export default AppLoader;
