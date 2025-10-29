// Temperature Control
let temperature = 16;
const tempValue = document.getElementById('tempValue');
const tempUp = document.getElementById('tempUp');
const tempDown = document.getElementById('tempDown');

tempUp.addEventListener('click', () => {
    temperature++;
    tempValue.textContent = `${temperature}°C`;
});

tempDown.addEventListener('click', () => {
    temperature--;
    tempValue.textContent = `${temperature}°C`;
});

// Climate Toggle
const climateToggle = document.getElementById('climateToggle');
climateToggle.addEventListener('click', () => {
    climateToggle.classList.toggle('active');
    climateToggle.textContent = climateToggle.classList.contains('active') ? 'On' : 'Off';
});

// Light Switch
const lightSwitch = document.getElementById('lightSwitch');
const lightSlider = lightSwitch.querySelector('.switch-slider');

lightSwitch.addEventListener('click', () => {
    lightSlider.classList.toggle('active');
});

// Vacuum Switch
const vacuumSwitch = document.getElementById('vacuumSwitch');
const vacuumSlider = vacuumSwitch.querySelector('.switch-slider');

vacuumSwitch.addEventListener('click', () => {
    vacuumSlider.classList.toggle('active');
});

// Play/Pause Button
const playBtn = document.getElementById('playBtn');
let isPlaying = true;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        // Pause icon
        playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>';
    } else {
        // Play icon
        playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
    }
});

// Reminders
const reminderItems = document.querySelectorAll('.reminder-item');

reminderItems.forEach(item => {
    item.addEventListener('click', () => {
        const unchecked = item.querySelector('.unchecked');
        const checked = item.querySelector('.checked');
        
        unchecked.classList.toggle('hidden');
        checked.classList.toggle('hidden');
        item.classList.toggle('completed');
    });
});

// Room Tabs
const roomTabs = document.querySelectorAll('.room-tab');

roomTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        roomTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Sidebar Icons
const sidebarIcons = document.querySelectorAll('.sidebar-icon');

sidebarIcons.forEach((icon, index) => {
    if (index > 0) { // Skip first icon (home)
        icon.addEventListener('click', () => {
            sidebarIcons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');
        });
    }
});
