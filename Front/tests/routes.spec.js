import { createRouter, createWebHistory } from '../src/router/index.js';
import router from '../src/router/index.js';

describe('router', () => {
  it('should define the correct routes', () => {
    const expectedRoutes = ['/chat', '/chat:id', '/signin', '/signup'];
    const routes = router.getRoutes().map(route => route.path);

    expect(routes).toEqual(expect.arrayContaining(expectedRoutes));
  });
});