// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('turbo:load', () => {
    const saveBtn = document.getElementById('click-me');

    saveBtn.addEventListener('click', e => {
        if (confirm('Are you sure?')) {
            location.reload();
        }
    });
});
