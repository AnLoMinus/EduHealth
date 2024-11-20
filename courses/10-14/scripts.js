// Enhanced quiz questions based on the content
const quizQuestions = [
  {
    question: "האם הלב נמצא בצד ימין של הגוף?",
    options: ["נכון", "לא נכון"],
    correct: 1,
  },
  {
    question: "איזה איבר אחראי על הנשימה?",
    options: ["ריאות", "לב", "קיבה"],
    correct: 0,
  },
  {
    question: "מה חשוב לאכול כדי להיות בריאים?",
    options: ["ממתקים", "פירות וירקות", "רק בשר"],
    correct: 1,
  },
];

// Daily summary questions
function initializeDailySummary() {
  const summaryQuestions = [
    "איזה איבר אחראי על הנשימה?",
    "איפה נמצא הלב?",
    "למה חשוב לאכול פירות וירקות?",
  ];

  const container = document.getElementById("dailySummaryQuestions");
  summaryQuestions.forEach((question) => {
    const div = document.createElement("div");
    div.className = "summary-question";
    div.innerHTML = `
            <p>${question}</p>
            <textarea placeholder="כתבו את התשובה שלכם כאן"></textarea>
        `;
    container.appendChild(div);
  });
}

// Initialize songs list
function initializeSongs() {
  const songs = ["שיר הלב הפועם", "הריאות שלי נושמות", "הגוף שלי מיוחד"];

  const songsList = document.getElementById("songsList");
  songs.forEach((song) => {
    const div = document.createElement("div");
    div.className = "song-item";
    div.innerHTML = `🎵 ${song}`;
    songsList.appendChild(div);
  });
}

// Initialize everything when page loads
window.onload = () => {
  initializeQuiz();
  initializeMemoryGame();
  initializeDailySummary();
  initializeSongs();
};

