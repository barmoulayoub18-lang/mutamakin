/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // المحرك الرسمي والوحيد المطلوب لـ Tailwind CSS v4.x
    "@tailwindcss/postcss": {},
    
    // إضافة البادئات التلقائية (Vendors) لضمان عمل الحركات (Animations) 
    // والـ Glassmorphism وتأثيرات الـ Blur على جميع المتصفحات (Safari, Chrome, Edge)
    "autoprefixer": {
      flexbox: "no-2009",
      grid: "autoplace"
    },

    // ميزة متقدمة: دمج قواعد الـ CSS المتكررة لتقليل حجم ملف التنسيقات النهائي
    "postcss-import": {},

    // اختيارياً: تفعيل ضغط الملفات الصارم في مرحلة الـ Production لتحسين أداء منصة متمكن
    ...(process.env.NODE_ENV === 'production' 
      ? { 
          "cssnano": {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
              },
            ],
          } 
        } 
      : {}
    ),
  },
};

export default config;