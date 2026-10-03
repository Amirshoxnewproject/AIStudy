"use strict";

/* ============ 1-QISM BOSHLANDI ============ */

/* ============ YORDAMCHILAR ============ */
const STORE_KEY = "aiStudyPro";
const svg = inner => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const ICONS = {
    home: svg('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'),
    book: svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
    chat: svg('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'),
    check: svg('<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'),
    layers: svg('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'),
    chart: svg('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'),
    award: svg('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'),
    note: svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
    user: svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    settings: svg('<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>'),
    sun: svg('<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'),
    moon: svg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
    flame: svg('<path d="M12 2c1 4-4 6-4 10a4 4 0 0 0 8 0c0-1.5-.5-2.5-1-3.5 2 .5 4 2.5 4 5.5a7 7 0 0 1-14 0c0-5 5-7 7-12z"/>'),
    zap: svg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
    target: svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
    trash: svg('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),
    shuffle: svg('<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>')
};
const icon = n => ICONS[n] || "";
const $ = id => document.getElementById(id);
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
const escapeHtml = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const todayKey = () => new Date().toISOString().slice(0, 10);
const fmtDate = iso => iso.slice(8, 10) + "." + iso.slice(5, 7) + "." + iso.slice(0, 4);
const fmtTime = s => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
const WD = ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"];

/* ============ FANLAR ============ */
const SUBJECTS = [
    { id: "matematika", name: "Matematika", icon: "➗", color: "#6366F1", desc: "Algebra, geometriya, arifmetika", gr: [1, 11] },
    { id: "ingliz", name: "Ingliz tili", icon: "🔤", color: "#0EA5E9", desc: "Grammatika va so'z boyligi", gr: [1, 11] },
    { id: "biologiya", name: "Biologiya", icon: "🧬", color: "#EC4899", desc: "Hujayra va organizmlar", gr: [5, 11] },
    { id: "tarix", name: "Tarix", icon: "🏛️", color: "#8B5CF6", desc: "Jahon va O'zbekiston tarixi", gr: [5, 11] },
    { id: "fizika", name: "Fizika", icon: "⚛️", color: "#F59E0B", desc: "Kuch, harakat, energiya", gr: [7, 11] },
    { id: "kimyo", name: "Kimyo", icon: "🧪", color: "#10B981", desc: "Elementlar va reaksiyalar", gr: [8, 11] }
];

/* ============ SAVOLLAR (g: [min, max] sinf) ============ */
const TESTS = {
    matematika: [
        { q: "24 + 36 ning natijasi?", o: ["50", "58", "60", "64"], a: 2, l: 1, g: [1, 4], e: "24 + 36 = 60." },
        { q: "7 × 8 ning natijasi?", o: ["54", "56", "58", "64"], a: 1, l: 1, g: [2, 4], e: "Ko'paytirish jadvalidan: 7 × 8 = 56." },
        { q: "18 sonining yarmi qancha?", o: ["6", "8", "9", "12"], a: 2, l: 2, g: [2, 4], e: "18 ÷ 2 = 9." },
        { q: "Uchburchakning qancha tomoni bor?", o: ["2", "3", "4", "5"], a: 1, l: 1, g: [1, 4], e: "Uchburchak — 3 tomonli shakl." },
        { q: "1/2 + 1/4 = ?", o: ["2/6", "3/4", "1/6", "2/4"], a: 1, l: 2, g: [5, 6], e: "Umumiy maxrajga keltiramiz: 2/4 + 1/4 = 3/4." },
        { q: "200 sonining 15% i qancha?", o: ["15", "20", "30", "35"], a: 2, l: 2, g: [5, 6], e: "15% = 0,15; 200 × 0,15 = 30." },
        { q: "10, 12, 14 sonlarining o'rtacha arifmetigi?", o: ["11", "12", "13", "14"], a: 1, l: 2, g: [5, 6], e: "(10 + 12 + 14) ÷ 3 = 36 ÷ 3 = 12." },
        { q: "Kvadratning tomoni 9 sm. Perimetri?", o: ["18 sm", "27 sm", "36 sm", "81 sm"], a: 2, l: 1, g: [5, 6], e: "P = 4a = 4 × 9 = 36 sm." },
        { q: "x + 5 = 12. x = ?", o: ["5", "6", "7", "8"], a: 2, l: 1, g: [7, 8], e: "x = 12 − 5 = 7." },
        { q: "(a + b)² formulasining ochilishi?", o: ["a² + b²", "a² + 2ab + b²", "a² − b²", "2ab"], a: 1, l: 2, g: [7, 8], e: "Kvadratlar yig'indisi formulasi: a² + 2ab + b²." },
        { q: "√49 ning qiymati?", o: ["6", "7", "8", "9"], a: 1, l: 1, g: [7, 8], e: "7² = 49, demak √49 = 7." },
        { q: "To'g'ri burchakli uchburchakda katetlar 6 va 8. Gipotenuza?", o: ["10", "12", "14", "9"], a: 0, l: 2, g: [8, 11], e: "Pifagor: c² = 6² + 8² = 100, demak c = 10." },
        { q: "Doira uzunligi qanday hisoblanadi?", o: ["C = πr²", "C = 2πr", "C = πd²", "C = 4r"], a: 1, l: 3, g: [7, 11], e: "C = 2πr = πd (r — radius, d — diametr)." },
        { q: "Kvadrat tenglamaning diskriminanti formulasi?", o: ["D = b² − 4ac", "D = b² + 4ac", "D = 4ac − b²", "D = 2b − 4ac"], a: 0, l: 2, g: [9, 11], e: "ax² + bx + c = 0 → D = b² − 4ac." },
        { q: "sin 30° ning qiymati?", o: ["1/2", "√3/2", "1", "0"], a: 0, l: 2, g: [9, 11], e: "sin 30° = 1/2 — asosiy trigonometrik qiymat." },
        { q: "Arifmetik progressiya n-chi a'zosi formulasi?", o: ["aₙ = a₁ + (n−1)d", "aₙ = a₁ × dⁿ", "aₙ = a₁ − nd", "aₙ = n × d"], a: 0, l: 3, g: [9, 11], e: "aₙ = a₁ + (n−1)d." },
        { q: "log₂ 8 ning qiymati?", o: ["2", "3", "4", "8"], a: 1, l: 3, g: [10, 11], e: "2³ = 8, demak log₂ 8 = 3." }
    ],
    ingliz: [
        { q: "'Red' so'zining tarjimasi?", o: ["Ko'k", "Qizil", "Yashil", "Sariq"], a: 1, l: 1, g: [1, 4], e: "Red = qizil rang." },
        { q: "'Cat' qaysi hayvon?", o: ["It", "Mushuk", "Qush", "Ot"], a: 1, l: 1, g: [1, 4], e: "Cat = mushuk, dog = it." },
        { q: "'3' soni ingliz tilida qanday?", o: ["Two", "Three", "Four", "Ten"], a: 1, l: 1, g: [1, 4], e: "1 — one, 2 — two, 3 — three." },
        { q: "'Apple' nima degani?", o: ["Olma", "Banan", "Uzum", "Nok"], a: 0, l: 1, g: [1, 4], e: "Apple = olma." },
        { q: "'Book' so'zining tarjimasi?", o: ["Qalam", "Stol", "Kitob", "Deraza"], a: 2, l: 1, g: [5, 6], e: "Book = kitob." },
        { q: "She ___ a student.", o: ["am", "is", "are", "be"], a: 1, l: 1, g: [5, 6], e: "She — 3-shaxs birlik, shuning uchun is." },
        { q: "___ you like pizza?", o: ["Do", "Does", "Is", "Are"], a: 0, l: 2, g: [5, 6], e: "You bilan do ishlatiladi: Do you like...?" },
        { q: "'Boxes' so'zi nimani anglatadi?", o: ["Quti", "Qutilar", "Kitob", "Stol"], a: 1, l: 2, g: [5, 6], e: "Ko'plik: box → boxes." },
        { q: "'Go' fe'lining Past Simple shakli?", o: ["goed", "gone", "went", "going"], a: 2, l: 2, g: [7, 8], e: "Go — noto'g'ri fe'l: go → went → gone." },
        { q: "big so'zining qiyosiy darajasi?", o: ["bigger", "more big", "biggest", "biger"], a: 0, l: 2, g: [7, 8], e: "Qisqa sifat: big → bigger → the biggest." },
        { q: "There ___ many books on the table.", o: ["is", "are", "was", "be"], a: 1, l: 1, g: [7, 8], e: "Ko'plik (books) bilan are ishlatiladi." },
        { q: "'Yaxshiroq' so'zining tarjimasi?", o: ["good", "better", "best", "bad"], a: 1, l: 2, g: [7, 8], e: "good → better → the best." },
        { q: "I have lived here ___ 2010.", o: ["for", "since", "from", "at"], a: 1, l: 3, g: [9, 11], e: "Aniq vaqt nuqtasi bilan since, davr bilan for keladi." },
        { q: "If I ___ rich, I would travel the world.", o: ["am", "was", "were", "be"], a: 2, l: 3, g: [9, 11], e: "Ikkinchi shart: If I were... (subjonktiv)." },
        { q: "The letter ___ written yesterday.", o: ["is", "was", "were", "be"], a: 1, l: 3, g: [9, 11], e: "Passive: was/were + V3. O'tgan zamon — was." },
        { q: "'Look forward to' nima degani?", o: ["Orqaga qarash", "Kutib turish (intiqlik bilan)", "Ilgariga qarash", "Yo'qotish"], a: 1, l: 3, g: [9, 11], e: "Look forward to — intiqlik bilan kutmoq." }
    ],
    fizika: [
        { q: "Tezlikning o'lchov birligi?", o: ["kg", "m/s", "N", "J"], a: 1, l: 1, g: [7, 11], e: "v = s/t, demak birligi metr/sekund." },
        { q: "Zichlikning formulasi?", o: ["ρ = m × V", "ρ = m / V", "ρ = V / m", "ρ = m + V"], a: 1, l: 2, g: [7, 8], e: "ρ = m/V — massa hajmga bo'linadi." },
        { q: "Og'irlik kuchi qanday hisoblanadi?", o: ["F = m × g", "F = m + g", "F = m / g", "F = g / m"], a: 0, l: 1, g: [7, 11], e: "F = mg, yerda g ≈ 9,8 m/s²." },
        { q: "Quvvatning o'lchov birligi?", o: ["Joul", "Vatt", "Nyuton", "Paskal"], a: 1, l: 2, g: [7, 11], e: "Quvvat — Vatt (Vt) bilan o'lchanadi." },
        { q: "Nyutonning ikkinchi qonuni?", o: ["F = m × a", "F = m / a", "F = m + a", "F = a² / m"], a: 0, l: 2, g: [9, 11], e: "Kuch = massa × tezlanish." },
        { q: "Yorug'likning vakuumdagi tezligi?", o: ["300 km/s", "3000 km/s", "300 000 km/s", "3 mln km/s"], a: 2, l: 2, g: [9, 11], e: "c ≈ 3×10⁸ m/s = 300 000 km/s." },
        { q: "Mexanik ish qanday hisoblanadi?", o: ["A = F + s", "A = F × s", "A = F / s", "A = s / F"], a: 1, l: 3, g: [9, 11], e: "A = F·s — kuch yo'nalishidagi ko'chishga ko'paytiriladi." },
        { q: "Jismning impulsi qanday ifodalanadi?", o: ["p = m × v", "p = m / v", "p = m + v", "p = v / m"], a: 0, l: 3, g: [10, 11], e: "Impuls p = mv — vektor kattalik." }
    ],
    kimyo: [
        { q: "Suvning kimyoviy formulasi?", o: ["CO₂", "H₂O", "O₂", "H₂O₂"], a: 1, l: 1, g: [8, 11], e: "Suv — 2 vodorod + 1 kislorod." },
        { q: "Osh tuzining formulasi?", o: ["KCl", "NaCl", "CaCl₂", "MgCl₂"], a: 1, l: 1, g: [8, 11], e: "NaCl — natriy xlorid." },
        { q: "Atomning musbat zaryadlangon zarrasi?", o: ["Elektron", "Neytron", "Proton", "Foton"], a: 2, l: 2, g: [8, 11], e: "Proton — musbat, elektron — manfiy zaryadli." },
        { q: "Havodagi eng ko'p gaz?", o: ["Kislorod", "Azot", "Vodorod", "Uglerod"], a: 1, l: 2, g: [8, 11], e: "Havo tarkibida ~78% azot, ~21% kislorod." },
        { q: "Modda zarralarining o'z-o'zidan aralashishi?", o: ["Diffuziya", "Elektroliz", "Fotosintez", "Bug'lanish"], a: 0, l: 2, g: [8, 9], e: "Diffuziya — zarralarning tartibsiz harakati natijasida aralashishi." },
        { q: "Muhit pH < 7 bo'lsa, u qanday?", o: ["Ishqoriy", "Kislotali", "Neytral", "Tuz"], a: 1, l: 2, g: [9, 11], e: "pH<7 — kislotali, pH>7 — ishqoriy, pH=7 — neytral." },
        { q: "Avogadro soni qancha?", o: ["6,02×10²³", "3,14×10⁸", "9,8×10³", "1,6×10⁻¹⁹"], a: 0, l: 3, g: [10, 11], e: "1 mol modda 6,02×10²³ zarradan iborat." },
        { q: "H₂SO₄ qanday kislota?", o: ["Xlorid", "Sulfat", "Nitrat", "Fosfat"], a: 1, l: 3, g: [10, 11], e: "Sulfat kislota — kuchli kislota." }
    ],
    biologiya: [
        { q: "Hayotning asosiy struktura birligi?", o: ["To'qima", "Organ", "Hujayra", "Organizm"], a: 2, l: 1, g: [5, 11], e: "Hujayra — barcha organizmlarning asosi." },
        { q: "O'simlik barglaridagi yashil pigment?", o: ["Xlorofill", "Gemoglobin", "Melanin", "Keratin"], a: 0, l: 1, g: [5, 6], e: "Xlorofill — yashil pigment, fotosintezda qatnashadi." },
        { q: "O'simliklar quyosh nurini nima uchun oladi?", o: ["Nafas olish uchun", "Oziq hosil qilish uchun", "Harakat uchun", "Issiqlik uchun"], a: 1, l: 1, g: [5, 6], e: "Fotosintez orqali oziq modda hosil qiladi." },
        { q: "Umurtqali hayvonlarga qaysi kiradi?", o: ["Qurt", "Hasharot", "Baliq", "Mollyuska"], a: 2, l: 2, g: [5, 6], e: "Baliq — umurtqali, qolganlari umurtqasiz." },
        { q: "Fotosintez qaysi organellada kechadi?", o: ["Yadro", "Mitoxondriya", "Xloroplast", "Ribosoma"], a: 2, l: 2, g: [7, 8], e: "Xloroplastda xlorofill yordamida kechadi." },
        { q: "Voyaga etgan odam skeletida qancha suyak?", o: ["106", "156", "206", "306"], a: 2, l: 2, g: [7, 8], e: "Kattalar skeletida 206 ta suyak bor." },
        { q: "Qonni tanada haydovchi organ?", o: ["O'pka", "Jigar", "Yurak", "Buyrak"], a: 2, l: 1, g: [7, 11], e: "Yurak — mushak to'qimasidan tuzilgan 'pompa'." },
        { q: "O'simlik va hayvon hujayrasi asosiy farqi?", o: ["Yadro faqat o'simlikda", "Xloroplast faqat o'simlikda", "Ribosoma faqat hayvonda", "Membrana faqat o'simlikda"], a: 1, l: 2, g: [7, 8], e: "Xloroplast va hujayra devori faqat o'simlik hujayrasida bor." },
        { q: "Mitoxondriyaning asosiy vazifasi?", o: ["Oqsil sintezi", "Energiya ishlab chiqarish", "Genetik ma'lumot saqlash", "Hazm qilish"], a: 1, l: 3, g: [9, 11], e: "Mitoxondriya — 'energiya stansiyasi', ATP ishlab chiqaradi." },
        { q: "Odam hujayrasida qancha xromosoma?", o: ["23", "44", "46", "48"], a: 2, l: 3, g: [9, 11], e: "23 juft = 46 xromosoma." },
        { q: "DNK ning to'liq nomi?", o: ["Deoksiribonuklein kislota", "Ribonuklein kislota", "Nuklein oqsil", "Adenin kislota"], a: 0, l: 3, g: [10, 11], e: "DNK = deoksiribonuklein kislota." },
        { q: "Genotip va fenotip farqi nimada?", o: ["Farqi yo'q", "Genotip — genlar, fenotip — tashqi belgilar", "Aksincha", "Ikkalasi ham tashqi belgilar"], a: 1, l: 3, g: [10, 11], e: "Genotip — irsiy axborot, fenotip — ko'rinadigan belgilar." }
    ],
    tarix: [
        { q: "O'zbekiston mustaqilligi e'lon qilingan yil?", o: ["1989", "1990", "1991", "1992"], a: 2, l: 1, g: [5, 11], e: "1991-yil 31-avgust, bayram — 1-sentabr." },
        { q: "Qadimgi piramidalar qaysi davlatda qurilgan?", o: ["Rim", "Gretsiya", "Misr", "Bobil"], a: 2, l: 1, g: [5, 11], e: "Misr — Giza piramidalari." },
        { q: "O'zbekiston poytaxti qaysi shahar?", o: ["Samarqand", "Toshkent", "Buxoro", "Xiva"], a: 1, l: 1, g: [5, 6], e: "Toshkent — O'zbekiston poytaxti." },
        { q: "Buyuk ipak yo'li orqali nima tashilgan?", o: ["Qo'shinlar", "Tovarlar (ipak, ziravor)", "Faqat xatlar", "Faqat oltin"], a: 1, l: 2, g: [5, 6], e: "Ipak yo'li — savdo yo'li: ipak, ziravor, gazlama tashilgan." },
        { q: "Amir Temur qachon tug'ilgan?", o: ["1326", "1336", "1346", "1356"], a: 1, l: 2, g: [7, 8], e: "1336-yil, Kesh (Shahrisabz) yaqinida." },
        { q: "Amir Temurning poytaxti qaysi shahar bo'lgan?", o: ["Buxoro", "Samarqand", "Toshkent", "Xiva"], a: 1, l: 2, g: [7, 8], e: "Samarqand — Temuriylar poytaxti." },
        { q: "Qadimgi Bobil hozirgi qaysi davlat hududida?", o: ["Misr", "Iroq", "Turkiya", "Eron"], a: 1, l: 3, g: [7, 8], e: "Bobil — hozirgi Iroq hududida bo'lgan." },
        { q: "Buyuk ipak yo'lining markaziy shaharlaridan biri?", o: ["Parij", "Samarqand", "London", "Tokio"], a: 1, l: 3, g: [7, 11], e: "Samarqand — savdo va madaniyat markazi bo'lgan." },
        { q: "Birinchi jahon urushi qachon boshlangan?", o: ["1912", "1914", "1916", "1918"], a: 1, l: 3, g: [9, 11], e: "1914-yilda boshlanib, 1918-yilda tugagan." },
        { q: "Ikkinchi jahon urushi qachon tugagan?", o: ["1943", "1944", "1945", "1946"], a: 2, l: 2, g: [9, 11], e: "1945-yil 2-sentabrda tugagan." },
        { q: "Mustaqillik deklaratsiyasi qabul qilingan sana?", o: ["31-avgust, 1991", "1-sentabr, 1991", "16-dekabr, 1991", "21-mart, 1992"], a: 0, l: 3, g: [9, 11], e: "31-avgust — Deklaratsiya, 1-sentabr — bayram kuni." },
        { q: "Buyuk geografik kashfiyotlar qaysi asrga to'g'ri keladi?", o: ["XIV asr", "XV–XVI asrlar", "XVII asr", "XVIII asr"], a: 1, l: 3, g: [9, 11], e: "Kolumb (1492), Magellan — XV–XVI asrlar." }
    ]
};

/* ============ KARTOCHKALAR ============ */
const FLASHCARDS = {
    matematika: [
        { f: "Ko'paytirish: 7 × 8", b: "56", g: [2, 4] },
        { f: "Kvadrat yuzasi", b: "S = a × a = a²", g: [3, 11] },
        { f: "Kasrlarni qo'shish", b: "Umumiy maxraj topib, maxrajlarni tenglashtirish", g: [5, 6] },
        { f: "Foiz formulasi", b: "a% dan b → (a × b) / 100", g: [5, 11] },
        { f: "Kvadratlar yig'indisi", b: "(a+b)² = a² + 2ab + b²", g: [7, 11] },
        { f: "Doira uzunligi", b: "C = 2πr", g: [7, 11] },
        { f: "Pifagor teoremasi", b: "a² + b² = c²", g: [8, 11] },
        { f: "Diskriminant", b: "D = b² − 4ac", g: [9, 11] },
        { f: "sin 30°", b: "1/2", g: [9, 11] },
        { f: "Arifmetik progressiya", b: "aₙ = a₁ + (n−1)d", g: [9, 11] }
    ],
    ingliz: [
        { f: "Ranglar: red, blue, green", b: "qizil, ko'k, yashil", g: [1, 4] },
        { f: "Sonlar: one, two, three", b: "1, 2, 3", g: [1, 4] },
        { f: "to be: I am / He is", b: "bor/bo'lmoq fe'li", g: [5, 6] },
        { f: "Ko'plik qoidasi", b: "box → boxes, child → children", g: [5, 8] },
        { f: "Past Simple", b: "work → worked / go → went", g: [7, 11] },
        { f: "Qiyosiy daraja", b: "big → bigger → the biggest", g: [7, 11] },
        { f: "since / for", b: "since — aniq vaqt (since 2010)<br>for — davr (for 5 years)", g: [9, 11] },
        { f: "2-shart gap (Conditional 2)", b: "If I were..., I would...", g: [9, 11] }
    ],
    fizika: [
        { f: "Tezlik", b: "v = s / t", g: [7, 11] },
        { f: "Zichlik", b: "ρ = m / V", g: [7, 8] },
        { f: "Og'irlik kuchi", b: "F = m × g (g ≈ 9,8 m/s²)", g: [7, 11] },
        { f: "Nyutonning 2-qonuni", b: "F = m × a", g: [9, 11] },
        { f: "Mexanik ish", b: "A = F × s", g: [9, 11] },
        { f: "Kinetik energiya", b: "E = mv² / 2", g: [9, 11] },
        { f: "Yorug'lik tezligi", b: "c = 300 000 km/s", g: [9, 11] }
    ],
    kimyo: [
        { f: "Suv formulasi", b: "H₂O", g: [8, 11] },
        { f: "Osh tuzi", b: "NaCl", g: [8, 11] },
        { f: "pH shkalasi", b: "<7 kislota · =7 neytral · >7 ishqoriy", g: [9, 11] },
        { f: "Avogadro soni", b: "N = 6,02 × 10²³", g: [10, 11] },
        { f: "Sulfat kislota", b: "H₂SO₄ — kuchli kislota", g: [10, 11] }
    ],
    biologiya: [
        { f: "Hujayra", b: "Hayotning asosiy birligi", g: [5, 11] },
        { f: "Xlorofill", b: "O'simliklardagi yashil pigment", g: [5, 11] },
        { f: "Fotosintez", b: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", g: [7, 11] },
        { f: "Suyaklar soni (kattada)", b: "206", g: [7, 8] },
        { f: "Mitoxondriya", b: "Energiya (ATP) ishlab chiqaradi", g: [9, 11] },
        { f: "Xromosomalar soni", b: "46 (23 juft)", g: [9, 11] }
    ],
    tarix: [
        { f: "Mustaqillik kuni", b: "1991-yil 1-sentabr", g: [5, 11] },
        { f: "Piramidalar", b: "Qadimgi Misrda qurilgan", g: [5, 11] },
        { f: "Amir Temur", b: "1336–1405, Keshda tug'ilgan", g: [7, 11] },
        { f: "Temuriylar poytaxti", b: "Samarqand", g: [7, 11] },
        { f: "1-jahon urushi", b: "1914–1918", g: [9, 11] },
        { f: "2-jahon urushi", b: "1939–1945", g: [9, 11] }
    ]
};

/* ============ AI BILIM BAZASI (offline zaxira) ============ */
const AI_KB = [
    { k: ["salom", "assalom", "hello", "hi "], a: "Salom! 👋 Men AI Study yordamchingizman. Fanlar bo'yicha savollaringizni bemalol bering." },
    { k: ["rahmat", "tashakkur", "thanks"], a: "Arzimaydi! 😊 Yana savollaringiz bo'lsa, bemalol so'rang!" },
    { k: ["pifagor", "gipotenuz"], g: [8, 11], a: "<b>Pifagor teoremasi</b>: to'g'ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig'indisiga teng — <b>a² + b² = c²</b>." },
    { k: ["kvadrat yuz", "kvadratning yuz"], g: [3, 11], a: "<b>Kvadrat yuzasi</b>: S = a² (tomon kvadrati). To'g'ri to'rtburchak yuzasi: S = a × b." },
    { k: ["foiz", "protsent"], g: [5, 11], a: "<b>Foiz</b>: a% ning b foizi = (a × b) / 100. Masalan, 200 ning 15% i = 200 × 0,15 = 30." },
    { k: ["doira", "radius", "diametr"], g: [7, 11], a: "<b>Doira</b>: uzunligi C = 2πr, yuzasi S = πr². Diametr d = 2r bo'lsa, C = πd." },
    { k: ["past simple", "o'tgan zamon"], g: [7, 11], a: "<b>Past Simple</b> — o'tgan zamon. To'g'ri fe'llarga <b>-ed</b> qo'shiladi (work → worked), noto'g'ri fe'llar o'z shaklini oladi (go → went)." },
    { k: ["since", " for "], g: [9, 11], a: "<b>since va for</b>: since — aniq vaqt nuqtasi bilan (since 2010), for — davr bilan (for 5 years)." },
    { k: ["nyuton", "inertsi"], g: [9, 11], a: "<b>Nyuton qonunlari</b>:<br>1. Inertsiya — jism holatini o'zi o'zgartirmaydi.<br>2. F = m × a<br>3. Har bir ta'sirga teng va qarama-qarshi ta'sir bor." },
    { k: ["tezlik"], g: [7, 11], a: "<b>Tezlik</b>: v = s / t. O'lchov birligi — m/s." },
    { k: ["suv", "h2o", "h₂o"], g: [8, 11], a: "<b>Suv (H₂O)</b> — 2 vodorod + 1 kislorod. Qaynash 100°C, muzlash 0°C." },
    { k: ["fotosintez"], g: [7, 11], a: "<b>Fotosintez</b>: <b>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</b>. Xloroplastda, xlorofill yordamida kechadi." },
    { k: ["hujayra", "cell"], g: [5, 11], a: "<b>Hujayra</b> — hayotning asosiy birligi. Qismlari: yadro, membrana, sitoplazma, mitoxondriya, ribosoma." },
    { k: ["mustaqil", "1991"], a: "<b>O'zbekiston mustaqilligi</b> — 1991-yil 31-avgust, bayram 1-sentabr." },
    { k: ["temur", "amir "], g: [7, 11], a: "<b>Amir Temur</b> (1336–1405) — Kesh (Shahrisabz) yaqinida tug'ilgan, poytaxti — Samarqand." }
];

/* ============ NAMUNA REYTING ============ */
const MOCK = [];
(function () {
    let seed = 42;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const MN = ["Aziza", "Bekzod", "Malika", "Jasur", "Nilufar", "Sardor", "Kamola", "Doston", "Zilola", "Ulugbek", "Sevinch", "Otabek", "Gulnoza", "Rustam", "Madina", "Farid", "Dilshod", "Nodira"];
    const ML = ["Karimova", "Aliyev", "Tosheva", "Rahimov", "Sobirova", "Nazarov", "Ergasheva", "Yusupov", "Xolmatova", "Sattorov", "Ismoilova", "Tursunov"];
    for (let g = 1; g <= 11; g++)
        for (let i = 0; i < 3; i++)
            MOCK.push({
                name: MN[Math.floor(rnd() * MN.length)] + " " + ML[Math.floor(rnd() * ML.length)],
                g, p: Math.round(40 + rnd() * 360), w: Math.round(10 + rnd() * 70)
            });
})();

/* ============ DARAJALAR / NISHONLAR / NAV ============ */
const LEVELS = [
    { min: 0, name: "Boshlovchi", next: 100 },
    { min: 100, name: "O'quvchi", next: 250 },
    { min: 250, name: "Bilimdon", next: 500 },
    { min: 500, name: "Ekspert", next: 1000 },
    { min: 1000, name: "Ustoz", next: null }
];
const getLevel = p => { let lv = LEVELS[0]; for (const l of LEVELS) if (p >= l.min) lv = l; return lv; };

const BADGES = [
    { icon: "🌱", label: "Birinchi qadam", cond: s => s.totalTests >= 1 },
    { icon: "⭐", label: "100 ball", cond: s => s.points >= 100 },
    { icon: "✨", label: "300 ball", cond: s => s.points >= 300 },
    { icon: "🏆", label: "700 ball", cond: s => s.points >= 700 },
    { icon: "🔥", label: "3 kunlik seriya", cond: s => s.streak >= 3 },
    { icon: "⚡", label: "7 kunlik seriya", cond: s => s.streak >= 7 },
    { icon: "📚", label: "5 ta test", cond: s => s.totalTests >= 5 },
    { icon: "🎯", label: "20 to'g'ri javob", cond: s => s.totalCorrect >= 20 },
    { icon: "🧠", label: "100% aniqlik", cond: s => s.totalQuestions >= 10 && s.totalCorrect === s.totalQuestions }
];

const QUOTES = [
    "Bilim — eng katta boylik. Uni hech kim olib qo'yolmaydi.",
    "Har kuni 1% yaxshilaning — yiliga 37 baravar o'sasiz.",
    "Muvaffaqiyat — bu kichik qadamlar yig'indisi.",
    "Savol berish — o'ranishning birinchi qadami.",
    "Bugun o'rganing — ertaga foydalanasiz.",
    "Zo'r natija — muntazam mashq natijasidir.",
    "Xato qilishdan qo'rqmang — o'sish shundan boshlanadi.",
    "O'qish qiyin, ammo jaholat undan ham qiyin."
];

const NAV = [
    { id: "dashboard", label: "Asosiy", icon: "home" },
    { id: "fanlar", label: "Fanlar", icon: "book" },
    { id: "chat", label: "AI yordamchi", icon: "chat" },
    { id: "testlar", label: "Testlar", icon: "check" },
    { id: "kartochka", label: "Kartochkalar", icon: "layers" },
    { id: "natijalar", label: "Natijalar", icon: "chart" },
    { id: "reyting", label: "Reyting", icon: "award" },
    { id: "yozuvlar", label: "Yozuvlar", icon: "note" },
    { id: "profil", label: "Profil", icon: "user" },
    { id: "sozlamalar", label: "Sozlamalar", icon: "settings" }
];

/* ============ AI MODELLARI ============ */
const AI_MODELS = {
  gemini: [
    ["gemini-3.8-flash", "Gemini 3.8 Flash (yangi, tavsiya)"],
    ["gemini-3.5-flash-lite", "Gemini 3.5 Flash Lite (tez)"],
    ["gemini-flash-latest", "Gemini Flash — eng so'nggi"],
    ["gemini-2.5-flash", "Gemini 2.5 Flash"]
  ],
    openai: [
        ["gpt-4o-mini", "GPT-4o mini (arzon)"],
        ["gpt-4o", "GPT-4o (kuchli)"],
        ["gpt-3.5-turbo", "GPT-3.5 Turbo"]
    ]
};

/* ============ HOLAT ============ */
const DEFAULTS = {
    name: "", grade: 0, points: 0, weeklyPoints: 0, weekId: "", streak: 0, lastActive: "",
    totalTests: 0, totalCorrect: 0, totalQuestions: 0,
    history: [], notes: [], dailyPoints: {}, subjectStats: {},
    theme: "light", sound: true, apiKey: "", apiModel: "gemini-3.8-flash", apiProvider: "gemini"
};
let saved = {};
try { saved = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { }
let state = Object.assign({}, DEFAULTS, saved);

function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

let setup = { subject: null, diff: 0 };
let current = [], idx = 0, answers = [], timeLeft = 0, tm = null;
let lbTab = "all";
let fc = { subject: "matematika", i: 0 };
let chatHistory = [];

/* ============ SINFGA BOG'LIQ FILTRLAR ============ */
const inGrade = it => !state.grade || (it.g[0] <= state.grade && state.grade <= it.g[1]);
const subjectOpen = s => !state.grade || state.grade >= s.gr[0];
const gradeQs = id => TESTS[id].filter(inGrade);

/* ============ SANA / SERIYA / HAFTA ============ */
function currentWeek() {
    const d = new Date(), start = new Date(d.getFullYear(), 0, 1);
    const days = Math.floor((d - start) / 86400000);
    return d.getFullYear() + "-W" + Math.ceil((days + start.getDay() + 1) / 7);
}
function touchActivity() {
    const today = todayKey();
    if (state.lastActive === today) return;
    const yKey = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = (state.lastActive === yKey) ? state.streak + 1 : 1;
    state.lastActive = today;
    save();
}
function addPoints(n) {
    state.points += n;
    state.weeklyPoints += n;
    const t = todayKey();
    state.dailyPoints[t] = (state.dailyPoints[t] || 0) + n;
    save();
    updateChrome();
}

/* ============ OVOZ / TOAST / CONFETTI ============ */
let AC = null;
function beep(f = 880, d = 0.12) {
    if (!state.sound) return;
    try {
        AC = AC || new (window.AudioContext || window.webkitAudioContext)();
        const o = AC.createOscillator(), g = AC.createGain();
        o.frequency.value = f; o.type = "sine";
        o.connect(g); g.connect(AC.destination);
        g.gain.setValueAtTime(0.08, AC.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + d);
        o.start(); o.stop(AC.currentTime + d);
    } catch (e) { }
}
function toast(msg, type = "ok") {
    const b = $("toastBox"), d = document.createElement("div");
    d.className = "toast " + type; d.textContent = msg;
    b.appendChild(d);
    setTimeout(() => { d.classList.add("out"); setTimeout(() => d.remove(), 300); }, 2600);
}
function confetti() {
    const layer = $("confettiLayer");
    const colors = ["#6366F1", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#EC4899"];
    for (let i = 0; i < 90; i++) {
        const p = document.createElement("i");
        p.className = "cf";
        p.style.left = Math.random() * 100 + "vw";
        p.style.background = colors[i % colors.length];
        p.style.width = (6 + Math.random() * 6) + "px";
        p.style.height = (8 + Math.random() * 8) + "px";
        p.style.animationDuration = (2 + Math.random() * 2) + "s";
        p.style.animationDelay = (Math.random() * .6) + "s";
        if (Math.random() > .6) p.style.borderRadius = "50%";
        layer.appendChild(p);
        setTimeout(() => p.remove(), 4800);
    }
}

/* ============ SINF TANLASH ============ */
function buildOnboard() {
    $("gradeGrid").innerHTML = Array.from({ length: 11 }, (_, i) =>
        `<button class="grade-btn" onclick="pickGrade(${i + 1})">${i + 1}</button>`).join("");
}
function pickGrade(n) {
    state.grade = n;
    save();
    $("onboard").classList.add("hidden");
    refreshAll();
    toast(`${n}-sinf tanlandi — savollar moslashtirildi 🎯`);
}
function buildGradeSel() {
    let o = `<option value="0">Sinf tanlanmagan</option>`;
    for (let i = 1; i <= 11; i++) o += `<option value="${i}">${i}-sinf</option>`;
    $("gradeSel").innerHTML = o;
}
function setGrade(v) {
    state.grade = +v;
    save();
    refreshAll();
    if (state.grade) toast(`${state.grade}-sinf tanlandi — savollar moslashtirildi 🎯`);
    else toast("Sinf tanlanmadi — barcha fanlar ochiq");
}
function refreshAll() {
    const sub = SUBJECTS.find(s => s.id === fc.subject);
    if (sub && !subjectOpen(sub)) fc.subject = "matematika";
    fc.i = 0;
    updateChrome();
    renderSubjects();
    renderTestGrid();
    buildFCChips();
    renderFC();
    renderDashboard();
}

/* ============ NAVIGATSIYA ============ */
function buildNav() {
    $("sideNav").innerHTML = NAV.map(n =>
        `<button class="side-link" data-view="${n.id}" onclick="showSection('${n.id}')">${icon(n.icon)}<span>${n.label}</span></button>`
    ).join("");
}
function showSection(id) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    $("view-" + id).classList.add("active");
    document.querySelectorAll(".side-link").forEach(b => b.classList.toggle("active", b.dataset.view === id));
    closeSidebar();
    const R = {
        dashboard: renderDashboard, fanlar: renderSubjects, natijalar: renderResults,
        reyting: renderLeaderboard, profil: renderProfile, yozuvlar: renderNotes
    };
    if (R[id]) R[id]();
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function toggleSidebar() { $("sidebar").classList.toggle("open"); }
function closeSidebar() { $("sidebar").classList.remove("open"); }

/* ============ MAVZU ============ */
function toggleTheme() { setTheme(state.theme === "light" ? "dark" : "light"); }
function setTheme(t) { state.theme = t; applyTheme(); save(); }
function applyTheme() {
    document.body.classList.toggle("dark", state.theme === "dark");
    $("themeBtn").innerHTML = state.theme === "dark" ? icon("sun") : icon("moon");
    const l = $("thLight"), d = $("thDark");
    if (l && d) {
        l.classList.toggle("active", state.theme === "light");
        d.classList.toggle("active", state.theme === "dark");
    }
}
function toggleSound(on) { state.sound = on; save(); if (on) beep(880, .08); }

/* ============ UMUMIY UI ============ */
function initials(n) {
    const p = (n || "").trim().split(/\s+/);
    return (((p[0] || "S")[0] || "S") + ((p[1] || "")[0] || "")).toUpperCase();
}
function updateChrome() {
    const name = state.name || "O'quvchi";
    const lv = getLevel(state.points);
    const sub = (state.grade ? state.grade + "-sinf · " : "") + lv.name;
    $("userMini").innerHTML = `<span class="um-av">${initials(name)}</span><span><span class="um-name">${escapeHtml(name)}</span><br><span class="um-lvl">${sub}</span></span>`;
    $("topStats").innerHTML = `<span class="tag">${icon("zap")} ${state.points}</span><span class="tag tag-plain">${icon("flame")} ${state.streak}</span>`;
}

/* ============ ASOSIY PANEL ============ */
function renderDashboard() {
    $("dashName").textContent = state.name || "O'quvchi";
    const gt = $("gradeTag");
    if (gt) {
        gt.textContent = state.grade ? state.grade + "-sinf o'quvchisi" : "";
        gt.style.display = state.grade ? "" : "none";
    }
    $("dashQuote").textContent = "“" + QUOTES[Math.floor(Math.random() * QUOTES.length)] + "”";
    const acc = state.totalQuestions ? Math.round(state.totalCorrect / state.totalQuestions * 100) : 0;
    const lv = getLevel(state.points);
    $("dashStats").innerHTML = [
        { ic: "zap", cls: "c-indigo", num: state.points, lbl: "Jami ball" },
        { ic: "award", cls: "c-violet", num: lv.name, lbl: "Daraja" },
        { ic: "flame", cls: "c-orange", num: state.streak + " kun", lbl: "Ketma-ketlik" },
        { ic: "target", cls: "c-green", num: acc + "%", lbl: "Aniqlik" }
    ].map(s => `<div class="stat"><div class="s-ic ${s.cls}">${icon(s.ic)}</div><div class="s-num">${s.num}</div><div class="s-lbl">${s.lbl}</div></div>`).join("");

    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(Date.now() - i * 86400000);
        days.push({ key: d.toISOString().slice(0, 10), lbl: WD[d.getDay()], today: i === 0 });
    }
    const vals = days.map(d => state.dailyPoints[d.key] || 0);
    const max = Math.max(...vals, 10);
    $("chart").innerHTML = days.map((d, i) =>
        `<div class="ch-col${d.today ? " today" : ""}"><div class="ch-bar" style="height:${Math.max(4, Math.round(vals[i] / max * 100))}%" title="${vals[i]} ball"></div><span>${d.lbl}</span></div>`
    ).join("");
    $("weekPts").textContent = state.weeklyPoints + " ball";

    let lh = `<div class="card-head"><h3>Daraja: ${lv.name}</h3></div>`;
    if (lv.next) {
        const pct = Math.min(100, Math.round(state.points / lv.next * 100));
        lh += `<p class="lvl-sub">Keyingi darajaga <b>${lv.next - state.points}</b> ball qoldi</p><div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>`;
    } else lh += `<p class="lvl-sub">Eng yuqori darajaga yetdingiz!</p>`;
    $("levelCard").innerHTML = lh;

    $("dashSubjects").innerHTML = SUBJECTS.filter(subjectOpen).map(s => {
        const st = state.subjectStats[s.id] || { done: 0 };
        const pct = Math.round((st.done || 0) / Math.max(gradeQs(s.id).length, 1) * 100);
        return `<div class="subj-row"><span class="subj-name">${s.icon} ${s.name}</span><div class="bar grow"><div class="bar-fill" style="width:${pct}%"></div></div><span class="subj-pct">${pct}%</span></div>`;
    }).join("");
}

/* ============ FANLAR ============ */
const subjName = id => (SUBJECTS.find(s => s.id === id) || { name: id }).name;

function renderSubjects() {
    $("subjectGrid").innerHTML = SUBJECTS.map(s => {
        if (!subjectOpen(s)) {
            return `<div class="card mode-card locked" onclick="toast('${s.name} fani ${s.gr[0]}-sinfdan boshlanadi 🔒')">
        <div class="mode-top"><span class="mode-ic" style="background:${s.color}1f">${s.icon}</span>
        <div><h3>${s.name}</h3><p>${s.desc}</p></div></div>
        <div class="mode-meta"><span>🔒 ${s.gr[0]}-sinfdan boshlanadi</span></div></div>`;
        }
        const qs = gradeQs(s.id).length;
        const st = state.subjectStats[s.id] || { done: 0, correct: 0 };
        const pct = Math.round((st.done || 0) / Math.max(qs, 1) * 100);
        return `<div class="card mode-card">
      <div class="mode-top"><span class="mode-ic" style="background:${s.color}1f">${s.icon}</span>
      <div><h3>${s.name}</h3><p>${s.desc}</p></div></div>
      <div class="mode-meta"><span>${qs} savol</span><span>${st.correct}/${st.done || 0} to'g'ri</span></div>
      <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
      <div class="mode-actions">
        <button class="btn btn-ghost sm" onclick="event.stopPropagation();openSetup('${s.id}')">Test ishlash</button>
        <button class="btn btn-ghost sm" onclick="event.stopPropagation();gotoFC('${s.id}')">Kartochkalar</button>
      </div></div>`;
    }).join("");
}
function gotoFC(id) { setFC(id); showSection("kartochka"); }

/* ============ TESTLAR ============ */
function renderTestGrid() {
    let html = SUBJECTS.map(s => {
        if (!subjectOpen(s)) {
            return `<div class="card mode-card locked" onclick="toast('${s.name} fani ${s.gr[0]}-sinfdan boshlanadi 🔒')">
        <div class="mode-top"><span class="mode-ic" style="background:${s.color}1f">${s.icon}</span>
        <div><h3>${s.name}</h3><p>${s.desc}</p></div></div>
        <div class="mode-meta"><span>🔒 ${s.gr[0]}-sinfdan boshlanadi</span></div></div>`;
        }
        return `<div class="card mode-card" onclick="openSetup('${s.id}')">
      <div class="mode-top"><span class="mode-ic" style="background:${s.color}1f">${s.icon}</span>
      <div><h3>${s.name}</h3><p>${s.desc}</p></div></div>
      <div class="mode-meta"><span>${gradeQs(s.id).length} savol</span><span>8–15 ball / savol</span></div></div>`;
    }).join("");
    const mix = Object.values(TESTS).flat().filter(inGrade).length;
    html += `<div class="card mode-card" onclick="openSetup('aralash')">
    <div class="mode-top"><span class="mode-ic" style="background:var(--accent-soft)">${icon("shuffle")}</span>
    <div><h3>Aralash test</h3><p>Sinfingizga mos barcha fanlardan savollar</p></div></div>
    <div class="mode-meta"><span>${mix} savol</span><span>Tasodifiy</span></div></div>`;
    $("testGrid").innerHTML = html;
}

function openSetup(id) {
    showSection("testlar");
    clearInterval(tm); current = [];
    setup.subject = id;
    $("testResult").classList.add("hidden");
    $("testActive").classList.add("hidden");
    $("testSetup").classList.remove("hidden");
    $("setupPanel").classList.remove("hidden");
    $("setupTitle").textContent = id === "aralash" ? "Aralash test" : subjName(id);
    updateSetupMeta();
    $("setupPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function closeSetup() { $("setupPanel").classList.add("hidden"); }
function setDiff(btn) {
    setup.diff = +btn.dataset.d;
    btn.parentElement.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    updateSetupMeta();
}
function pool() {
    let qs = setup.subject === "aralash"
        ? Object.values(TESTS).flat()
        : (setup.subject && TESTS[setup.subject] ? TESTS[setup.subject].slice() : []);
    qs = qs.filter(inGrade);
    if (setup.diff) qs = qs.filter(q => q.l === setup.diff);
    return qs;
}
function updateSetupMeta() {
    const n = pool().length;
    $("setupMeta").textContent = n ? n + " ta savol mavjud" : "Bu darajada savol yo'q";
}

function startTest() {
    const p = shuffle(pool().slice());
    if (!p.length) { toast("Bu murakkablikda savol topilmadi", "error"); return; }
    const n = Math.min(+$("countSel").value, p.length);
    current = p.slice(0, n);
    answers = Array(n).fill(null);
    idx = 0;
    timeLeft = n * 60;
    clearInterval(tm); tm = setInterval(tick, 1000);
    $("timer").textContent = fmtTime(timeLeft);
    $("testSetup").classList.add("hidden");
    $("testResult").classList.add("hidden");
    $("testActive").classList.remove("hidden");
    $("tSubject").textContent = (setup.subject === "aralash" ? "Aralash" : subjName(setup.subject)) + (state.grade ? " · " + state.grade + "-sinf" : "");
    touchActivity();
    renderQ();
}
function tick() {
    timeLeft--;
    $("timer").textContent = fmtTime(Math.max(0, timeLeft));
    if (timeLeft <= 0) { clearInterval(tm); toast("Vaqt tugadi — test yakunlandi", "error"); finishTest(); }
}
function renderQ() {
    const q = current[idx];
    $("qText").textContent = q.q;
    $("tCounter").textContent = (idx + 1) + " / " + current.length;
    $("tDiff").textContent = ["", "Oson", "O'rta", "Qiyin"][q.l];
    $("tProgress").style.width = ((idx + 1) / current.length * 100) + "%";
    $("optBox").innerHTML = q.o.map((o, i) =>
        `<button class="opt${answers[idx] === i ? " selected" : ""}" onclick="pick(${i})"><span class="opt-letter">${"ABCD"[i]}</span>${o}</button>`
    ).join("");
    $("prevBtn").style.visibility = idx ? "visible" : "hidden";
    $("nextBtn").textContent = idx === current.length - 1 ? "Yakunlash" : "Keyingi";
}
function pick(i) { answers[idx] = i; renderQ(); }
function prevQ() { if (idx > 0) { idx--; renderQ(); } }
function nextQ() { if (idx < current.length - 1) { idx++; renderQ(); } else finishTest(); }
function abortTest() {
    if (!confirm("Testni tashlab yuborishni xohlaysizmi? Natija saqlanmaydi.")) return;
    clearInterval(tm);
    backToSetup();
}
function backToSetup() {
    current = [];
    $("testActive").classList.add("hidden");
    $("testResult").classList.add("hidden");
    $("testSetup").classList.remove("hidden");
    renderTestGrid();
}

function finishTest() {
    clearInterval(tm);
    let correct = 0, pts = 0;
    current.forEach((q, i) => {
        if (answers[i] === q.a) { correct++; pts += q.l === 3 ? 15 : q.l === 2 ? 10 : 8; }
    });
    const total = current.length;
    const percent = Math.round(correct / total * 100);

    state.totalTests++;
    state.totalCorrect += correct;
    state.totalQuestions += total;
    if (setup.subject !== "aralash") {
        const s = state.subjectStats[setup.subject] || (state.subjectStats[setup.subject] = { done: 0, correct: 0 });
        s.done += total; s.correct += correct;
    }
    addPoints(pts);
    state.history.unshift({
        subject: (setup.subject === "aralash" ? "Aralash" : subjName(setup.subject)) + (state.grade ? " (" + state.grade + "-sinf)" : ""),
        score: correct, total, pts, percent, date: todayKey()
    });
    save(); updateChrome();

    beep(percent >= 60 ? 880 : 300, .15);
    if (percent >= 80) confetti();

    const gradeTxt = percent >= 90 ? "Ajoyib natija!" : percent >= 70 ? "Yaxshi natija!" : percent >= 50 ? "O'rtacha" : "Ko'proq mashq kerak";
    const ring = percent >= 70 ? "good" : percent >= 40 ? "mid" : "bad";
    const unanswered = answers.filter(a => a === null).length;

    $("testActive").classList.add("hidden");
    $("testResult").classList.remove("hidden");
    $("resultHero").innerHTML = `
    <div class="res-circle ${ring}">${percent}%</div>
    <h2>${gradeTxt}</h2>
    <p class="res-sub">${correct} / ${total} to'g'ri javob · <b>+${pts} ball</b> qo'shildi</p>
    ${unanswered ? `<p class="res-warn">Eslatma: ${unanswered} ta savol javobsiz qoldi</p>` : ""}`;

    $("reviewBox").innerHTML = current.map((q, i) => {
        const ok = answers[i] === q.a;
        return `<div class="rev-item ${ok ? "ok" : "bad"}">
      <p class="rev-q">${i + 1}. ${q.q}</p>
      <p class="rev-a">Sizning javobingiz: <b class="${ok ? "ok" : "bad"}">${answers[i] === null ? "—" : q.o[answers[i]]}</b>${ok ? "" : ` · To'g'ri javob: <b class="ok">${q.o[q.a]}</b>`}</p>
      <p class="rev-exp">${q.e}</p></div>`;
    }).join("");
}

/* Klaviatura: 1-4 tugmalari */
document.addEventListener("keydown", e => {
    const tag = (document.activeElement || {}).tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if ($("testActive").classList.contains("hidden") || !current.length) return;
    const n = parseInt(e.key);
    if (n >= 1 && n <= current[idx].o.length) { answers[idx] = n - 1; renderQ(); }
});

/* ============ KARTOCHKALAR ============ */
const fcCards = () => FLASHCARDS[fc.subject].filter(inGrade);

function buildFCChips() {
    $("fcChips").innerHTML = SUBJECTS.filter(subjectOpen).map(s =>
        `<button class="${fc.subject === s.id ? "on" : ""}" onclick="setFC('${s.id}')">${s.icon} ${s.name}</button>`
    ).join("");
}
function setFC(id) { fc.subject = id; fc.i = 0; buildFCChips(); renderFC(); touchActivity(); }
function renderFC() {
    const cards = fcCards();
    if (!cards.length) {
        $("fcFront").textContent = "Bu sinf uchun kartochka hozircha yo'q 🙌";
        $("fcBack").innerHTML = "Boshqa fanni tanlang";
        $("fcCounter").textContent = "0 / 0";
        $("flipCard").classList.remove("flipped");
        return;
    }
    const c = cards[fc.i];
    $("fcFront").textContent = c.f;
    $("fcBack").innerHTML = c.b;
    $("fcCounter").textContent = (fc.i + 1) + " / " + cards.length;
    $("flipCard").classList.remove("flipped");
}
function nextFC() { const n = fcCards().length; if (!n) return; fc.i = (fc.i + 1) % n; renderFC(); }
function prevFC() { const n = fcCards().length; if (!n) return; fc.i = (fc.i - 1 + n) % n; renderFC(); }
function shuffleFC() {
    if (!fcCards().length) return;
    shuffle(FLASHCARDS[fc.subject]);
    fc.i = 0; renderFC();
    toast("Kartochkalar aralashtirildi");
}

/* ============ 1-QISM TUGADI ============ */
/* ============ 2-QISM BOSHLANDI ============ */

/* ============ AI CHAT ============ */
const CHAT_SUGGEST = ["Pifagor teoremasi nima?", "Past Simple qanday ishlatiladi?", "Nyuton qonunlari", "Fotosintez nima?", "pH shkalasi"];

function buildChips() {
    $("chatChips").innerHTML = CHAT_SUGGEST.map(s => `<button onclick="ask('${s.replace(/'/g, "\\'")}')">${s}</button>`).join("");
}
function ask(q) { $("chatInput").value = q; sendMessage(); }
async function sendMessage() {
    const inp = $("chatInput");
    const t = inp.value.trim();
    if (!t) return;
    inp.value = "";
    addMsg(escapeHtml(t), "user");
    showTyping();

    if (state.apiKey) {
        try {
            const answer = await askCloud(t);
            removeTyping();
            addMsg(formatAI(answer), "bot");
        } catch (err) {
            removeTyping();
            const msg = String(err.message || err);
            const m = msg.toLowerCase();
            let help = "";
            if (m.includes("location") || m.includes("region") || m.includes("billing")) {
                help = "<br><br>📍 <b>Ma'nosi:</b> Gemini bu mintaqada cheklangan — menga yozing, Groq (boshqa bepul AI) ulab beraman.";
            } else if (m.includes("api key") || m.includes("not valid") || m.includes("invalid") || m.includes("permission") || m.includes("401") || m.includes("403")) {
                help = "<br><br>🔑 <b>Ma'nosi:</b> Kalit noto'g'ri — yangi kalit oling yoki qayta kiriting.";
            } else if (m.includes("quota") || m.includes("429") || m.includes("rate limit") || m.includes("resource")) {
                help = "<br><br>⏳ <b>Ma'nosi:</b> Limit tugadi — 1-2 daqiqa kutib turing.";
            } else if (m.includes("internet")) {
                help = "<br><br>🌐 <b>Ma'nosi:</b> Internet aloqasi yo'q.";
            }
            addMsg("⚠️ <b>API xatosi:</b><br><span style='font-size:12px'>" + escapeHtml(msg) + "</span>" + help, "bot");
            addMsg(getAI(t), "bot");
        }
    } else {
        setTimeout(() => { removeTyping(); addMsg(getAI(t), "bot"); }, 900);
    }
    touchActivity();
}
function addMsg(html, who) {
    const box = $("chatMsgs"), d = document.createElement("div");
    d.className = "msg " + who;
    d.innerHTML = `<div class="msg-av">${who === "bot" ? "AI" : icon("user")}</div><div class="msg-b">${html}</div>`;
    box.appendChild(d);
    box.scrollTop = box.scrollHeight;
}
function showTyping() {
    const box = $("chatMsgs"), d = document.createElement("div");
    d.className = "msg bot"; d.id = "typing";
    d.innerHTML = `<div class="msg-av">AI</div><div class="msg-b typing"><i></i><i></i><i></i></div>`;
    box.appendChild(d);
    box.scrollTop = box.scrollHeight;
}
function removeTyping() { const t = $("typing"); if (t) t.remove(); }
function getAI(qRaw) {
    const q = qRaw.toLowerCase();
    for (const k of AI_KB) {
        if (k.k.some(w => q.includes(w))) {
            let note = "";
            if (state.grade && k.g && !(k.g[0] <= state.grade && state.grade <= k.g[1])) {
                note = `ℹ️ Bu mavzu asosan ${k.g[0]}-sinfda o'tiladi:<br>`;
            }
            return note + k.a;
        }
    }
    return "Kechirasiz, bu savolga hozircha javob bera olmayman. Fanlar bo'yicha savollar bering — masalan: <b>\"Kvadrat yuzasi qanday topiladi?\"</b>";
}

/* ============ AI PROVAIDER ============ */
function onProviderChange() {
    const pSel = $("apiProviderSel"), mSel = $("apiModelSel");
    if (!pSel || !mSel) return;
    const p = pSel.value;
    mSel.innerHTML = AI_MODELS[p].map(m => `<option value="${m[0]}">${m[1]}</option>`).join("");
    const kInp = $("apiKeyInput"), hint = $("apiHint");
    if (kInp) kInp.placeholder = p === "gemini"
        ? "Google AI Studio kaliti (AIza... yoki AQ... bilan boshlanadi)"
        : "OpenAI API kaliti (sk- bilan boshlanadi)";
    if (hint) hint.innerHTML = p === "gemini"
        ? `Kalit olish: <b>aistudio.google.com/apikey</b> → "Create API key". Bepul — karta kerak emas!`
        : `Kalit olish: <b>platform.openai.com</b> → API keys. Pullik.`;
}

async function askCloud(question) {
    if (state.apiProvider === "openai") return askOpenAI(question);
    return askGemini(question);
}

/* ===== GOOGLE GEMINI — BEPUL (modelni o'zi tanlaydi) ===== */
const GEMINI_TRY = ["gemini-3.8-flash", "gemini-3.5-flash-lite", "gemini-flash-latest", "gemini-2.5-flash"];

async function askGemini(question) {
    chatHistory.push({ role: "user", content: question });

    const sys =
        "Sen 'AI Study' o'quv platformasining yordamchi ustozisan. " +
        (state.name ? "O'quvchining ismi " + state.name + ". " : "") +
        (state.grade
            ? "O'quvchi " + state.grade + "-sinfda o'qiydi — javoblarni aynan shu sinf darajasiga moslab ber: sodda tilda, misollar bilan tushuntir. "
            : "") +
        "Har doim o'zbek tilida javob ber. Javob qisqa, aniq va foydali bo'lsin (taxminan 150 so'zgacha). " +
        "Formulalarni oddiy belgilar bilan yoz (masalan: a^2 + b^2 = c^2).";

    const contents = chatHistory.slice(-10).map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
    }));

    const body = JSON.stringify({
        systemInstruction: { parts: [{ text: sys }] },
        contents: contents,
        generationConfig: { maxOutputTokens: 600, temperature: 0.7 }
    });

     const first = (state.apiModel && GEMINI_TRY.includes(state.apiModel)) ? state.apiModel : "gemini-3.8-flash";
    const tryList = [first, ...GEMINI_TRY.filter(m => m !== first)];
    const errors = [];

    for (const model of tryList) {
        let res;
        try {
            res = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent",
                { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": state.apiKey }, body: body }
            );
        } catch (netErr) {
            throw new Error("Internet aloqasi yo'q — internetni tekshiring");
        }

        if (!res.ok) {
            let msg = "API xatosi (" + res.status + ")";
            try { const e = await res.json(); if (e.error && e.error.message) msg = e.error.message; } catch (e2) { }
            errors.push(model + ": " + msg);
            if (res.status === 401 || res.status === 403 || String(msg).toLowerCase().includes("api key")) {
                throw new Error(model + ": " + msg);
            }
            continue;
        }

        const data = await res.json();
        const cand = data.candidates && data.candidates[0];
        const answer = (cand && cand.content && cand.content.parts)
            ? cand.content.parts.map(p => p.text).join("")
            : "";
        if (!answer) { errors.push(model + ": javob bo'sh qaytdi"); continue; }

        state.apiModel = model; save();
        chatHistory.push({ role: "assistant", content: answer });
        if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);
        return answer;
    }
    throw new Error("Barcha modellar xato berdi → " + errors.join(" | "));
}

/* ===== OPENAI CHATGPT — pullik ===== */
async function askOpenAI(question) {
    chatHistory.push({ role: "user", content: question });

    const sys =
        "Sen 'AI Study' o'quv platformasining yordamchi ustozisan. " +
        (state.name ? "O'quvchining ismi " + state.name + ". " : "") +
        (state.grade ? "O'quvchi " + state.grade + "-sinfda o'qiydi — javoblarni shu sinf darajasiga moslab ber. " : "") +
        "Har doim o'zbek tilida, qisqa va aniq javob ber.";

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + state.apiKey },
        body: JSON.stringify({
            model: state.apiModel || "gpt-4o-mini",
            messages: [{ role: "system", content: sys }, ...chatHistory.slice(-10)],
            max_tokens: 600,
            temperature: 0.7
        })
    });

    if (!res.ok) {
        let msg = "API xatosi (" + res.status + ")";
        try { const e = await res.json(); if (e.error && e.error.message) msg = e.error.message; } catch (e2) { }
        throw new Error(msg);
    }

    const data = await res.json();
    const answer = (data.choices && data.choices[0] && data.choices[0].message.content) || "Javob olinmadi.";
    chatHistory.push({ role: "assistant", content: answer });
    if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);
    return answer;
}

