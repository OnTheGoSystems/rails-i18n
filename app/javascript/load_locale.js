// app/assets/javascripts/load_data.js
export async function loadLocale() {
    const response = await fetch('/locales.json');
    const data = await response.json();
    return data;
}