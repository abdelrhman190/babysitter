// const translations = {
//     ar: {
//         site_title: "الأيدي الآمنة",
//         nav_home: "الرئيسية",
//         nav_services: "الخدمات",
//         nav_about: "من نحن",
//         nav_contact: "تواصل معنا",
//         nav_find_babysitters: "ابحث عن جليسات أطفال",
//         nav_book_now: "احجز الآن",
//         nav_dashboard: "لوحة التحكم",
//         nav_login_signup: "تسجيل الدخول / إنشاء حساب",
//         signup_title: "إنشاء حساب",
//         signup_email_prompt: "أو استخدم بريدك الإلكتروني للتسجيل",
//         name_placeholder: "الاسم",
//         email_placeholder: "البريد الإلكتروني",
//         password_placeholder: "كلمة المرور",
//         signup_button: "تسجيل",
//         signin_title: "تسجيل الدخول",
//         signin_email_prompt: "أو استخدم بريدك الإلكتروني وكلمة المرور",
//         forgot_password: "نسيت كلمة المرور؟",
//         signin_button: "تسجيل الدخول",
//         welcome_back: "مرحبًا بعودتك!",
//         signin_prompt: "أدخل بياناتك الشخصية لاستخدام جميع ميزات الموقع",
//         hello_friend: "مرحبًا، صديق!",
//         signup_prompt: "سجل ببياناتك الشخصية لاستخدام جميع ميزات الموقع",
//         back_button: "رجوع",
//         footer_company_title: "الأيدي الآمنة",
//         footer_company_description: "احجز جليسات أطفال موثوقة ومُتحقق منها بسهولة وثقة.",
//         footer_links_title: "الروابط",
//         footer_contact_title: "تواصل معنا",
//         footer_contact_email: "البريد الإلكتروني: Safehands.com",
//         footer_contact_phone: "رقم الهاتف: 01279581077",
//         footer_contact_address: "العنوان: 202 شارع باكوس، الإسكندرية، مصر",
//         footer_copyright: "جميع الحقوق محفوظة. 2025 الأيدي الآمنة."
//     },
//     en: {
//         site_title: "Safe Hands",
//         nav_home: "Home",
//         nav_services: "Services",
//         nav_about: "About",
//         nav_contact: "Contact",
//         nav_find_babysitters: "Find Babysitters",
//         nav_book_now: "Book Now",
//         nav_dashboard: "Dashboard",
//         nav_login_signup: "Login/Sign Up",
//         signup_title: "Create Account",
//         signup_email_prompt: "or use your email for registration",
//         name_placeholder: "Name",
//         email_placeholder: "Email",
//         password_placeholder: "Password",
//         signup_button: "Sign Up",
//         signin_title: "Sign In",
//         signin_email_prompt: "or use your email password",
//         forgot_password: "Forget Your Password?",
//         signin_button: "Sign In",
//         welcome_back: "Welcome Back!",
//         signin_prompt: "Enter your personal details to use all of site features",
//         hello_friend: "Hello, Friend!",
//         signup_prompt: "Register with your personal details to use all of site features",
//         back_button: "Back",
//         footer_company_title: "Safe Hands",
//         footer_company_description: "Trusted Babysitting, Book reliable, vetted babysitters for your children with ease and confidence.",
//         footer_links_title: "Links",
//         footer_contact_title: "Contact Us",
//         footer_contact_email: "Email: Safehands.com",
//         footer_contact_phone: "Phone: 01279581077",
//         footer_contact_address: "Address: 202 Bakos Street, Alexandria, Egypt",
//         footer_copyright: "All rights reserved. 2025 Safe Hands."
//     }
// };

// function changeLanguage() {
//     const lang = document.getElementById('languageSelect').value;
//     document.getElementById('htmlLang').setAttribute('lang', lang);
//     document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

//     document.querySelectorAll('[data-i18n]').forEach(element => {
//         const key = element.getAttribute('data-i18n');
//         element.textContent = translations[lang][key];
//     });

//     document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
//         const key = element.getAttribute('data-i18n-placeholder');
//         element.placeholder = translations[lang][key];
//     });

//     localStorage.setItem('language', lang);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('language') || 'ar';
//     document.getElementById('languageSelect').value = savedLang;
//     changeLanguage();

    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
// });