// Body Parts Data
const bodyPartsData = {
  eyes: {
    title: "העיניים שלנו",
    emoji: "👀",
    description:
      "העיניים הן החלונות שלנו לעולם, דרכן אנחנו רואים צבעים, צורות ותנועה",
    mainFunction:
      "העיניים מאפשרות לנו לראות את העולם, לזהות צבעים, צורות ותנועה, ולנווט בסביבה שלנו",
    facts: [
      "העיניים ממצמצות בערך 28,000 פעמים ביום",
      "העין יכולה להבחין בכ-10 מיליון צבעים שונים",
      "אישון העין מתרחב עד פי 45 מגודו המקורי בחושך",
      "העיניים מעבדות כ-80% מהמידע שאנחנו קולטים מהסביבה",
    ],
    tips: [
      "חשוב לשמור על מרחק נכון ממסכים",
      "לאכול מזון עשיר בוויטמין A",
      "להגן על העיניים מהשמש עם משקפי שמש",
      "לבקר אצל רופא עיניים באופן קבוע",
    ],
  },
  ears: {
    title: "האוזניים שלנו",
    emoji: "👂",
    description:
      "האוזניים הן איברי השמיעה שלנו, שעוזרים לנו לשמוע קולות ולשמור על שיווי משקל",
    mainFunction:
      "האוזניים קולטות גלי קול ומתרגמות אותם לאותות שהמוח שלנו מבין",
    facts: [
      "האוזניים ממשיכות לגדול כל החיים",
      "האוזן הפנימית מכילה את האיבר הכי קטן בגוף",
      "אנחנו יכולים לשמוע יותר מ-340,000 צלילים שונים",
      "האוזניים עוזרות לנו לשמור על שיווי משקל",
    ],
    tips: [
      "להימנע מרעשים חזקים מדי",
      "לנקות את האוזניים בזהירות",
      "לא לכניס חפצים לאוזניים",
      "להגן על האוזניים במים",
    ],
  },
  nose: {
    title: "האף שלנו",
    emoji: "👃",
    description: "האף הוא איבר הריח שלנו, שמסנן ומחמם את האוויר שאנחנו נושמים",
    mainFunction:
      "האף מאפשר לנו להריח ריחות, לסנן אוויר ולחמם אותו לפני שהוא מגיע לריאות",
    facts: [
      "האף יכול להבחין בין יותר מ-1 טריליון ריחות שונים",
      "האף מייצר כמעט ליטר נזלת ביום",
      "כל נחיר עובד בנפרד ומתחלף כל כמה שעות",
      "האף מסנן חיידקים ואבק מהאוויר",
    ],
    tips: [
      "לשטוף את האף במים פושרים כשצריך",
      "להימנע מריחות חזקים מדי",
      "לנשום דרך האף ולא דרך הפה",
      "לשמור על לחות באוויר",
    ],
  },
  mouth: {
    title: "הפה שלנו",
    emoji: "👄",
    description: "הפה הוא איבר חשוב שעוזר לנו לאכול ולדבר",
    mainFunction: "הפה מאפשר לנו לאכול, לדבר, לטעום ולהביע רגשות",
    facts: [
      "בפה יש 32 שיניים אצל מבוגרים",
      "הלשון מכילה כ-10,000 בלוטות טעם",
      "הרוק עוזר לנו לעכל את האוכל",
      "אנחנו מייצרים כליטר רוק ביום",
    ],
    tips: [
      "לצחצח שיניים פעמיים ביום",
      "להשתמש בחוט דנטלי",
      "לשתות הרבה מים",
      "לבקר אצל רופא שיניים באופן קבוע",
    ],
  },
  hands: {
    title: "הידיים שלנו",
    emoji: "💪",
    description: "הידיים מאפשרות לנו לגעת, לאחוז ולבצע פעולות מדויקות",
    mainFunction:
      "הידיים מאפשרות לנו לבצע פעולות עדינות ומורכבות, לגעת ולהרגיש",
    facts: [
      "בכל יד יש 27 עצמות",
      "יש לנו טביעות אצבע ייחודיות",
      "כף היד מכילה 29 מפרקים",
      "יש לנו יותר מ-30 שרירים בכל יד",
    ],
    tips: [
      "לשטוף ידיים באופן קבוע",
      "לתרגל כתיבה וציור",
      "להשתמש בכפפות בעבודות קשות",
      "לעשות תרגילי חיזוק לידיים",
    ],
  },
  legs: {
    title: "הרגליים שלנו",
    emoji: "🦿",
    description: "הרגליים נושאות את משקל הגוף ומאפשרות לנו לנוע ממקום למקום",
    mainFunction: "הרגליים מאפשרות לנו ללכת, לרוץ, לקפוץ ולשמור על שיווי משקל",
    facts: [
      "בכל רגל יש 26 עצמות",
      "הרגליים נושאות את כל משקל הגוף",
      "כף הרגל מכילה 250,000 בלוטות זיעה",
      "השרירים החזקים ביותר נמצאים ברגליים",
    ],
    tips: [
      "לנעול נעליים נוחות",
      "לעשות פעילות גופנית",
      "למתוח את השרירים",
      "לנוח כשצריך",
    ],
  },
  fingers: {
    title: "האצבעות שלנו",
    emoji: "✌️",
    description: "האצבעות מאפשרות לנו לתפוס, למשש ולבצע פעולות עדינות",
    mainFunction:
      "האצבעות עוזרות לנו לתפוס חפצים, להרגיש מרקמים ולבצע תנועות מדויקות",
    facts: [
      "לכל אצבע יש 3 מפרקים",
      "האגודל יכול לגעת בכל האצבעות האחרות",
      "קצות האצבעות רגישות מאוד למגע",
      'הציפורניים גדלות כ-3.5 מ"מ בחודש',
    ],
    tips: [
      "לשמור על ניקיון הציפורניים",
      "להשתמש בקרם ידיים",
      "לתרגל פעילויות עדינות",
      "להגן על האצבעות מפגיעה",
    ],
  },
  bones: {
    title: "העצמות שלנו",
    emoji: "🦴",
    description: "העצמות הן השלד שתומך בגוף שלנו ומגן על האיברים הפנימיים",
    mainFunction:
      "העצמות נותנות לגוף צורה, מגנות על איברים פנימיים ומאפשרות תנועה",
    facts: [
      "בגוף יש 206 עצמות",
      "העצם הכי קטנה נמצאת באוזן",
      "העצמות מתחדשות כל הזמן",
      "עצם הירך היא העצם הכי חזקה בגוף",
    ],
    tips: [
      "לאכול מזון עשיר בסידן",
      "לעשות פעילות גופנית",
      "להיחשף לשמש (ויטמין D)",
      "לשמור על יציבה נכונה",
    ],
  },
  lungs: {
    title: "הריאות שלנו",
    emoji: "🫁",
    description: "הריאות הן איברי הנשימה העיקריים שלנו, המאפשרים לנו לנשום",
    mainFunction: "הריאות מכניסות חמצן לגוף ומוציאות פחמן דו-חמני",
    facts: [
      "אנחנו נושמים כ-20,000 פעמים ביום",
      "הריאה הימנית גדולה מהשמאלית",
      "יש לנו כ-300 מיליון נאדיות בריאות",
      "הריאות מכילות כמעט 2.5 ליטר אוויר",
    ],
    tips: [
      "לנשום אוויר נקי",
      "להתעמל באופן קבוע",
      "להימנע מעישון",
      "לתרגל נשימות עמוקות",
    ],
  },
  heart: {
    title: "הלב שלנו",
    emoji: "🫀",
    description: "הלב הוא המשאבה של הגוף, שדוחפת דם לכל האיברים",
    mainFunction: "הלב מזרים דם עם חמצן וחומרי הזנה לכל חלקי הגוף",
    facts: [
      "הלב פועם כ-100,000 פעמים ביום",
      "הלב מזרים כ-7,000 ליטר דם ביום",
      "הלב נמצא בצד שמאל של החזה",
      "אפשר לשמוע את פעימות הלב עם סטטוסקופ",
    ],
    tips: [
      "לעשות פעילות גופנית",
      "לאכול אוכל בריא",
      "להימנע ממתח",
      "לישון מספיק",
    ],
  },
  brain: {
    title: "המוח שלנו",
    emoji: "🧠",
    description: "המוח הוא המרכז הראשי של הגוף, השולט על כל הפעולות שלנו",
    mainFunction: "המוח מנהל את כל פעולות הגוף, החשיבה, הזיכרון והרגשות",
    facts: [
      "המוח שוקל כ-1.4 קילוגרם",
      "יש במוח כ-86 מיליארד תאי עצב",
      "המוח צורך 20% מהאנרגיה של הגוף",
      "המוח פעיל גם כשאנחנו ישנים",
    ],
    tips: [
      "לפתור חידות ותרגילי חשיבה",
      "לישון טוב בלילה",
      "לאכול מזון בריא למוח",
      "להימנע ממכות בראש",
    ],
  },
  teeth: {
    title: "השיניים שלנו",
    emoji: "🦷",
    description: "השיניים עוזרות לנו ללעוס את האוכל ולחייך",
    mainFunction: "השיניים חותכות וטוחנות את האוכל כדי שנוכל לבלוע ולעכל אותו",
    facts: [
      "יש לנו 20 שיני חלב ו-32 שיניים קבועות",
      "השן היא החומר הכי קשה בגוף",
      "כל שן מורכבת משלוש שכבות",
      "השיניים הראשונות מופיעות בגיל חצי שנה",
    ],
    tips: [
      "לצחצח שיניים פעמיים ביום",
      "להשתמש בחוט דנטלי",
      "להימנע ממתוקים",
      "לבקר ברופא שיניים כל חצי שנה",
    ],
  },
  skin: {
    title: "העור שלנו",
    emoji: "🎭",
    description: "העור הוא האיבר הגדול ביותר בגוף, המגן עלינו מפני פגיעות",
    mainFunction:
      "העור מגן על הגוף, עוזר בוויסות חום הגוף ומאפשר לנו להרגיש מגע",
    facts: [
      "העור מתחדש כל 28 ימים",
      "שטח העור הוא כ-2 מטר רבוע",
      "בעור יש מיליוני תאי חישה",
      "העור מייצר ויטמין D בעזרת השמש",
    ],
    tips: [
      "להשתמש בקרם הגנה מהשמש",
      "לשתות הרבה מים",
      "לשמור על ניקיון העור",
      "להימנע מכוויות שמש",
    ],
  },
  hair: {
    title: "השיער שלנו",
    emoji: "💇",
    description: "השיער מגן על הראש ושומר על חום הגוף",
    mainFunction: "השיער מגן על העור, שומר על חום הגוף ועוזר לנו להרגיש מגע",
    facts: [
      "יש לנו כ-100,000 שערות בראש",
      "השיער גדל כ-1 סנטימטר בחודש",
      "כל שערה חיה 2-6 שנים",
      "השיער חזק מאוד ביחס לעובי שלו",
    ],
    tips: [
      "לחפוף את השיער באופן קבוע",
      "להשתמש בשמפו מתאים",
      "לסרק בעדינות",
      "לאכול מזון עשיר בחלבון",
    ],
  },
  nails: {
    title: "הציפורניים שלנו",
    emoji: "💅",
    description:
      "הציפורניים מגנות על קצות האצבעות ועוזרות לנו לתפוס דברים קטנים",
    mainFunction: "הציפורניים מגנות על האצבעות ועוזרות בפעולות עדינות",
    facts: [
      'הציפורניים גדלות כ-3.5 מ"מ בחודש',
      "הציפורניים מורכבות מקרטין",
      "ציפורני הידיים גדלות מהר יותר מציפורני הרגליים",
      "צבע הציפורן יכול להעיד על הבריאות",
    ],
    tips: [
      "לשמור על ניקיון הציפורניים",
      "לגזוז בזהירות",
      "לאכול מזון עשיר בחלבון",
      "להימנע מכסיסת ציפורניים",
    ],
  },
  earDrum: {
    title: "תנוך האוזן",
    emoji: "👂",
    description: "תנוך האוזן עוזר לנו לקלוט צלילים ולכוון אותם פנימה",
    mainFunction: "תנוך האוזן אוסף גלי קול ומעביר אותם לתוך האוזן",
    facts: [
      "תנוך האוזן עשוי מסחוס",
      "הצורה הייחודית עוזרת לקלוט צלילים",
      "התנוך ממשיך לגדול כל החיים",
      "יש לו תפקיד חשוב בשמיעה כיוונית",
    ],
    tips: [
      "לנקות בעדינות",
      "להגן מקור עז",
      "להימנע מחשיפה לרעש חזק",
      "לשמור על היגיינת האוזניים",
    ],
  },
};

