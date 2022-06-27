import config from './config'
import { http } from "./servises"
import { i18n, storage } from './servises'

i18n.init({
    languages: config.language.list,
    currentLanguage: storage.local.get(config.language.key),
    initialLanguage: config.language.initial,
    backend: {
        loadPath: `${config.api.base_url}/v1/translations/{{lng}}`
    },
    onChange: language => storage.local.set('language', language)
})

http.init({
    configFn: () => {
        return {
            baseURL: config.api.base_url
        }
    }
})

