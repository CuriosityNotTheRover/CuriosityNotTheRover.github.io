export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('../../chunks/pages/_tag__60edd899.mjs').then(n => n._);

export { page };