// Modal Functions
function openModal(bodyPart) {
  const modal = document.getElementById("bodyPartModal");
  const data = bodyPartsData[bodyPart];

  if (!data) return;

  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalEmoji").textContent = data.emoji;
  document.getElementById("modalDescription").textContent = data.description;
  document.getElementById("modalMainFunction").textContent = data.mainFunction;

  const factsList = document.getElementById("modalFacts");
  factsList.innerHTML = "";
  data.facts.forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    factsList.appendChild(li);
  });

  const tipsList = document.getElementById("modalTips");
  tipsList.innerHTML = "";
  data.tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  modal.style.display = "block";
}

// Add this function to handle closing any modal
function closeAllModals() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
}

// Update the event listeners section
document.addEventListener("DOMContentLoaded", function () {
  // Add click listeners to body parts
  const bodyParts = document.querySelectorAll(".body-part");
  bodyParts.forEach((part) => {
    part.addEventListener("click", () => {
      const bodyPartId = part.getAttribute("data-part");
      openModal(bodyPartId);
    });
  });

  // Add click listeners to food categories
  const foodCategories = document.querySelectorAll(".food-category");
  foodCategories.forEach((category) => {
    category.addEventListener("click", () => {
      const categoryId = category.getAttribute("data-category");
      openFoodModal(categoryId);
    });
  });

  // Close modals when clicking the X buttons
  const closeButtons = document.querySelectorAll(".close-modal");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
  });

  // Close modals when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeAllModals();
    }
  });
});

