import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";
import { load, STORAGE_KEYS } from "../utils/storage";
import en from "./en.json";
import ja from "./ja.json";


const DEFAULT_LANG = 'en';
I18n.fallbacks = true;
I18n.translations = { en, ja };

export const setupLocalization = async () => {
  const locales = RNLocalize.getLocales();
  const userAppLanguage = await load(STORAGE_KEYS.USER_APP_LANGUAGE);

  if (userAppLanguage) { // User stored app language from settings
    I18n.language = userAppLanguage;
    I18n.locale = userAppLanguage;

  } else if (Array.isArray(locales)) {
    I18n.locale = locales[0].languageTag;
    const locale = locales[0].languageCode;

    if (locale == 'en' || locale == 'ja') { // Supported languages
      I18n.language = locale;
    } else { // DEFAULT
      I18n.language = DEFAULT_LANG;
      I18n.locale = DEFAULT_LANG;
    }

  } else { // Localization failed to get locales
    I18n.language = DEFAULT_LANG;
    I18n.locale = DEFAULT_LANG;
  }

  // Global Scope AppLang purpose 
  global.AppLang = I18n.language;
}

export function translate(key: string, options?: I18n.TranslateOptions) {
  return key ? I18n.t(key, options) : null
}