/* AI javobini chiroyli formatlash */
function formatAI(text) {
    let t = escapeHtml(text);
    t = t.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    t = t.replace(/\*(.+?)\*/g, "<i>$1</i>");
    t = t.replace(/`([^`]+?)`/g, "<code>$1</code>");
    t = t.replace(/\n/g, "<br>");
    return t;
}

/* Kalitni saqlash / uzish */
function saveApiKey() {
    const key = $("apiKeyInput").value.trim();
    if (!key) { toast("Kalit kiritilmadi", "error"); return; }
    const p = $("apiProviderSel").value;
    if (p === "openai" && !key.startsWith("sk-")) { toast("OpenAI kalit sk- bilan boshlanadi", "error"); return; }
    if (p === "gemini" && !key.startsWith("AIza") && !key.startsWith("AQ.")) { toast("Gemini kalit AIza yoki AQ. bilan boshlanadi", "error"); return; }
    state.apiProvider = p;
    state.apiModel = $("apiModelSel").value;
    state.apiKey = key;
    save();
    chatHistory = [];
    updateAIStatus();
    addMsg((p === "gemini" ? "Gemini" : "ChatGPT") + " ulandi ✅ Endi <b>har qanday savolingizga</b> javob bera olaman!", "bot");
    toast("AI muvaffaqiyatli ulandi!");
}
function clearApiKey() {
    state.apiKey = "";
    save();
    chatHistory = [];
    $("apiKeyInput").value = "";
    updateAIStatus();
    toast("AI uzildi — offline rejim");
}
function updateAIStatus() {
    const s = $("aiStatus"), k = $("apiKeyStatus");
    if (state.apiKey) {
        const name = state.apiProvider === "gemini" ? "Gemini ulangan ✅" : "ChatGPT ulangan ✅";
        if (s) { s.textContent = name; s.classList.add("ok"); }
        if (k) { k.textContent = "Ulangan"; k.classList.add("ok"); }
    } else {
        if (s) { s.textContent = "Offline rejim"; s.classList.remove("ok"); }
        if (k) { k.textContent = "Ulanmagan"; k.classList.remove("ok"); }
    }
}

/* ============ NATIJALAR ============ */
function renderResults() {
    const box = $("resultsContent");
    if (!state.history.length) {
        box.innerHTML = `<div class="card empty">Hali test ishlanmagan.<br>Boshlash uchun <a href="#" class="lnk" onclick="showSection('testlar');return false">Testlar</a> bo'limiga o'ting.</div>`;
        return;
    }
    const acc = state.totalQuestions ? Math.round(state.totalCorrect / state.totalQuestions * 100) : 0;
    let html = `<div class="stat-grid">
    <div class="stat"><div class="s-num">${state.points}</div><div class="s-lbl">Jami ball</div></div>
    <div class="stat"><div class="s-num">${state.history.length}</div><div class="s-lbl">Testlar</div></div>
    <div class="stat"><div class="s-num">${state.totalCorrect}</div><div class="s-lbl">To'g'ri javoblar</div></div>
    <div class="stat"><div class="s-num">${acc}%</div><div class="s-lbl">Aniqlik</div></div></div>
    <div class="card"><div class="card-head"><h3>So'nggi natijalar</h3></div>`;
    state.history.slice(0, 20).forEach(h => {
        const c = h.percent >= 70 ? "var(--success)" : h.percent >= 40 ? "var(--warn)" : "var(--danger)";
        html += `<div class="lb-row">
      <span class="tag tag-plain">${h.subject}</span>
      <span style="flex:1;color:var(--muted);font-size:13px">${fmtDate(h.date)} · ${h.score}/${h.total}</span>
      <b style="color:${c}">${h.percent}%</b>
      <span class="lb-pts">+${h.pts}</span></div>`;
    });
    box.innerHTML = html + "</div>";
}

