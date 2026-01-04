// ./scripts/yearUpdate.js
const updateYear = () => {
    const el = document.getElementById('year');
    if (el) {
        el.textContent = new Date().getFullYear();
    } else {
        console.error("No encontré el ID 'year', fijate el HTML bro.");
    }
};

updateYear();