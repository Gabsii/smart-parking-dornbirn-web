/**
 *
 * Asynchronously loads the component for Nöd
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