/* ============ REYTING ============ */
function setLbTab(t) {
    lbTab = t;
    $("tabAll").classList.toggle("active", t === "all");
    $("tabWeek").classList.toggle("active", t === "week");
    renderLeaderboard();
}
function renderLeaderboard() {
    const list = state.grade ? MOCK.filter(u => u.g === state.grade) : MOCK;
    const me = { name: state.name || "Siz", g: state.grade || 0, p: state.points, w: state.weeklyPoints, me: true };
    const users = [...list, me];
    users.sort((a, b) => lbTab === "all" ? b.p - a.p : b.w - a.w);
    const head = state.grade
        ? `<div class="card-head"><h3>🎓 ${state.grade}-sinf o'quvchilari</h3><span class="tag">${users.length} o'quvchi</span></div>`
        : `<div class="card-head"><h3>Barcha o'quvchilar</h3></div>`;
    $("lbBox").innerHTML = head + users.map((u, i) => {
        const pts = lbTab === "all" ? u.p : u.w;
        const gl = !state.grade && u.g ? `<span class="tag tag-plain">${u.g}-sinf</span>` : "";
        return `<div class="lb-row${u.me ? " me" : ""}">
      <span class="lb-rank r${i + 1}">${i + 1}</span>
      <span class="lb-name">${u.name}${u.me ? " — siz" : ""}</span>${gl}
      <span class="lb-pts">${pts} ball</span></div>`;
    }).join("");
}

