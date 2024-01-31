const lava = document.querySelector('.lava');
// init top value is 150
// to up lava on X pixels let subtract 150 - X
lava.style.top = 100 + 'px'; //it's work

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
