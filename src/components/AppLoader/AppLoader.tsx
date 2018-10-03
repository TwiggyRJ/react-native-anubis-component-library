import * as React from 'react';
import { isIOS } from '../../utils/platform';
import AppLoaderIOS from './AppLoaderIOS';

function AppLoader(props: any) {
  if (isIOS) {
    return (
      <AppLoaderIOS {...props}>
        {props.children}
      </AppLoaderIOS>
    );
  } else {
    return props.children;
  }
}

export default AppLoader;