/* ============ YOZUVLAR ============ */
function addNote() {
    const t = $("noteInput").value.trim();
    if (!t) { toast("Yozuv bo'sh bo'lmasligi kerak", "error"); return; }
    state.notes.unshift({ id: Date.now(), text: t, date: todayKey() });
    save();
    $("noteInput").value = "";
    renderNotes();
    toast("Yozuv saqlandi");
}
function delNote(id) {
    state.notes = state.notes.filter(n => n.id !== id);
    save(); renderNotes();
    toast("Yozuv o'chirildi");
}
function renderNotes() {
    const b = $("notesList");
    if (!state.notes.length) { b.innerHTML = `<div class="card empty">Yozuvlar hozircha bo'sh.</div>`; return; }
    b.innerHTML = state.notes.map(n =>
        `<div class="note-item"><div><p class="note-text">${escapeHtml(n.text)}</p><p class="note-meta">${fmtDate(n.date)}</p></div>
     <button class="note-del" onclick="delNote(${n.id})" title="O'chirish">${icon("trash")}</button></div>`
    ).join("");
}

/* ============ PROFIL ============ */
function renderProfile() {
    $("nameInput").value = state.name;
    $("gradeSel").value = String(state.grade || 0);
    $("pAvatar").textContent = initials(state.name || "O'quvchi");
    const acc = state.totalQuestions ? Math.round(state.totalCorrect / state.totalQuestions * 100) : 0;
    const lv = getLevel(state.points);
    $("pStats").innerHTML = [
        { num: state.points, lbl: "Ball" },
        { num: state.grade ? state.grade + "-sinf" : "—", lbl: "Sinf" },
        { num: lv.name, lbl: "Daraja" },
        { num: state.totalTests, lbl: "Testlar" },
        { num: state.totalCorrect, lbl: "To'g'ri javoblar" },
        { num: acc + "%", lbl: "Aniqlik" }
    ].map(s => `<div class="stat"><div class="s-num">${s.num}</div><div class="s-lbl">${s.lbl}</div></div>`).join("");

    let lh = `<p class="lvl-sub"><b>${lv.name}</b> — ${state.points} ball</p>`;
    if (lv.next) {
        const pct = Math.min(100, Math.round(state.points / lv.next * 100));
        lh += `<p class="lvl-sub">Keyingi daraja uchun ${lv.next - state.points} ball qoldi</p><div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>`;
    } else lh += `<p class="lvl-sub">Eng yuqori daraja — tabriklayman!</p>`;
    $("pLevel").innerHTML = lh;

    const earned = BADGES.filter(b => b.cond(state)).length;
    $("badgeCount").textContent = earned + " / " + BADGES.length;
    $("pBadges").innerHTML = BADGES.map(b =>
        `<div class="badge${b.cond(state) ? "" : " locked"}"><span class="b-ic">${b.icon}</span>${b.label}</div>`
    ).join("");
}
function saveName() {
    const v = $("nameInput").value.trim();
    if (!v) { toast("Ism kiritilmadi", "error"); return; }
    state.name = v; save(); updateChrome();
    toast("Ism saqlandi");
}

