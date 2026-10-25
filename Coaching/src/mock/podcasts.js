export const podcasts = [
  {
    id: 3,
    type: "podcast",
    inProduction: true,
    title: "پادکست رشد و توسعه فردی",
    description:
      "گفت‌وگوهایی درباره رشد فردی، ذهنیت، عادت‌ها و ساختن آینده‌ای بهتر.",
    price: 430000,
    host: "الکس مورگان",
    image: "../../../public/images/podcast-picture.jfif",
    episodesCount: 12,

    episodes: [
      {
        id: 1,
        title: "چگونه عادت‌های بهتری بسازیم؟",
        description:
          "گفت‌وگویی درباره ایجاد عادت‌های پایدار و تبدیل آن‌ها به بخشی از زندگی روزمره.",
        durationMins: 42,
        publishedAt: "2026-09-10"
      },
      {
        id: 2,
        title: "اهمیت ذهنیت در موفقیت",
        description:
          "بررسی نقش ذهنیت در نحوه برخورد ما با چالش‌ها و شکست‌ها.",
        durationMins: 38,
        publishedAt: "2026-09-12"
      },
      {
        id: 3,
        title: "چگونه اهداف بهتری تعیین کنیم؟",
        description:
          "درباره تعیین اهداف مشخص، واقع‌بینانه و قابل پیگیری صحبت می‌کنیم.",
        durationMins: 45,
        publishedAt: "2026-09-14"
      }
    ],

    feedbacks: [
      {
        id: 1,
        userId: 104,
        firstName: "Hasti",
        lastName: "",
        feedbackText:
          "گفت‌وگوها جذاب و موضوعات بسیار کاربردی بودند منتظر قسمت‌های بعدی هستم",
        stars: 3
      },
      {
        id: 2,
        userId: 111,
        firstName: "Amir",
        lastName: "H",
        feedbackText:
          "قسمت مربوط به تعیین اهداف عالی بود. تونستم برنامه‌ی هفتگی خودم رو بر اساسش بازنویسی کنم.",
        stars: 5
      },
      {
        id: 3,
        userId: 112,
        firstName: "Leila",
        lastName: "N",
        feedbackText:
          "کیفیت صدا و مهمان‌ها خوب بود، ولی بعضی قسمت‌ها یکم طولانی می‌شد.",
        stars: 4
      }
    ]
  },

  {
    id: 6,
    type: "podcast",
    inProduction: false,
    title: "ذهنیت مهم است",
    description:
      "گفت‌وگوهایی درباره ذهنیت، انگیزه، اعتمادبه‌نفس و رشد فردی.",
    price: 500000,
    host: "الکس مورگان",
    image: "../../../public/images/course-picture.jfif.jpg",
    episodesCount: 6,

    episodes: [
      {
        id: 1,
        title: "ذهنیت رشد چیست؟",
        description:
          "آشنایی با مفهوم ذهنیت رشد و تأثیر آن بر یادگیری و پیشرفت.",
        durationMins: 35,
        publishedAt: "2026-09-15"
      },
      {
        id: 2,
        title: "مقابله با ترس از شکست",
        description:
          "چگونه می‌توانیم نگاه متفاوتی نسبت به شکست و اشتباه داشته باشیم.",
        durationMins: 41,
        publishedAt: "2026-09-16"
      }
    ],

    feedbacks: [
      {
        id: 1,
        userId: 113,
        firstName: "Kian",
        lastName: "B",
        feedbackText:
          "قسمت ذهنیت رشد واقعاً بهم کمک کرد بفهمم چرا از چالش‌های جدید دوری می‌کردم.",
        stars: 5
      },
      {
        id: 2,
        userId: 114,
        firstName: "Shirin",
        lastName: "",
        feedbackText:
          "موضوع خوبی رو انتخاب کردید ولی هنوز قسمت‌های کمی منتشر شده. منتظر ادامه‌اش هستم.",
        stars: 4
      }
    ]
  }
];