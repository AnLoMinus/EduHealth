// מידע על טיפולים ורפואות לפי מערכות הגוף
const medicalData = {
  musculoskeletal: {
    title: "טיפולים למערכת השרירים והשלד",
    categories: [
      {
        title: "טיפולים ביתיים",
        items: [
          {
            name: "קומפרסים חמים",
            description: "עוזרים להקלה על כאבי שרירים וכאבי גב",
            instructions: [
              "חממו מגבת במים חמים",
              "הניחו על האזור הכואב למשך 15-20 דקות",
              "חזרו על הפעולה 3-4 פעמים ביום",
            ],
            warnings: ["לא להשתמש על פציעות טריות", "להיזהר מכוויות"],
          },
          {
            name: "מתיחות",
            description: "מסייעות בהקלה על כאבים ושיפור טווח התנועה",
            instructions: [
              "בצעו מתיחות עדינות",
              "החזיקו כל מתיחה 15-30 שניות",
              "חזרו 3-4 פעמים על כל מתיחה",
            ],
            warnings: ["לא למתוח בחוזקה", "להפסיק אם מרגישים כאב חד"],
          },
        ],
      },
      {
        title: "רפואות מהיהדות",
        items: [
          {
            name: "שמן זית",
            source: "תלמוד בבלי, מסכת שבת",
            description: "משמש לעיסוי ולהקלה על כאבי שרירים",
            usage: [
              "עיסוי עדין באזור הכואב",
              "מומלץ לחמם מעט את השמן לפני השימוש",
              "ניתן לשלב עם צמחי מרפא",
            ],
          },
          {
            name: "דבש",
            source: 'רמב"ם, משנה תורה',
            description: "לטיפול בנפיחות ודלקות",
            usage: [
              "מריחה מקומית על האזור הנפוח",
              "ניתן לשלב עם תה צמחים",
              "מומלץ להשתמש בדבש טהור",
            ],
          },
        ],
      },
      {
        title: "טיפולים משלימים",
        items: [
          {
            name: "דיקור סיני",
            benefits: ["הקלה על כאבי שרירים", "שיפור זרימת הדם", "הפחתת דלקות"],
            recommendations: "מומלץ לפנות למטפל מוסמך",
          },
          {
            name: "רפלקסולוגיה",
            benefits: [
              "הרפיית שרירים",
              "שיפור זרימת הדם",
              "איזון מערכת העצבים",
            ],
            recommendations: "מומלץ לקבל טיפול שבועי",
          },
        ],
      },
    ],
  },
  nervous: {
    title: "טיפולים למערכת העצבים",
    categories: [
      {
        title: "טיפולים ביתיים",
        items: [
          {
            name: "תרגילי נשימה",
            description: "מסייעים בהרגעת מערכת העצבים",
            instructions: [
              "שאיפה עמוקה למשך 4 שניות",
              "עצירת נשימה למשך 4 שניות",
              "נשיפה איטית למשך 6 שניות",
              "חזרה על התרגיל 10 פעמים",
            ],
            benefits: ["הפחתת מתח", "שיפור ריכוז", "איזון מערכת העצבים"],
          },
          {
            name: "מדיטציה",
            description: "עוזרת בהרגעת המוח ומערכת העצבים",
            instructions: [
              "מציאת מקום שקט",
              "ישיבה בתנוחה נוחה",
              "התמקדות בנשימה",
              "תרגול למשך 10-15 דקות",
            ],
            benefits: ["הפחתת חרדה", "שיפור שינה", "חיזוק מערכת החיסון"],
          },
        ],
      },
      {
        title: "רפואות מהיהדות",
        items: [
          {
            name: "לימוד תורה",
            source: "פרקי אבות",
            description: "מרגיע את הנפש ומחזק את הרוח",
            benefits: ["הרגעת המחשבות", "חיזוק הביטחון", "שיפור מצב הרוח"],
          },
          {
            name: "תפילה ומדיטציה יהודית",
            source: "ספר התניא",
            description: "מסייעת באיזון הנפש והגוף",
            benefits: ["התחברות פנימית", "הפחתת מתח", "חיזוק האמונה"],
          },
        ],
      },
      {
        title: "טיפולים משלימים",
        items: [
          {
            name: "ארומתרפיה",
            description: "שימוש בשמנים אתריים להרגעת מערכת העצבים",
            recommendations: [
              "לבנדר להרגעה",
              "רוזמרין לריכוז",
              "קמומיל לשינה טובה",
            ],
            usage: ["טיפות בדיפיוזר", "עיסוי עדין", "הוספה לאמבט"],
          },
          {
            name: "מוזיקה תרפיה",
            description: "שימוש במוזיקה להרגעת מערכת העצבים",
            benefits: ["הפחתת מתח", "שיפור מצב רוח", "עזרה בריכוז"],
            recommendations: "האזנה למוזיקה קלאסית או ניגוני נשמה",
          },
        ],
      },
    ],
  },
  sensory: {
    title: "טיפולים למערכות החושים",
    categories: [
      {
        title: "טיפולים ביתיים",
        items: [
          {
            name: "תרגילי עיניים",
            description: "לחיזוק שרירי העיניים והקלה על מאמץ",
            instructions: [
              "גלגול עיניים בעדינות",
              "מיקוד במטרה רחוקה וקרובה לסירוגין",
              "עיסוי עדין סביב העיניים",
            ],
            frequency: "3-4 פעמים ביום",
          },
          {
            name: "תרגילי אוזניים",
            description: "לשיפור השמיעה והקלה על לחץ",
            instructions: [
              "עיסוי עדין של האוזן החיצונית",
              "תרגילי לחץ ושחרור",
              "תנועות לסת להקלה על לחץ",
            ],
            warnings: ["לא להכניס חפצים לאוזן", "להיזהר בעיסוי"],
          },
        ],
      },
      {
        title: "רפואות מהיהדות",
        items: [
          {
            name: "שמן שקדים",
            source: "ספר הרפואות העברי",
            description: "לטיפול בבעיות אוזניים",
            usage: [
              "טפטוף עדין באוזן",
              "עיסוי סביב האוזן",
              "שיוש בשמן חמים מעט",
            ],
          },
          {
            name: "מי מלח",
            source: "רפואה עממית יהודית",
            description: "לשטיפת עיניים והקלה על גירויים",
            preparation: ["מלח ים טהור", "מים מזוקקים", "ערבוב עדין"],
          },
        ],
      },
      {
        title: "טיפולים משלימים",
        items: [
          {
            name: "טיפול בצבעים",
            description: "שימוש בצבעים לאיזון מערכת העצבים והחושים",
            methods: ["חדר צבעוני", "תאורה צבעונית", "ויזואליזציה של צבעים"],
            benefits: ["הרגעה נפשית", "שיפור מצב רוח", "איזון אנרגטי"],
          },
          {
            name: "טיפול בצלילים",
            description: "שימוש בצלילים מרפאים",
            methods: ["קערות טיבטיות", "מוזיקה מרגיעה", "צלילי טבע"],
            benefits: ["הרגעת מערכת העצבים", "שיפור ריכוז", "איזון חושי"],
          },
        ],
      },
    ],
  },
};

