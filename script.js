// Find elements from DOM
const lava = document.querySelector('.lava');
const messageH3 = document.querySelector('.message');
const smileImg = document.getElementById('smile');

// Init variables and constants
let current_top = 160;
let current_level_scores = 0;
const level_threshold = 45;
const top_death = -85;
let current_level = 1;
const tick = 2000; // milliseconds
const top_step = 5;
const tasks = [
    'Придумайте пароль сложности ☆',
    'Придумайте пароль сложности ☆☆',
    'Придумайте пароль сложности ☆☆☆',
    'Придумайте пароль сложности ☆☆☆☆',
    'Придумайте пароль сложности ☆☆☆☆☆',
];
// init top value is 160
// to up lava on X pixels let subtract 150 - X
// game over in top = -85px
lava.style.top = current_top + 'px'; //it's work

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthMeter = document.getElementById('strength-meter');
    const recommendations = document.getElementById('recommendations');

    const strength = calculatePasswordStrength(password);
    const star = "☆";

    strengthMeter.innerHTML = star.repeat(strength);
    recommendations.innerHTML = getRecommendations(strength);
}

function calculatePasswordStrength(password) {
    let strength = 0;

    // Проверка длины пароля
    if (password.length >= 8) {
        strength++;
    }
    // Проверка наличия хотя бы одной заглавной буквы
    if (/[A-Z]/.test(password)) {
        strength++;
    }
    // Проверка наличия хотя бы одной строчной буквы
    if (/[a-z]/.test(password)) {
        strength++;
    }
    // Проверка наличия хотя бы одной цифры
    if (/\d/.test(password)) {
        strength++;
    }
    // Проверка наличия хотя бы одного специального символа
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
        strength++;
    }

    return strength;
}

function getRecommendations(strength) {
    switch (strength) {
        case 1:
            return "Очень слабый пароль. Улучшите его, добавив больше символов и разнообразие.";
        case 2:
            return "Слабый пароль. Рекомендуется добавить цифры, специальные символы и увеличить длину.";
        case 3:
            return "Средний пароль. Улучшите его, добавив еще больше разнообразия символов и увеличив длину.";
        case 4:
            return "Хороший пароль, но всегда есть место для улучшений. Рекомендуется увеличить длину.";
        case 5:
            return "Отличный пароль! Так держать!";
        default:
            return "";
    }
}

function gameTick() {
    console.log('Call gameTick');
    current_top = current_top - top_step;
    current_level_scores = current_level_scores + top_step;
    if (current_level_scores >= level_threshold && current_level <= 6) {
        current_level_scores = 0;
        current_level = current_level + 1;
    }
    console.log(current_level);
    updateUI();
}

function updateUI() {
    // Подъем лавы
    lava.style.top = current_top + 'px';
    messageH3.innerHTML = getRandomTask();
    // Изменение эмоции
    smileImg.src = `./img/emojies/emoji_level_${current_level}.png`;
}

function getRandomTask() {
    const tasksCount = tasks.length;
    const randomIndex = Math.floor(Math.random() * tasksCount);
    return tasks[randomIndex];
}

document.addEventListener('DOMContentLoaded', function () {
    try {
        // Main thread
        setInterval(
            gameTick,
            tick
        );
    } catch (error) {
        console.error(error);
    }
});
