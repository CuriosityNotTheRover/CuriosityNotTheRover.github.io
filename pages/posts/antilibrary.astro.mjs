export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('../../chunks/pages/Antilibrary_fd975e6b.mjs').then(n => n.A);

export { page };
