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
        services_title: "خدماتنا",
        service_daily_care_title: "الرعاية اليومية في المنزل",
        service_daily_care_description: "يقوم مقدم الرعاية بزيارة المسن في المنزل لتقديم المساعدة طوال اليوم.",
        service_doctor_visits_title: "مرافقة لزيارات الطبيب أو المهمات",
        service_doctor_visits_description: "يرافق شخص ما المسن إلى المواعيد الطبية أو الخروجات المهمة.",
        service_medication_title: "مساعدة الأدوية",
        service_medication_description: "تنظيم وتتبع جداول الأدوية.",
        service_hygiene_title: "دعم النظافة الشخصية",
        service_hygiene_description: "مساعدة آمنة ومحترمة في الأنشطة اليومية مثل الاستحمام أو ارتداء الملابس.",
        service_overnight_title: "الرعاية الليلية أو الإقامة المؤقتة",
        service_overnight_description: "للحالات التي تتطلب وجودًا ليليًا أو رعاية قصيرة الأمد.",
        service_companion_title: "مرافق للمسنين في المناسبات",
        service_companion_description: "نقدم مرافقًا متعاونًا ليبقى مع المسنين خلال المناسبات العائلية، الأفراح، أو أي مناسبة خاصة.",
        why_us_title: "لماذا تختارنا؟",
        why_us_background_check: "فحص خلفية كامل لكل مقدم رعاية",
        why_us_scheduling: "جدولة مرنة بناءً على احتياجاتك",
        why_us_reviews: "تقييمات حقيقية من العائلات",
        why_us_support: "دعم على مدار الساعة",
        why_us_care_plans: "خطط رعاية مخصصة لكل عميل",
        why_us_pricing: "تسعير ميسور وشفاف",
        why_us_multilingual: "مقدمو رعاية متعددو اللغات متاحون عند الطلب",
        book_now: "احجز الآن",
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
        services_title: "Our Services",
        service_daily_care_title: "In-Home Daily Care",
        service_daily_care_description: "A caregiver visits the senior at home to assist throughout the day.",
        service_doctor_visits_title: "Accompaniment to Doctor Visits or Errands",
        service_doctor_visits_description: "Someone accompanies the senior to medical appointments or important outings.",
        service_medication_title: "Medication Assistance",
        service_medication_description: "Organizing and tracking medication schedules.",
        service_hygiene_title: "Personal Hygiene Support",
        service_hygiene_description: "Safe and respectful help with daily activities like bathing or dressing.",
        service_overnight_title: "Overnight or Temporary Stay Care",
        service_overnight_description: "For situations requiring overnight presence or short-term care.",
        service_companion_title: "Elderly Companion for Events",
        service_companion_description: "We offer a caring companion to stay with seniors during family events, weddings, or any special occasion.",
        why_us_title: "Why Choose Us?",
        why_us_background_check: "Full background check for every caregiver",
        why_us_scheduling: "Flexible scheduling based on your needs",
        why_us_reviews: "Real reviews from families",
        why_us_support: "24/7 Support",
        why_us_care_plans: "Personalized care plans for each client",
        why_us_pricing: "Affordable and transparent pricing",
        why_us_multilingual: "Multilingual caregivers available on request",
        book_now: "Book Now",
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

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });

    localStorage.setItem('language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage();
});