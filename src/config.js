// const ENV = process.env

const config = {
  app: {
    // env: ENV.REACT_APP_ENV,
    // version: ENV.REACT_APP_VERSION,
    // technology: ENV.REACT_APP_TECHNOLOGY,
    // isBeta: !!ENV.REACT_APP_IS_BETA,
    // isDev: ENV.REACT_APP_ENV !== 'production',
    // public_url: ENV.PUBLIC_URL
  },
  language: {
    key: 'language',
    initial: 'ru',
    list: ['uz', 'ru', 'en']
  },
  api: {
    base_url: 'https://politexapi.na4u.ru',
  },
};

export default config;
