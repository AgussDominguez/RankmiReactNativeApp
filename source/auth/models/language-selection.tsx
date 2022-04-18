import i18n from '../../../i18n/i18n.config';
export interface ILang {
  [code: string]: string;
}

class LanguageSelection {
  changeSelectedLanguage(language: string) {
    i18n.changeLanguage(language);
  }
}

export default LanguageSelection;
