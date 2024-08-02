// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { I18n } from "i18n-js"
import { loadLocale } from './load_locale'

document.addEventListener('turbo:load', async () => {
    const translations = await loadLocale();
    const i18n = new I18n(translations);
    i18n.locale = document.body.dataset['locale'];
    const btn = document.getElementById('click-me');

    btn.addEventListener('click', e => {
        if (confirm(i18n.t('confirm'))) {
            location.reload();
        }
    });
});
