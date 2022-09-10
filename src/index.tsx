/* @refresh reload */
import { hydrate, render } from 'solid-js/web';

import App from './App';

if (import.meta.env.PROD)
    hydrate(() => <App />, document.getElementById('root') as HTMLElement)
else
    render(() => <App />, document.getElementById('root') as HTMLElement)
