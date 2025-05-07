const translations = {
    ar: {
      site_title: "الأيدي الآمنة",
      nav_home: "الرئيسية",
      nav_services: "الخدمات",
      nav_about: "من نحن",
      nav_contact: "تواصل معنا",
      nav_find_babysitters: "ابحث عن جليسات أطفال",
      nav_book_now: "احجز الآن",
      nav_dashboard: " الصفحة الرئيسية",
      nav_login_signup: "تسجيل الدخول / إنشاء حساب",
      hero_title: "كيف يمكننا مساعدتك؟",
      hero_description: "ابحث عن نصائح وإجابات من فريق الدعم لدينا بسرعة أو تواصل معنا",
      search_placeholder: "ابحث عن إجابات...",
      send_button: "إرسال",
      allergy_title: "أنواع الحساسية الشائعة",
      allergy_general: "هل تعاني من أي حساسية؟",
      allergy_milk: "هل تعاني من حساسية الحليب؟",
      allergy_egg: "هل تعاني من حساسية البيض؟",
      allergy_peanut: "هل تعاني من حساسية الفول السوداني؟ (مثل اللوز)",
      allergy_seafood: "هل تعاني من حساسية المأكولات البحرية؟ (الأسماك أو الجمبري)",
      allergy_meat: "هل تعاني من حساسية اللحوم؟",
      allergy_pet: "هل تعاني من حساسية الحيوانات الأليفة؟ (القطط أو الكلاب)",
      allergy_wheat: "هل تعاني من حساسية القمح؟",
      allergy_other: "إذا كنت تعاني من أي حساسيات أخرى، من فضلك أخبرنا",
      allergy_placeholder: "اكتب حساسيتك هنا...",
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
      hero_title: "How Can We Help?",
      hero_description: "Find advice and answers from our support team fast or get in touch",
      search_placeholder: "Search for answers...",
      send_button: "Send",
      allergy_title: "Common Allergy Types",
      allergy_general: "Do you have an allergy?",
      allergy_milk: "Do you have a milk allergy?",
      allergy_egg: "Do you have an egg allergy?",
      allergy_peanut: "Do you have a peanut allergy? (like almonds)",
      allergy_seafood: "Do you have a seafood allergy? (fish or shrimp)",
      allergy_meat: "Do you have a meat allergy?",
      allergy_pet: "Do you have a pet allergy? (cats or dogs)",
      allergy_wheat: "Are you allergic to wheat?",
      allergy_other: "If you have any other allergies, please let us know",
      allergy_placeholder: "Type your allergy here...",
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
  
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      element.placeholder = translations[lang][key];
    });
  
    localStorage.setItem('language', lang);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage();
  });