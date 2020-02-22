/**
 *
 * Asynchronously loads the component for LeafletMap
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
