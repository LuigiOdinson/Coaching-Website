export const podcasts = [
  {
    id: 3,
    type: "podcast",
    isDone: true,
    title: "پادکست رشد و توسعه فردی",
    description:
      "گفت‌وگوهایی درباره رشد فردی، ذهنیت، عادت‌ها و ساختن آینده‌ای بهتر.",
    price: 0,
    host: "الکس مورگان",
    image: "/images/podcast.jpg",
    episodesCount: 12,

    episodes: [
      {
        id: 1,
        episodeNumber: 1,
        title: "چگونه عادت‌های بهتری بسازیم؟",
        description:
          "گفت‌وگویی درباره ایجاد عادت‌های پایدار و تبدیل آن‌ها به بخشی از زندگی روزمره.",
        durationMins: 42,
        publishedAt: "2026-09-10"
      },
      {
        id: 2,
        episodeNumber: 2,
        title: "اهمیت ذهنیت در موفقیت",
        description:
          "بررسی نقش ذهنیت در نحوه برخورد ما با چالش‌ها و شکست‌ها.",
        durationMins: 38,
        publishedAt: "2026-09-12"
      },
      {
        id: 3,
        episodeNumber: 3,
        title: "چگونه اهداف بهتری تعیین کنیم؟",
        description:
          "درباره تعیین اهداف مشخص، واقع‌بینانه و قابل پیگیری صحبت می‌کنیم.",
        durationMins: 45,
        publishedAt: "2026-09-14"
      }
    ]
  },

  {
    id: 6,
    type: "podcast",
    isDone: false,
    title: "ذهنیت مهم است",
    description:
      "گفت‌وگوهایی درباره ذهنیت، انگیزه، اعتمادبه‌نفس و رشد فردی.",
    price: 0,
    host: "الکس مورگان",
    image: "/images/mindset-podcast.jpg",
    episodesCount: 6,

    episodes: [
      {
        id: 1,
        episodeNumber: 1,
        title: "ذهنیت رشد چیست؟",
        description:
          "آشنایی با مفهوم ذهنیت رشد و تأثیر آن بر یادگیری و پیشرفت.",
        durationMins: 35,
        publishedAt: "2026-09-15"
      },
      {
        id: 2,
        episodeNumber: 2,
        title: "مقابله با ترس از شکست",
        description:
          "چگونه می‌توانیم نگاه متفاوتی نسبت به شکست و اشتباه داشته باشیم.",
        durationMins: 41,
        publishedAt: "2026-09-16"
      }
    ]
  }
];