// Simple LOGIN LOGIC  
const users = {}; // Dummy user storage  

document.getElementById('loginForm').addEventListener('submit', function (e) {  
    e.preventDefault();  
    // Implement your login logic here (e.g., check username/password)  
    window.location.href = 'main.html'; // Navigate to main page after login  
});  

document.getElementById('signupForm').addEventListener('submit', function (e) {  
    e.preventDefault();  
    // Save user data logic here  
    alert('User registered!');  
    window.location.href = 'index.html'; // Redirect to login after signup  
});  

// Language Translation Handling  
function changeLanguage() {  
    const lang = document.getElementById('lang').value;  
    // Here you'd implement translations  
    document.querySelector('h1').innerText = translations[lang]['header'];  
}  

// Dummy translation object  
const translations = {  
    fa: { header: 'به برنامه تمرین خوش آمدید' },  
    en: { header: 'Welcome to the Fitness App' },  
    fr: { header: 'Bienvenue dans l\'application de fitness' },  
    ru: { header: 'Добро пожаловать в приложение для фитнеса' },  
    es: { header: 'Bienvenido a la aplicación de fitness' },  
    ar: { header: 'مرحبًا بكم في تطبيق اللياقة البدنية' },  
};  

// If using localStorage for session management  
function logout() {  
    // Clear user session and redirect to login  
    window.location.href = 'index.html';  
} 