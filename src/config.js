// NOTE DO NOT place any secret keys in your client config!
const config = {
  someclientconfig: 'value...',
};

// Server Only Config (Not exposed to client)
if (__SERVER__) {
  // Append Secrets to server config from env vars
  config.host = process.env.HOST || 'http://localhost';
  config.port = process.env.PORT || 3000;
  config.proxy = {
    apis: [
      {
        name: 'swapi',
        url: process.env.SWAPI_API_HOST,
        // auth: Optional Auth Name
      },
    ],
    auths: [
      {
        name: 'authname',
        // Auth based parameters?
        // secret: process.env.MY_API_SECRET,
      },
    ],
  };
}

export default config;
