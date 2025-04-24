const translations = {
    ar: {
        site_title: "الأيدي الآمنة",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_contact: "تواصل معنا",
        nav_find_babysitters: "ابحث عن جليسات أطفال",
        nav_book_now: "احجز الآن",
        nav_dashboard: "الصفحة الشخصية",
        nav_login_signup: "تسجيل الدخول / إنشاء حساب",
        contact_title: "تواصل معنا",
        contact_description: "يسعدنا سماع رأيك! املأ النموذج أدناه وسنرد عليك في أقرب وقت.",
        name_label: "الاسم",
        email_label: "البريد الإلكتروني",
        phone_label: "رقم الهاتف",
        message_label: "رسالتك",
        submit_button: "إرسال",
        success_message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.",
        error_message: "حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى.",
        footer_company_title: "الأيدي الآمنة",
        footer_company_description: "احجز جليسات أطفال موثوقة ومُتحقق منها بسهولة وثقة.",
        footer_links_title: "الروابط",
        footer_contact_title: "تواصل معنا",
        footer_contact_email: "البريد الإلكتروني: Safehands.com",
        footer_contact_phone: "رقم الهاتف: 01279581077",
        footer_contact_address: "العنوان: 202 شارع باكوس، الإسكندرية، مصر",
        footer_copyright: "جميع الحقوق محفوظة. 2025 الأيدي الآمنة."
    },
    en: {
        site_title: "Safe Hands",
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        nav_find_babysitters: "Find Babysitters",
        nav_book_now: "Book Now",
        nav_dashboard: "My profile",
        nav_login_signup: "Login/Sign Up",
        contact_title: "Contact Us",
        contact_description: "We'd love to hear from you! Fill out the form below and we'll get back to you soon.",
        name_label: "Name",
        email_label: "Email",
        phone_label: "Phone Number",
        message_label: "Your Message",
        submit_button: "Send",
        success_message: "Your message has been sent successfully! We'll contact you soon.",
        error_message: "An error occurred while sending the message. Please try again.",
        footer_company_title: "Safe Hands",
        footer_company_description: "Trusted Babysitting, Book reliable, vetted babysitters for your children with ease and confidence.",
        footer_links_title: "Links",
        footer_contact_title: "Contact Us",
        footer_contact_email: "Email: Safehands.com",
        footer_contact_phone: "Phone: 01279581077",
        footer_contact_address: "Address: 202 Bakos Street, Alexandria, Egypt",
        footer_copyright: "All rights reserved. 2025 Safe Hands."
    }
};

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    document.getElementById('htmlLang').setAttribute('lang', lang);
    document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('formLanguage').value = lang;

    document.getElementById('name').placeholder = lang === 'ar' ? 'أدخل اسمك' : 'Enter your name';
    document.getElementById('email').placeholder = lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email';
    document.getElementById('phone').placeholder = lang === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number';
    document.getElementById('message').placeholder = lang === 'ar' ? 'اكتب رسالتك هنا' : 'Write your message here';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });

    localStorage.setItem('language', lang);
}

window.onload = function() {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage();
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = this;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    fetch('contact.php', {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset();
        } else {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }
    })
    .catch(() => {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    });
});