// Update the data-part attribution section
document.querySelectorAll(".body-part").forEach((part) => {
  const text = part.textContent.toLowerCase();
  if (text.includes("עיניים")) part.setAttribute("data-part", "eyes");
  else if (text.includes("אוזניים")) part.setAttribute("data-part", "ears");
  else if (text.includes("אף")) part.setAttribute("data-part", "nose");
  else if (text.includes("פה")) part.setAttribute("data-part", "mouth");
  else if (text.includes("ידיים")) part.setAttribute("data-part", "hands");
  else if (text.includes("רגליים")) part.setAttribute("data-part", "legs");
  else if (text.includes("אצבעות")) part.setAttribute("data-part", "fingers");
  else if (text.includes("עצמות")) part.setAttribute("data-part", "bones");
  else if (text.includes("ריאות")) part.setAttribute("data-part", "lungs");
  else if (text.includes("לב")) part.setAttribute("data-part", "heart");
  else if (text.includes("מוח")) part.setAttribute("data-part", "brain");
  else if (text.includes("שיניים")) part.setAttribute("data-part", "teeth");
  else if (text.includes("עור")) part.setAttribute("data-part", "skin");
  else if (text.includes("שיער")) part.setAttribute("data-part", "hair");
  else if (text.includes("ציפורניים")) part.setAttribute("data-part", "nails");
  else if (text.includes("תנוך")) part.setAttribute("data-part", "earDrum");
});

