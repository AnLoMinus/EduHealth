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
      "ניסויים ביתיים ותצפיות",
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
                <button class="enroll-button">הרשמה למסלול</button>
            </div>
        </div>
    `;
}

function initializeCourses() {
  const container = document.querySelector(".courses-container");
  container.innerHTML = courses
    .map((course) => createCourseCard(course))
    .join("");

  // Add click event listeners to enrollment buttons
  document.querySelectorAll(".enroll-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const courseTitle = e.target
        .closest(".course-card")
        .querySelector("h3").textContent;
      alert(`נרשמת בהצלחה למסלול: ${courseTitle}`);
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeCourses);
