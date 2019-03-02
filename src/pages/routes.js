// routesMap

const routes = {
  HOME: {
    path: '/',
  },
  PAGE_2: {
    path: '/page2',
  },
  PAGE_3: {
    path: '/page3',
  },
};

export const home = () => ({ type: 'HOME' });
export const page2 = () => ({ type: 'PAGE_2' });
export const page3 = () => ({ type: 'PAGE_3' });

export default routes;
