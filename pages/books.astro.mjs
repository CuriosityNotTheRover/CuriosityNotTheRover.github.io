export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('../chunks/pages/index_12464a4e.mjs').then(n => n.b);

export { page };