// פונקציה לפתיחת המודל
function openMedicalModal(system) {
  const modalContent = document.createElement("div");
  modalContent.className = "medical-modal";

  const data = medicalData[system];

  let html = `
    <div class="modal-header">
      <h2>${data.title}</h2>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-content">
  `;

  data.categories.forEach((category) => {
    html += `
      <div class="category-section">
        <h3>${category.title}</h3>
        <div class="items-grid">
    `;

    category.items.forEach((item) => {
      html += `
        <div class="treatment-card">
          <h4>${item.name}</h4>
          <p>${item.description || ""}</p>
      `;

      if (item.instructions) {
        html += `
          <div class="instructions">
            <h5>הוראות:</h5>
            <ul>
              ${item.instructions.map((inst) => `<li>${inst}</li>`).join("")}
            </ul>
          </div>
        `;
      }

      if (item.benefits) {
        html += `
          <div class="benefits">
            <h5>יתרונות:</h5>
            <ul>
              ${item.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
            </ul>
          </div>
        `;
      }

      if (item.warnings) {
        html += `
          <div class="warnings">
            <h5>אזהרות:</h5>
            <ul>
              ${item.warnings.map((warning) => `<li>${warning}</li>`).join("")}
            </ul>
          </div>
        `;
      }

      html += `</div>`;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `</div>`;
  modalContent.innerHTML = html;

  // הוספת סטיילים למודל
  const styles = document.createElement("style");
  styles.textContent = `
    .medical-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(255, 255, 255, 0.98);
      overflow-y: auto;
      z-index: 1000;
      direction: rtl;
    }
    
    .modal-header {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      background: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      margin-bottom: 30px;
      z-index: 1001;
    }
    
    .modal-content {
      max-width: 100%;
      padding: 0 40px 40px;
      margin: 0 auto;
    }
    
    .close-modal {
      font-size: 30px;
      cursor: pointer;
      padding: 10px;
      position: absolute;
      left: 40px;
      top: 50%;
      transform: translateY(-50%);
    }
    
    .category-section {
      margin: 30px 0;
      padding: 30px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
    
    .category-section h3 {
      font-size: 1.8em;
      color: #2c3e50;
      margin-bottom: 25px;
      padding-bottom: 10px;
      border-bottom: 3px solid #4caf50;
    }
    
    .items-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 25px;
      padding: 20px 0;
    }
    
    .treatment-card {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.08);
      transition: transform 0.2s ease;
    }
    
    .treatment-card:hover {
      transform: translateY(-5px);
    }
    
    .treatment-card h4 {
      color: #2c3e50;
      font-size: 1.4em;
      margin-bottom: 15px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e9ecef;
    }
    
    .treatment-card p {
      color: #34495e;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .instructions, .benefits, .warnings {
      margin-top: 20px;
      padding: 15px;
      border-radius: 8px;
      background: white;
    }
    
    .instructions h5, .benefits h5, .warnings h5 {
      font-size: 1.1em;
      margin-bottom: 10px;
      color: #2c3e50;
    }
    
    .warnings {
      background: #fff5f5;
      border-right: 4px solid #e74c3c;
    }
    
    .benefits {
      background: #f0fff4;
      border-right: 4px solid #4caf50;
    }
    
    .instructions {
      background: #f8f9fa;
      border-right: 4px solid #3498db;
    }
    
    ul {
      padding-right: 20px;
      margin: 10px 0;
    }
    
    li {
      margin: 8px 0;
      line-height: 1.5;
    }
    
    @media (max-width: 1200px) {
      .items-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
      
      .modal-content {
        padding: 0 20px 20px;
      }
    }
    
    @media (max-width: 768px) {
      .items-grid {
        grid-template-columns: 1fr;
      }
      
      .category-section {
        padding: 20px;
        margin: 20px 0;
      }
      
      .modal-header {
        padding: 15px 20px;
      }
      
      .close-modal {
        left: 20px;
      }
    }
  `;

  document.head.appendChild(styles);
  document.body.appendChild(modalContent);

  // סגירת המודל
  const closeBtn = modalContent.querySelector(".close-modal");
  closeBtn.onclick = () => {
    modalContent.remove();
    styles.remove();
  };

  // סגירה בלחיצה מחוץ למודל
  window.onclick = (event) => {
    if (event.target === modalContent) {
      modalContent.remove();
      styles.remove();
    }
  };
}

// הוספת מאזיני לחיצה לכפתורים
document.addEventListener("DOMContentLoaded", () => {
  // הוספת כפתורים לפתיחת המודלים
  const systemButtons = [
    { id: "musculoskeletal", text: "מערכת השרירים והשלד" },
    { id: "nervous", text: "מערכת העצבים" },
    { id: "sensory", text: "מערכות החושים" },
  ];

  systemButtons.forEach((button) => {
    const elements = document.querySelectorAll(`[data-system="${button.id}"]`);
    elements.forEach((element) => {
      element.addEventListener("click", () => openMedicalModal(button.id));
    });
  });
});