// Add this to your existing scripts.js
const foodData = {
  grains: {
    title: "דגנים",
    emoji: "🌾",
    description: "דגנים הם מקור חשוב לאנרגיה לגוף שלנו",
    mainFunction: "דגנים נותנים לנו אנרגיה לכל היום ועוזרים לנו לגדול",
    items: [
      {
        name: "לחם",
        emoji: "🍞",
        benefits: ["עשיר בסיבים", "נותן אנרגיה", "מכיל ויטמינים"],
      },
      {
        name: "אורז",
        emoji: "🍚",
        benefits: ["קל לעיכול", "מקור לאנרגיה", "מתאים לכל ארוחה"],
      },
      {
        name: "פסטה",
        emoji: "🍝",
        benefits: ["עשירה בפחמימות", "טעימה", "נותנת כוח"],
      },
      {
        name: "דגני בוקר",
        emoji: "🥣",
        benefits: ["מועשרים בברזל", "טעימים", "קלים להכנה"],
      },
    ],
    tips: [
      "לבחור דגנים מלאים",
      "לגוון בין סוגי דגנים",
      "לאכול בכל ארוחה עיקרית",
      "להעדיף דגנים ללא סוכר מוסף",
    ],
  },
  proteins: {
    title: "חלבונים",
    emoji: "🥚",
    description: "חלבונים הם אבני הבניין של הגוף",
    mainFunction: "חלבונים עוזרים לנו לגדול ולבנות שרירים חזקים",
    items: [
      {
        name: "ביצה",
        emoji: "🥚",
        benefits: ["עשירה בחלבון", "מכילה ברזל", "קלה להכנה"],
      },
      {
        name: "דג",
        emoji: "🐟",
        benefits: ["עשיר באומגה 3", "טוב למוח", "מכיל חלבון איכותי"],
      },
      {
        name: "עוף",
        emoji: "🍗",
        benefits: ["דל בשומן", "עשיר בחלבון", "קל לעיכול"],
      },
      {
        name: "קטניות",
        emoji: "🫘",
        benefits: ["עשירות בסיבים", "מקור לחלבון", "מכילות ברזל"],
      },
    ],
    tips: [
      "לאכול מגוון חלבונים",
      "להקפיד על בישול נכון",
      "לשלב בכל ארוחה עיקרית",
      "לשתות מים אחרי אכילת חלבונים",
    ],
  },
  vegetables: {
    title: "ירקות",
    emoji: "🥬",
    description: "ירקות מלאים בוויטמינים ומינרלים חשובים",
    mainFunction: "ירקות מספקים לגוף ויטמינים, מינרלים וסיבים תזונתיים",
    items: [
      {
        name: "גזר",
        emoji: "🥕",
        benefits: ["טוב לעיניים", "מכיל ויטמין A", "עשיר בסיבים"],
      },
      {
        name: "עגבנייה",
        emoji: "🍅",
        benefits: ["עשירה בנוגדי חמצון", "מכילה ויטמין C", "טובה ללב"],
      },
      {
        name: "מלפפון",
        emoji: "🥒",
        benefits: ["מכיל הרבה מים", "דל בקלוריות", "עשיר בסיבים"],
      },
      {
        name: "ברוקולי",
        emoji: "🥦",
        benefits: ["עשיר בברזל", "מכיל סידן", "מלא בוויטמינים"],
      },
    ],
    tips: [
      "לאכול ירקות בכל צבעי הקשת",
      "לשטוף היטב לפני האכילה",
      "לאכול חלק מהירקות טריים",
      "לשלב ירקות בכל ארוחה",
    ],
  },
  fruits: {
    title: "פירות",
    emoji: "🍎",
    description: "פירות הם ממתקים טבעיים מלאי ויטמינים",
    mainFunction: "פירות מספקים ויטמינים, מינרלים ונוגדי חמצון",
    items: [
      {
        name: "תפוח",
        emoji: "🍎",
        benefits: ["עשיר בסיבים", "מכיל נוגדי חמצון", "טוב לשיניים"],
      },
      {
        name: "בננה",
        emoji: "🍌",
        benefits: ["עשירה באשלגן", "נותנת אנרגיה", "קלה לעיכול"],
      },
      {
        name: "תפוז",
        emoji: "🍊",
        benefits: ["עשיר בוויטמין C", "מחזק את החיסון", "טעים ומרענן"],
      },
      {
        name: "ענבים",
        emoji: "🍇",
        benefits: ["מכילים נוגדי חמצון", "עשירים במינרלים", "מתוקים טבעי"],
      },
    ],
    tips: [
      "לאכול פירות טריים",
      "לגוון בין סוגי פירות",
      "לשטוף היטב לפני האכילה",
      "להעדיף פירות על פני ממתקים",
    ],
  },
  dairy: {
    title: "מוצרי חלב",
    emoji: "🥛",
    description: "מוצרי חלב הם מקור חשוב לסידן ולחלבון",
    mainFunction:
      "מוצרי חלב עוזרים לבנות עצמות ושיניים חזקות ותורמים לגדילה בריאה",
    items: [
      {
        name: "חלב",
        emoji: "🥛",
        benefits: ["עשיר בסידן", "מכיל ויטמין D", "מקור טוב לחלבון"],
      },
      {
        name: "גבינה",
        emoji: "🧀",
        benefits: ["עשירה בסידן", "מקור מצוין לחלבון", "מכילה ויטמין B12"],
      },
      {
        name: "יוגורט",
        emoji: "🥄",
        benefits: ["מכיל חיידקים טובים", "קל לעיכול", "עשיר בסידן"],
      },
      {
        name: "לבן",
        emoji: "🥛",
        benefits: ["קל לעיכול", "מקור טוב לחלבון", "מתאים לארוחת בוקר"],
      },
    ],
    tips: [
      "לשתות חלב כל יום",
      "לגוון בין סוגי מוצרי החלב",
      "לבחור מוצרים דלי שומן",
      "לשמור במקרר בטמפרטורה נכונה",
    ],
  },
  nuts: {
    title: "אגוזים וזרעים",
    emoji: "🥜",
    description: "אגוזים וזרעים הם מקור מצוין לשומנים בריאים וחלבון",
    mainFunction:
      "אגוזים וזרעים מספקים אנרגיה, שומנים בריאים ומינרלים חשובים לגוף",
    items: [
      {
        name: "שקדים",
        emoji: "🥜",
        benefits: ["עשירים בסידן", "מקור טוב לחלבון", "מכילים ויטמין E"],
      },
      {
        name: "אגוזי מלך",
        emoji: "🌰",
        benefits: ["עשירים באומגה 3", "טובים למוח", "מכילים נוגדי חמצון"],
      },
      {
        name: "גרעיני חמנייה",
        emoji: "🌻",
        benefits: ["עשירים באבץ", "מקור טוב לברזל", "מכילים ויטמין E"],
      },
      {
        name: "בוטנים",
        emoji: "🥜",
        benefits: ["עשירים בחלבון", "מקור טוב לאנרגיה", "מכילים מגנזיום"],
      },
    ],
    tips: [
      "לאכול במידה - כף ליום",
      "לשמור במקום קריר ויבש",
      "לבחור אגוזים טבעיים ללא מלח",
      "לשים לב לאלרגיות",
    ],
  },
};

