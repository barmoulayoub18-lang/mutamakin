import { Zap, Globe, BookOpen, Video, FileText, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 px-6 text-center bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

          {/* LOGO */}
          <div className="relative w-24 h-24">
            <Image
              src="/logo-mutamakin.png"
              alt="Mutamakin"
              fill
              sizes="96px"
              className="object-contain drop-shadow-sm"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            منصة <span className="text-sky-600">متمكن</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            منصة تعليمية تفاعلية لتطوير مهاراتك اللغوية بأسلوب حديث،
            بسيط، واحترافي يركز على التطبيق العملي.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/language/technical"
              className="px-7 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold transition shadow-md"
            >
              ابدأ التعلم
            </Link>

            <Link
              href="/language/fusha"
              className="px-7 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-white transition"
            >
              استكشف المسارات
            </Link>
          </div>

        </div>
      </section>

      {/* ================= LANGUAGES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <Card
          href="/language/technical"
          title="اللغة التقنية"
          desc="تعلم المصطلحات التقنية وطور مهاراتك المهنية بشكل عملي"
          icon={<Zap size={30} />}
        />

        <Card
          href="/language/fusha"
          title="اللغة الفصيحة"
          desc="طور لغتك العربية بأسلوب حديث وتفاعلي يعزز مهاراتك"
          icon={<Globe size={30} />}
        />

      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

          <Feature icon={<Video size={20} />} title="فيديوهات" desc="شرح مرئي واضح" />
          <Feature icon={<FileText size={20} />} title="مقالات" desc="محتوى غني" />
          <Feature icon={<BookOpen size={20} />} title="تمارين" desc="تطبيق عملي" />
          <Feature icon={<Users size={20} />} title="اجتماعات" desc="جلسات مباشرة" />

        </div>
      </section>

    </div>
  );
}

/* ================= CARD ================= */
function Card({ title, desc, icon, href }: any) {
  return (
    <Link
      href={href}
      className="group bg-white border border-slate-200 rounded-2xl p-10 flex flex-col items-start text-right shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* ICON */}
      <div className="mb-6 p-4 bg-sky-100 text-sky-600 rounded-xl group-hover:scale-110 transition">
        {icon}
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        {title}
      </h2>

      {/* DESC */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {desc}
      </p>
    </Link>
  );
}

/* ================= FEATURE ================= */
function Feature({ icon, title, desc }: any) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:shadow-md transition">
      
      <div className="mb-3 inline-flex p-2 rounded-lg bg-white text-sky-600 shadow-sm">
        {icon}
      </div>

      <h4 className="text-sm font-semibold text-slate-900 mb-1">
        {title}
      </h4>

      <p className="text-xs text-slate-500">
        {desc}
      </p>
    </div>
  );
}