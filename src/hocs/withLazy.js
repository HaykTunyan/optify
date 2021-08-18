import pMinDelay from 'p-min-delay';
import loadable from '@loadable/component';

const DELAY = 75;

const withLazy = (componentImport) => loadable(() => pMinDelay(componentImport, DELAY), 'loader');
export default withLazy;
