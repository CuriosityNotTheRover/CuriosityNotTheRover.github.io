export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'preact-render-to-string';

const page = () => import('../chunks/pages/blog_9896de7c.mjs').then(n => n.b);

export { page };
