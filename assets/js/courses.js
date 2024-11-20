// Courses data and functionality
const courses = [
  // גיל 3-6
  {
    emoji: "🧒",
    title: "יסודות הלמידה לגיל הרך",
    description:
      "מסלול המותאם במיוחד לילדים צעירים, מתמקד בלמידה חווייתית של גוף האדם",
    topics: [
      "הכרת אברי הגוף",
      "תפקוד בסיסי של מערכות הגוף",
      "משחקי למידה וחידות",
      "סיפורי הרפתקאות רפואיים",
      "ניסויים ביתיים פשוטים",
    ],
    ageRange: "3-6",
    highlights: [
      "פעילויות מותאמות לגיל הרך",
      "למידה דרך משחק",
      "חומרים ויזואליים",
    ],
  },
  // גיל 6-10
  {
    emoji: "🔬",
    title: "מבוא לביולוגיה",
    description: "הכרת עולם הביולוגיה דרך ניסויים והתנסויות מעשיות",
    topics: [
      "הכרת התא",
      "מערכות גוף פשוטות",
      "בעלי חיים וצמחים",
      "תהליכי חיים בסיסיים",
      "ניסוים ביתיים ותצפיות",
    ],
    ageRange: "6-10",
    highlights: ["ניסויים מעשיים", "פעילויות חקר", "למידה חווייתית"],
  },
  // גיל 10-14
  {
    emoji: "🧬",
    title: "ביולוגיה מתקדמת ומדע כללי",
    description: "העמקה במערכות הגוף ותהליכים ביולוגיים מורכבים",
    topics: [
      "אנטומיה בסיסית של גוף האדם",
      "תהליכים ביולוגיים מרכזיים",
      "עולם המיקרואורגניזמים",
      "מדעי הטבע והסביבה",
      "פיזיולוגיה ותזונה",
    ],
    ageRange: "10-14",
    highlights: ["מחקר מעמיק", "פרויקטים מעשיים", "עבודת צוות"],
  },
  // גיל 14-18
  {
    emoji: "🧪",
    title: "מדעי החיים והטבע המורחבים",
    description: "לימוד מעמיק של ביולוגיה, כימיה ופיזיקה",
    topics: [
      "ביולוגיה מתקדמת וגנטיקה",
      "יסודות הכימיה",
      "פיזיקה בסיסית",
      "מדעי הסביבה ואקולוגיה",
      "פרויקטים מתקדמים",
    ],
    ageRange: "14-18",
    highlights: ["מחקר מדעי", "ניסויים מתקדמים", "הכנה ללימודים גבוהים"],
  },
  // גיל 18+
  {
    emoji: "🏥",
    title: "מדעי הבריאות ורפואה קלינית",
    description: "הכשרה מקיפה בתחום הרפואה והבריאות",
    topics: [
      "אנטומיה ופיזיולוגיה מתקדמת",
      "מדעי הרפואה ומחקר קליני",
      "רפואה חירומית",
      "בריאות הציבור",
      "אתיקה רפואית",
    ],
    ageRange: "18+",
    highlights: ["התנסות מעשית", "מחקר קליני", "הכשרה מקצועית"],
  },
  // גיל 18++
  {
    emoji: "🌱",
    title: "רפואה אלטרנטיבית ובריאות הוליסטית",
    description: "לימוד שיטות ריפוי טבעיות וגישה הוליסטית לבריאות",
    topics: [
      "רפואה סינית מסורתית",
      "הומיאופתיה ונטורופתיה",
      "צמחי מרפא",
      "תזונה הוליסטית",
      "טכניקות ריפוי משלימות",
    ],
    ageRange: "18++",
    highlights: ["גישה הוליסטית", "שיטות ריפוי טבעיות", "התנסות מעשית"],
  },
  // גיל 18+++
  {
    emoji: "🧠",
    title: "בריאות נפשית ורווחה אישית",
    description: "הבנת הקשר בין בריאות נפשית ופיזית",
    topics: [
      "הבנת בריאות נפשית",
      "ניהול מתח ולחץ",
      "תקשורת ובריאות רגשית",
      "טיפול עצמי",
      "טיפול קבוצתי ותמיכה חברתית",
    ],
    ageRange: "18+++",
    highlights: ["כלים מעשיים", "התפתחות אישית", "תמיכה קבוצתית"],
  },
];

function createCourseCard(course) {
  return `
        <div class="course-card">
            <div class="course-header">
                <span class="course-emoji">${course.emoji}</span>
                <h3>${course.title}</h3>
            </div>
            <div class="course-content">
                <p class="course-description">${course.description}</p>
                <div class="course-highlights">
                    ${course.highlights
                      .map(
                        (highlight) =>
                          `<span class="highlight-tag">${highlight}</span>`
                      )
                      .join("")}
                </div>
                <h4>נושאי לימוד עיקריים:</h4>
                <ul class="course-topics">
                    ${course.topics
                      .map((topic) => `<li>${topic}</li>`)
                      .join("")}
                </ul>
                <p class="age-range">גילאים: ${course.ageRange}</p>
                <button class="more-info-button" data-course='${JSON.stringify(
                  course
                )}'>הצג עוד</button>
            </div>
        </div>
    `;
}

