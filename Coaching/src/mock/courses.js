export const courses = [
  {
    id: 2,
    type: "course",
    isDone: true,
    title: "دوره جامع رهبری",
    description:
      "در این دوره با اصول رهبری مؤثر آشنا می‌شوید و مهارت‌های لازم برای هدایت بهتر یک تیم را یاد می‌گیرید.",
    price: 79,
    image: "/images/leadership.jpg",
    durationMins: 480,
    lessonsCount: 24,

    lessons: [
      {
        id: 1,
        title: "مقدمه‌ای بر رهبری",
        description:
          "آشنایی با مفاهیم پایه رهبری و تفاوت میان مدیر و رهبر.",
        durationMins: 18,
        publishedAt: "2026-09-10"
      },
      {
        id: 2,
        title: "شناخت سبک‌های رهبری",
        description:
          "بررسی سبک‌های مختلف رهبری و زمان مناسب استفاده از هرکدام.",
        durationMins: 32,
        publishedAt: "2026-09-10"
      },
      {
        id: 3,
        title: "مهارت‌های ارتباطی رهبران",
        description:
          "چگونه بهتر گوش کنیم، بازخورد بدهیم و با اعضای تیم ارتباط مؤثرتری داشته باشیم.",
        durationMins: 27,
        publishedAt: "2026-09-11"
      },
      {
        id: 4,
        title: "تصمیم‌گیری مؤثر",
        description:
          "روش‌هایی برای گرفتن تصمیم‌های بهتر در شرایط پیچیده و پرفشار.",
        durationMins: 35,
        publishedAt: "2026-09-11"
      }
    ]
  },

  {
    id: 5,
    type: "course",
    isDone: false,
    title: "ساختن عادت‌های بهتر",
    description:
      "دوره‌ای کاربردی برای شناخت عادت‌ها و ایجاد تغییرات پایدار در زندگی روزمره.",
    price: 59,
    image: "/images/habits.jpg",
    durationMins: 300,
    lessonsCount: 16,

    lessons: [
      {
        id: 1,
        title: "عادت‌ها چگونه شکل می‌گیرند؟",
        description:
          "بررسی نحوه شکل‌گیری عادت‌ها و عواملی که باعث تکرار رفتارها می‌شوند.",
        durationMins: 22,
        publishedAt: "2026-09-12"
      },
      {
        id: 2,
        title: "شناسایی عادت‌های نامناسب",
        description:
          "چگونه عادت‌هایی را که مانع پیشرفت ما می‌شوند شناسایی کنیم.",
        durationMins: 25,
        publishedAt: "2026-09-12"
      },
      {
        id: 3,
        title: "ساختن عادت‌های جدید",
        description:
          "روش‌های عملی برای ایجاد عادت‌های جدید و حفظ آن‌ها در طول زمان.",
        durationMins: 31,
        publishedAt: "2026-09-13"
      }
    ]
  }
];