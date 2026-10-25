export const courses = [
  {
    id: 2,
    type: "course",
    inProduction: true,
    title: "دوره جامع رهبری",
    description:
      "در این دوره با اصول رهبری مؤثر آشنا می‌شوید و مهارت‌های لازم برای هدایت بهتر یک تیم را یاد می‌گیرید.",
    price: 340000,
    image: "../../../public/images/course-picture.jfif",
    durationMins: 480,
    lessonsCount: 24,

    lessons: [
      {
        id: 1,
        title: "مقدمه‌ای بر رهبری",
        description:
          "آشنایی با مفاهیم پایه رهبری و تفاوت میان مدیر و رهبر.",
        durationMins: 18,
        publishedAt: "2026-09-10",
      },
      {
        id: 2,
        title: "شناخت سبک‌های رهبری",
        description:
          "بررسی سبک‌های مختلف رهبری و زمان مناسب استفاده از هرکدام.",
        durationMins: 32,
        publishedAt: "2026-09-10",
      },
      {
        id: 3,
        title: "مهارت‌های ارتباطی رهبران",
        description:
          "چگونه بهتر گوش کنیم، بازخورد بدهیم و با اعضای تیم ارتباط مؤثرتری داشته باشیم.",
        durationMins: 27,
        publishedAt: "",
      },
      {
        id: 4,
        title: "تصمیم‌گیری مؤثر",
        description:
          "روش‌هایی برای گرفتن تصمیم‌های بهتر در شرایط پیچیده و پرفشار.",
        durationMins: 35,
        publishedAt: "",
      }
    ],

    feedbacks: [
      {
        id: 1,
        userId: 101,
        firstName: "Sara",
        lastName: "M",
        feedbackText:
          "این دوره واقعاً دید من نسبت به رهبری تیم رو تغییر داد. مخصوصاً بخش سبک‌های رهبری خیلی کاربردی بود.",
        stars: 3
      },
      {
        id: 2,
        userId: 107,
        firstName: "Ali",
        lastName: "R",
        feedbackText:
          "محتوای دوره خوب بود، ولی دوست داشتم مثال‌های عملی بیشتری در بخش تصمیم‌گیری وجود داشت.",
        stars: 4
      },
      {
        id: 3,
        userId: 108,
        firstName: "Niloofar",
        lastName: "K",
        feedbackText:
          "بهترین دوره‌ای که تا حالا در زمینه رهبری گذروندم. پیشنهاد می‌کنم به همه‌ی مدیرهای تیم.",
        stars: 5
      }
    ]
  },

  {
    id: 5,
    type: "course",
    inProduction: false,
    title: "ساختن عادت‌های بهتر",
    description:
      "دوره‌ای کاربردی برای شناخت عادت‌ها و ایجاد تغییرات پایدار در زندگی روزمره.",
    price: 120000,
    image: "../../../public/images/course-picture.jifif",
    durationMins: 300,
    lessonsCount: 16,

    lessons: [
      {
        id: 1,
        title: "عادت‌ها چگونه شکل می‌گیرند؟",
        description:
          "بررسی نحوه شکل‌گیری عادت‌ها و عواملی که باعث تکرار رفتارها می‌شوند.",
        durationMins: 22,
        publishedAt: "2026-09-12",
      },
      {
        id: 2,
        title: "شناسایی عادت‌های نامناسب",
        description:
          "چگونه عادت‌هایی را که مانع پیشرفت ما می‌شوند شناسایی کنیم.",
        durationMins: 25,
        publishedAt: "2026-09-12",
      },
      {
        id: 3,
        title: "ساختن عادت‌های جدید",
        description:
          "روش‌های عملی برای ایجاد عادت‌های جدید و حفظ آن‌ها در طول زمان.",
        durationMins: 31,
        publishedAt: "2026-09-13",
      }
    ],

    feedbacks: [
      {
        id: 1,
        userId: 109,
        firstName: "Reza",
        lastName: "T",
        feedbackText:
          "دوره‌ی خیلی خوبی بود برای شروع. تونستم بعد از مدت‌ها بالاخره عادت مطالعه‌ی روزانه رو بسازم.",
        stars: 5
      },
      {
        id: 2,
        userId: 110,
        firstName: "Mina",
        lastName: "S",
        feedbackText:
          "محتوا مختصر و مفید بود، اما بعضی بخش‌ها می‌تونست عمیق‌تر باشه.",
        stars: 3
      }
    ]
  }
];