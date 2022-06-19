import config from './config';

import { i18n, storage } from './servises';

i18n.init({
    languages: config.language.list,
    currentLanguage: storage.local.get(config.language.key),
    initialLanguage: config.language.initial,
    backend: {
        loadPath: `${config.api.base_url}/v1/translations/{{lng}}`
    },
    onChange: language => storage.local.set('language', language)
});

// http.init({
//   configFn: () => {
//     const state = store.getState();
//     const token = state.auth.tokens.accessToken;

//     return {
//       baseURL: config.api.base_url,
//       headers: {
//         ...(token ? { Authorization: `Bearer ${token}` } : {})
//       }
//     };
//   }
// });

