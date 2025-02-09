import { createI18n } from 'vue-i18n';
import en from './en.json';
import pt from './pt.json';

const messages = {
    en,
    pt,
};

const i18n = createI18n({
    locale: 'pt', // set default locale
    messages,
});

export default i18n;