/* ============ SOZLAMALAR ============ */
function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ai-study-malumotlar.json";
    a.click();
    URL.revokeObjectURL(a.href);
    toast("Fayl yuklab olindi");
}
function resetAll() {
    if (!confirm("Barcha ma'lumotlar (ball, tarix, yozuvlar) o'chiriladi. Davom etamizmi?")) return;
    localStorage.removeItem(STORE_KEY);
    location.reload();
}

/* ============ ISHGA TUSHIRISH ============ */
document.addEventListener("DOMContentLoaded", () => {
    if (state.weekId !== currentWeek()) { state.weekId = currentWeek(); state.weeklyPoints = 0; save(); }
    buildNav();
    buildGradeSel();
    buildOnboard();
    if (!state.grade) $("onboard").classList.remove("hidden");
    renderSubjects();
    renderTestGrid();
    buildFCChips();
    buildChips();
    renderFC();
    renderNotes();
    $("soundTgl").checked = state.sound;

    const provSel = $("apiProviderSel");
    if (provSel) {
        provSel.value = state.apiProvider || "gemini";
        onProviderChange();
        const mSel = $("apiModelSel");
        if (mSel) mSel.value = state.apiModel || "gemini-2.5-flash";
    }
    updateAIStatus();
    applyTheme();
    updateChrome();
    renderDashboard();
    addMsg(`Salom! Men <b>AI Study</b> yordamchingizman${state.grade ? " — siz " + state.grade + "-sinf o'quvchisisiz" : ""}. Fanlar bo'yicha savol bering — masalan: <i>"Pifagor teoremasi nima?"</i>`, "bot");
});

/* ============ 2-QISM TUGADI ============ */
