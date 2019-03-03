// NOTE DO NOT place any secret keys in your client config!
export const client = {

};

// Config for server
export const server = {
  proxy: {
    apis: [
      {
        name: 'swapi',
        url: 'https://swapi.co/api',
        // auth: Optional Auth Name
      },
    ],
    auths: [
      {
        name: 'authname',
        // Auth based parameters?
        // secret: 'auth secret',
      },
    ],
  }
};