// Add this function to handle food modals
function openFoodModal(category) {
  const modal = document.getElementById("foodModal");
  const data = foodData[category];

  if (!data) return;

  document.getElementById("foodModalTitle").textContent = data.title;
  document.getElementById("foodModalEmoji").textContent = data.emoji;
  document.getElementById("foodModalDescription").textContent =
    data.description;
  document.getElementById("foodModalFunction").textContent = data.mainFunction;

  const itemsList = document.getElementById("foodModalItems");
  itemsList.innerHTML = "";
  data.items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "food-modal-item";
    itemDiv.innerHTML = `
            <h5>${item.emoji} ${item.name}</h5>
            <ul>
                ${item.benefits
                  .map((benefit) => `<li>${benefit}</li>`)
                  .join("")}
            </ul>
        `;
    itemsList.appendChild(itemDiv);
  });

  const tipsList = document.getElementById("foodModalTips");
  tipsList.innerHTML = "";
  data.tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  modal.style.display = "block";
}

// Add event listeners for food categories
document.addEventListener("DOMContentLoaded", function () {
  // Add click listeners to food categories
  const foodCategories = document.querySelectorAll(".food-category");
  foodCategories.forEach((category) => {
    category.addEventListener("click", () => {
      const categoryId = category.getAttribute("data-category");
      openFoodModal(categoryId);
    });
  });
});
