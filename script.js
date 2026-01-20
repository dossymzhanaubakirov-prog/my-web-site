document.addEventListener('DOMContentLoaded', () => {
    
    // 1. АУДАРМАЛАР
    const translations = {
        kz: {
            nav_home: "Басты бет", nav_about: "Мен туралы", nav_skills: "Дағдылар", nav_hobbies: "Хобби", nav_interests: "Қызығушылықтар", nav_exp: "Тәжірибе", nav_contact: "Байланыс",
            hero_greeting: "Сәлем! Менің есімім", hero_name: "Dosymzhan Aubakir", hero_role: "Mobile / Web / AI Әзірлеуші", hero_desc: "Mobile, Web және AI бағытындағы маманмын. Заманауи технологиялармен сапалы цифрлық өнімдер жасаймын.", btn_contact: "Маған жазу", btn_cv: "Түйіндеме жүктеу",
            about_title: "Мен туралы", about_text: "Ең алдымен — Мұсылманмын. Елім — Қазақстан. Computer Science мамандығын игердім. IT-ға қызығушылық мектепте, техника жөндеуден басталды. Қазір Mobile, Web және AI Vibe Coding арқылы кез келген күрделі жобаларды сапалы жасаймын. Оған қоса техника жөндеп, бағдарлама орнатумен және ғылыми жобамен айналысамын. Спорт, дұрыс тамақтану және рухани дамуға қатты мән беремін.",
            skills_title: "Кәсіби дағдылар", hard_skills_title: "Кәсіби дағдылар", lang_title: "Тілдер", lang_kz: "Қазақ тілі", lang_ru: "Орыс тілі", lang_en: "Ағылшын тілі", level_native: "Ана тілі", level_inter: "Орташа (B2)", level_elem: "Бастапқы (A2)", soft_skills_title: "Жұмсақ дағдылар", soft_1: "Мәселені шешу", soft_2: "Топтық жұмыс", soft_3: "Бейімделгіштік", soft_4: "Коммуникация", soft_5: "Үнемділік", soft_6: "Сапаға мән беру",
            hobby_section_title: "Хоббилерім", hobby_sport_title: "Теннис", hobby_sport_desc: "Үстел және Үлкен теннис", hobby_type_title: "Speed Typing", hobby_type_desc: "Жылдамдық пен Фокус", hobby_clean_title: "Музыка & Тазалық", hobby_clean_desc: "Көтеріңкі көңіл-күй", hobby_info_title: "Жаңа технологиялар", hobby_info_desc: "AI және IT зерттеу",
            interests_title: "Қызығушылықтарым", 
            int_space: "Космос", int_physics: "Физика", int_it: "IT", int_tech: "Технология", int_company: "Компания", int_world: "Әлем", int_planet: "Планета", int_sports: "Спорт", int_movie: "Кино", int_music: "Музыка", int_natural: "Табиғат", int_business: "Бизнес", int_crypto: "Крипто", int_science: "Ғылым", int_football: "Футбол", int_health: "Денсаулық", int_news: "Жаңалықтар", int_politics: "Саясат", int_travel: "Саяхат", int_stocks: "Акциялар", int_social: "Желілер", int_gym: "Зал", int_ai: "AI", int_photo: "Фото", int_video: "Видео", int_religion: "Дін",
            exp_title: "Тәжірибе және Білім", job1_role: "IT Маманы (Remote)", job1_place: "Hotel Rixos Turkistan", job1_desc: "Мобильді қосымшалар мен IT жобаларын басқару, сервер мен желіні қолдау.", job2_role: "Фрилансер", job2_place: "Kwork платформасы", job2_desc: "Mobile, Web және IT қызметтері. Тапсырыс бойынша сапалы қосымшалар әзірлеу.", job3_role: "Тендер Менеджері", job3_place: "Мемлекеттік сатып алу / Самұрық-Қазына", job3_desc: "Тендерлік құжаттама және мемлекеттік сатып алу процестерін жүргізу.", edu_role: "Студент", edu_place: "Әл-Фараби атындағы ҚазҰУ", edu_desc: "Мамандық: Компьютерлік ғылымдар (Computer Science).", footer_rights: "Барлық құқықтар қорғалған.",
            bot_welcome: "Сәлем! 👋 Мен Досымжанның виртуалды көмекшісімін. Менен оның <b>дағдылары</b>, <b>байланыс</b> немесе <b>тәжірибесі</b> туралы сұраңыз!"
        },
        en: {
            nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_hobbies: "Hobbies", nav_interests: "Interests", nav_exp: "Experience", nav_contact: "Contact",
            hero_greeting: "Hello! I am", hero_name: "Dosymzhan Aubakir", hero_role: "Mobile / Web / AI Developer", hero_desc: "Developing in Mobile, Web, and Artificial Intelligence directions. Passionate about mastering modern technologies to create high-quality digital products.", btn_contact: "Contact Me", btn_cv: "Download CV",
            about_title: "About Me", about_text: "First and foremost, I am a Muslim. I am from Kazakhstan. I graduated with a high-level degree in Computer Science. My passion for IT began in my school years, sparked by repairing computers and laptops at home. Today, I specialize in creating mobile apps, websites, and services of varying complexity using Mobile, Web, and AI Vibe Coding technologies. Beyond coding, I also handle hardware repairs, software installation, and assist with academic projects. I am deeply committed to personal growth, actively researching sports, healthy eating, and both physical and psychological development.",
            skills_title: "My Skills", hard_skills_title: "Hard Skills", lang_title: "Languages", lang_kz: "Kazakh", lang_ru: "Russian", lang_en: "English", level_native: "Native", level_inter: "Intermediate", level_elem: "Elementary", soft_skills_title: "Soft Skills", soft_1: "Problem Solving", soft_2: "Teamwork", soft_3: "Adaptability", soft_4: "Communication", soft_5: "Efficiency", soft_6: "Quality Focus",
            hobby_section_title: "My Hobbies", hobby_sport_title: "Tennis", hobby_sport_desc: "Table & Lawn Tennis", hobby_type_title: "Speed Typing", hobby_type_desc: "Speed & Deep Focus", hobby_clean_title: "Music & Vibe", hobby_clean_desc: "Productivity Boost", hobby_info_title: "Tech Research", hobby_info_desc: "Exploring AI & IT",
            interests_title: "My Interests", 
            int_space: "Space", int_physics: "Physics", int_it: "IT", int_tech: "Technology", int_company: "Company", int_world: "World", int_planet: "Planet", int_sports: "Sports", int_movie: "Movie", int_music: "Music", int_natural: "Natural", int_business: "Business", int_crypto: "Crypto", int_science: "Science", int_football: "Football", int_health: "Health", int_news: "News", int_politics: "Politics", int_travel: "Travel", int_stocks: "Stocks", int_social: "Social Networks", int_gym: "Gym", int_ai: "Artificial", int_photo: "Photo", int_video: "Video", int_religion: "Religion",
            exp_title: "Experience & Education", job1_role: "Remote IT Specialist", job1_place: "Hotel Rixos Turkistan", job1_desc: "Remotely managing mobile applications, IT projects, and resolving server/network issues.", job2_role: "Freelancer", job2_place: "Kwork Platform", job2_desc: "Providing Mobile, Web, and IT services. Developing applications based on specific client requirements.", job3_role: "Tender Manager", job3_place: "Public Procurement / Samruk Kazyna", job3_desc: "Management of tender documentation and public procurement processes.", edu_role: "Student", edu_place: "Al-Farabi KazNU", edu_desc: "Major: Computer Science.", footer_rights: "All rights reserved.",
            bot_welcome: "Hello! 👋 I am Dosymzhan's virtual assistant. Ask me about his <b>skills</b>, <b>contacts</b>, or <b>experience</b>!"
        },
        ru: {
            nav_home: "Главная", nav_about: "Обо мне", nav_skills: "Навыки", nav_hobbies: "Хобби", nav_interests: "Интересы", nav_exp: "Опыт", nav_contact: "Контакты",
            hero_greeting: "Привет! Меня зовут", hero_name: "Dosymzhan Aubakir", hero_role: "Mobile / Web / AI Разработчик", hero_desc: "Развиваюсь в направлениях Mobile, Web и ИИ. Создаю качественные цифровые продукты, используя современные технологии.", btn_contact: "Связаться", btn_cv: "Скачать CV",
            about_title: "Обо мне", about_text: "Прежде всего, я — Мусульманин. Я из Казахстана. Получил высшее образование в Computer Science. Мой путь в IT начался в школе с ремонта компьютеров. Сейчас создаю мобильные приложения, сайты и сервисы любой сложности через Mobile, Web и AI Vibe Coding. Также занимаюсь ремонтом техники, установкой ПО и научными проектами. Активно интересуюсь спортом, правильным питанием и саморазвитием.",
            skills_title: "Мои Навыки", hard_skills_title: "Hard Skills", lang_title: "Языки", lang_kz: "Казахский", lang_ru: "Русский", lang_en: "Английский", level_native: "Родной", level_inter: "Средний (B2)", level_elem: "Базовый (A2)", soft_skills_title: "Soft Skills", soft_1: "Решение проблем", soft_2: "Командная работа", soft_3: "Адаптивность", soft_4: "Коммуникация", soft_5: "Эффективность", soft_6: "Фокус на качестве",
            hobby_section_title: "Мои Хобби", hobby_sport_title: "Теннис", hobby_sport_desc: "Настольный и Большой", hobby_type_title: "Скоростная печать", hobby_type_desc: "Скорость и Фокус", hobby_clean_title: "Музыка и Порядок", hobby_clean_desc: "Продуктивный настрой", hobby_info_title: "Изучение Tech", hobby_info_desc: "Исследование AI и IT",
            interests_title: "Мои Интересы", 
            int_space: "Космос", int_physics: "Физика", int_it: "IT", int_tech: "Технологии", int_company: "Компании", int_world: "Мир", int_planet: "Планета", int_sports: "Спорт", int_movie: "Кино", int_music: "Музыка", int_natural: "Природа", int_business: "Бизнес", int_crypto: "Крипто", int_science: "Наука", int_football: "Футбол", int_health: "Здоровье", int_news: "Новости", int_politics: "Политика", int_travel: "Путешествия", int_stocks: "Акции", int_social: "Соцсети", int_gym: "Зал", int_ai: "ИИ", int_photo: "Фото", int_video: "Видео", int_religion: "Религия",
            exp_title: "Опыт и Образование", job1_role: "Remote IT Specialist", job1_place: "Hotel Rixos Turkistan", job1_desc: "Удаленное управление мобильными приложениями и IT-проектами, поддержка серверов.", job2_role: "Фрилансер", job2_place: "Платформа Kwork", job2_desc: "Услуги Mobile, Web и IT. Разработка приложений и сервисов под требования клиентов.", job3_role: "Тендер Менеджер", job3_place: "Госзакуп / Самрук Казына", job3_desc: "Полное управление процессами тендеров и государственных закупок.", edu_role: "Студент", edu_place: "КазНУ им. аль-Фараби", edu_desc: "Специальность: Компьютерные науки (CS).", footer_rights: "Все права защищены.",
            bot_welcome: "Привет! 👋 Я виртуальный помощник Досымжана. Спросите меня о его <b>навыках</b>, <b>контактах</b> или <b>опыте</b>!"
        }
    };

    // 2. СМЕНА ЯЗЫКА (ТҮЗЕТІЛГЕН: ИКОНКАЛАР ӨШПЕЙДІ)
    const langBtns = document.querySelectorAll('.lang-btn');
    const allTextElements = document.querySelectorAll('[data-i18n]');
    
    function changeLanguage(lang) {
        allTextElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                const icon = el.querySelector('i'); // Иконканы тауып аламыз
                
                if (icon) {
                    // Иконка болса, тексті ауыстырып, иконканы қайта қосамыз
                    el.innerHTML = translations[lang][key] + " " + icon.outerHTML;
                } else {
                    // Иконка болмаса, жай ғана тексті ауыстырамыз
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        
        let htmlLangCode = 'en';
        if (lang === 'kz') htmlLangCode = 'kk'; 
        else if (lang === 'ru') htmlLangCode = 'ru';
        
        document.documentElement.setAttribute('lang', htmlLangCode);
        localStorage.setItem('lang', lang);
    }

    langBtns.forEach(btn => btn.addEventListener('click', () => changeLanguage(btn.getAttribute('data-lang'))));
    
    // DEFAULT LANGUAGE = 'en'
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);

    // 3. SCROLL REVEAL
    const hiddenElements = document.querySelectorAll('.hidden');
    const appearObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.15 });
    hiddenElements.forEach((el) => appearObserver.observe(el));

    // 4. МЕНЮ
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const indicator = document.querySelector('.active-indicator');
    function moveIndicator(element) {
        if (!element) return;
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.transform = `translateX(${element.offsetLeft}px)`;
        indicator.style.opacity = '1';
    }
    navLinks.forEach(link => link.addEventListener('mouseenter', (e) => moveIndicator(e.target)));
    navLinksContainer.addEventListener('mouseleave', () => {
        const activeLink = document.querySelector('.nav-links a.active');
        if (activeLink) moveIndicator(activeLink); else indicator.style.opacity = '0';
    });
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    if (!navLinksContainer.matches(':hover')) moveIndicator(activeLink);
                }
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('section').forEach(sec => sectionObserver.observe(sec));
    
    // Burger Menu (МОБИЛЬДІ МЕНЮДІ ЖАБУ ЛОГИКАСЫ ҚОСЫЛДЫ)
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    
    burger.addEventListener('click', () => { 
        burger.classList.toggle('toggle'); 
        mobileMenu.classList.toggle('active'); 
        document.body.classList.toggle('no-scroll'); 
    });
    
    // Сілтемені басқанда меню жабылуы керек
    document.querySelectorAll('.mobile-links a').forEach(link => {
        link.addEventListener('click', () => { 
            burger.classList.remove('toggle'); 
            mobileMenu.classList.remove('active'); 
            document.body.classList.remove('no-scroll'); 
        });
    });

    // 5. TYPEWRITER EFFECT
    const typed = new Typed('.multiple-text', {
        strings: ['a Mobile Developer', 'a Web Developer', 'an AI Engineer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    // 6. AI CHATBOT LOGIC
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.querySelector('.chat-window');
    const closeChatBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    function toggleChat() {
        chatWindow.classList.toggle('hidden-chat');
        if (!chatWindow.classList.contains('hidden-chat')) {
            setTimeout(() => userInput.focus(), 300);
        }
    }
    chatToggleBtn.addEventListener('click', toggleChat);
    closeChatBtn.addEventListener('click', toggleChat);

    function sendMessage() {
        const text = userInput.value.trim();
        if (text === "") return;

        addMessage(text, 'user-message');
        userInput.value = '';

        const loadingId = showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator(loadingId);
            const reply = getBotReply(text);
            addMessage(reply, 'bot-message');
        }, 1000);
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function addMessage(text, className) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${className}`;
        msgDiv.innerHTML = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const msgDiv = document.createElement('div');
        msgDiv.className = `message bot-message`;
        msgDiv.id = id;
        msgDiv.innerHTML = '<i class="fas fa-ellipsis-h" style="animation: blink 1s infinite;"></i>';
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return id;
    }

    function removeTypingIndicator(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }

    // --- БОТ МИЫ (3 ТІЛДЕ) ---
    function getBotReply(input) {
        const lowerInput = input.toLowerCase();
        const currentLang = localStorage.getItem('lang') || 'en';

        // --- KAZAKH ---
        if (currentLang === 'kz') {
            if (lowerInput.includes('сәлем') || lowerInput.includes('қалай')) return "Сәлем! Қалыңыз қалай? Сізге қалай көмектесе аламын? 😊";
            if (lowerInput.includes('дағды') || lowerInput.includes('стек')) return "Мен <b>Mobile (iOS/Android)</b>, <b>Web Development</b> және <b>AI</b> саласында маманданғанмын.";
            if (lowerInput.includes('байланыс') || lowerInput.includes('пошта')) return "Маған жазыңыз: <a href='mailto:aubakirovdosymzhan@gmail.com' style='color: #34d399;'>Email</a> немесе <a href='https://t.me/dosymzhan_aubakir' target='_blank' style='color: #34d399;'>Telegram</a>.";
            if (lowerInput.includes('жоба')) return "Менің жобаларымды <a href='https://github.com/dossymzhanaubakirov-prog' target='_blank' style='color: #34d399;'>GitHub</a> парақшамнан көре аласыз!";
            return "Кешіріңіз, түсінбедім. Менің <b>дағдыларым</b> немесе <b>байланыс</b> туралы сұрап көріңіз.";
        }

        // --- RUSSIAN ---
        if (currentLang === 'ru') {
            if (lowerInput.includes('привет')) return "Привет! Как я могу помочь вам сегодня? 😊";
            if (lowerInput.includes('навык') || lowerInput.includes('стек')) return "Я специализируюсь на <b>Mobile</b>, <b>Web</b> и <b>AI</b>.";
            if (lowerInput.includes('контакт') || lowerInput.includes('почта')) return "Пишите мне на <a href='mailto:aubakirovdosymzhan@gmail.com' style='color: #34d399;'>Email</a> или в <a href='https://t.me/dosymzhan_aubakir' target='_blank' style='color: #34d399;'>Telegram</a>.";
            if (lowerInput.includes('проект')) return "Мои проекты доступны на <a href='https://github.com/dossymzhanaubakirov-prog' target='_blank' style='color: #34d399;'>GitHub</a>.";
            return "Извините, я не понял. Спросите про мои <b>навыки</b> или <b>контакты</b>.";
        }

        // --- ENGLISH ---
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) return "Hello! How can I help you today? 😊";
        if (lowerInput.includes('skill') || lowerInput.includes('stack')) return "I specialize in <b>Mobile</b>, <b>Web</b>, and <b>AI</b>.";
        if (lowerInput.includes('contact') || lowerInput.includes('email')) return "You can email me at: <a href='mailto:aubakirovdosymzhan@gmail.com' style='color: #34d399;'>Email</a> or DM me on <a href='https://t.me/dosymzhan_aubakir' target='_blank' style='color: #34d399;'>Telegram</a>.";
        if (lowerInput.includes('project')) return "Check out my code on <a href='https://github.com/dossymzhanaubakirov-prog' target='_blank' style='color: #34d399;'>GitHub</a>!";
        return "I'm not sure. Try asking about my <b>skills</b> or <b>contacts</b>.";
    }

});