function initializeCourses() {
  const container = document.querySelector(".courses-container");
  container.innerHTML = courses
    .map((course) => createCourseCard(course))
    .join("");

  // Add click event listeners to more info buttons
  document.querySelectorAll(".more-info-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const course = JSON.parse(e.target.getAttribute("data-course"));
      openModal(course);
    });
  });
}

function openModal(course) {
  const modal = document.querySelector(".course-modal");
  const modalContent = modal.querySelector(".modal-content");

  // Get the appropriate modal content based on age range
  const modalHTML = getModalContentByAgeRange(course);

  modalContent.innerHTML = modalHTML;
  modal.style.display = "flex";

  // Add active class after a small delay for animation
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);

  // Close modal handlers
  const closeButtons = modal.querySelectorAll(".close-modal");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("active");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    });
  });
}

function getModalContentByAgeRange(course) {
  const modalTemplates = {
    "3-6": `
      <div class="modal-header">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
      </div>
      <div class="modal-body">
        <h3>תוכנית הלימודים</h3>
        <div class="curriculum-section">
          <h4>1. מבוא לגוף האדם 🧠❤️</h4>
          <ul>
            <li>הכרת אברי הגוף העיקריים</li>
            <li>משחקי למידה אינטראקטיביים</li>
            <li>סיפורים מאוירים על גוף האדם</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="close-modal">סגור</button>
        <a href="courses/3-6/3-6.html" class="modal-action-btn">מעבר למסלול</a>
      </div>
    `,
    "6-10": `
      <div class="modal-header">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
      </div>
      <div class="modal-body">
        <h3>תוכנית הלימודים</h3>
        <div class="curriculum-section">
          <h4>1. יסודות הביולוגיה 🔬</h4>
          <ul>
            <li>מבנה התא</li>
            <li>ניסויים מדעיים פשוטים</li>
            <li>עולם המיקרוסקופ</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="close-modal">סגור</button>
        <a href="courses/6-10/6-10.html" class="modal-action-btn">מעבר למסלול</a>
      </div>
    `,
    "10-14": `
      <div class="modal-header">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
      </div>
      <div class="modal-body">
        <h3>תוכנית הלימודים</h3>
        <div class="curriculum-section">
          <h4>1. ביולוגיה מתקדמת 🧬</h4>
          <ul>
            <li>מערכות בגוף האדם</li>
            <li>גנטיקה בסיסית</li>
            <li>אבולוציה</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="close-modal">סגור</button>
        <a href="courses/10-14/10-14.html" class="modal-action-btn">מעבר למסלול</a>
      </div>
    `,
    "14-18": `
      <div class="modal-header">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
      </div>
      <div class="modal-body">
        <h3>תוכנית הלימודים</h3>
        <div class="curriculum-section">
          <h4>1. מדעי החיים המתקדמים 🔬</h4>
          <ul>
            <li>ביוכימיה</li>
            <li>מיקרוביולוגיה</li>
            <li>פיזיולוגיה</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="close-modal">סגור</button>
        <a href="courses/14-18/14-18.html" class="modal-action-btn">מעבר למסלול</a>
      </div>
    `,
    "18+": `
      <div class="modal-header">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
      </div>
      <div class="modal-body">
        <h3>תוכנית הלימודים</h3>
        <div class="curriculum-section">
          <h4>1. רפואה קלינית 🏥</h4>
          <ul>
            <li>אנטומיה מתקדמת</li>
            <li>פתולוגיה</li>
            <li>פרמקולוגיה</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="close-modal">סגור</button>
        <a href="courses/18+/18+.html" class="modal-action-btn">מעבר למסלול</a>
      </div>
    `,
    "18++": `
      <div class="modal-header">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
      </div>
      <div class="modal-body">
        <h3>תוכנית הלימודים</h3>
        <div class="curriculum-section">
          <h4>1. רפואה משלימה 🌱</h4>
          <ul>
            <li>צמחי מרפא</li>
            <li>רפואה סינית</li>
            <li>נטורופתיה</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="close-modal">סגור</button>
        <a href="courses/18++/18++.html" class="modal-action-btn">מעבר למסלול</a>
      </div>
    `,
    "18+++": `
      <div class="modal-header">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
      </div>
      <div class="modal-body">
        <h3>תוכנית הלימודים</h3>
        <div class="curriculum-section">
          <h4>1. בריאות הנפש 🧠</h4>
          <ul>
            <li>פסיכולוגיה בסיסית</li>
            <li>טכניקות הרפיה</li>
            <li>מיינדפולנס</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="close-modal">סגור</button>
        <a href="courses/18+++/18+++.html" class="modal-action-btn">מעבר למסלול</a>
      </div>
    `,
  };

  return (
    modalTemplates[course.ageRange] ||
    `
    <div class="modal-header">
      <h2>${course.title}</h2>
      <p>${course.description}</p>
    </div>
    <div class="modal-body">
      <h3>נושאי לימוד:</h3>
      <ul>
        ${course.topics.map((topic) => `<li>${topic}</li>`).join("")}
      </ul>
    </div>
    <div class="modal-footer">
      <button class="close-modal">סגור</button>
      <a href="courses/${
        course.ageRange
      }/index.html" class="modal-action-btn">מעבר למסלול</a>
    </div>
  `
  );
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeCourses);
