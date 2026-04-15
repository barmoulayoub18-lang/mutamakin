"use client";

import Link from "next/link";
import {
  PlayCircle,
  BookOpen,
  BrainCircuit,
  Video,
} from "lucide-react";

export default function FushaLanguagePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="text-center py-16 border-b border-slate-100">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            اللغة الفصيحة
          </h1>

          <p className="text-slate-500">
            إنغمس في اللغة و مارسها الآن
          </p>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="py-12 flex flex-col items-center gap-4">
        <Link
          href="/dashboard?type=fusha&plan=free"
          className="w-64 text-center bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600"
        >
          تجريب مجاني
        </Link>

        <Link
          href="/subscribe?type=fusha"
          className="w-64 text-center border border-sky-500 text-sky-600 py-3 rounded-lg font-semibold hover:bg-sky-50"
        >
          دفع اشتراك
        </Link>
      </section>

      {/* FEATURES */}
      <section className="py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">

          <FeatureCard
            title="المكتبة السماعية"
            desc="استماع وتفاعل لغوي"
            icon={<PlayCircle />}
            href="/media?type=fusha"
          />

          <FeatureCard
            title="المقالات والكتب"
            desc="نصوص أدبية"
            icon={<BookOpen />}
            href="/resources?type=fusha"
          />

          <FeatureCard
            title="بنك التمارين"
            desc="تحسين المهارات"
            icon={<BrainCircuit />}
            href="/exercises?type=fusha"
          />

          <FeatureCard
            title="الاجتماعات"
            desc="جلسات مباشرة"
            icon={<Video />}
            href="/meetings?type=fusha"
          />

        </div>
      </section>

    </div>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
  href,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-slate-100 rounded-lg p-6 text-center hover:bg-sky-50"
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-white border border-slate-200 text-sky-600 rounded-lg">
        {icon}
      </div>

      <h3 className="font-semibold text-slate-900 mb-1">
        {title}
      </h3>

      <p className="text-xs text-slate-400">
        {desc}
      </p>
    </Link>
  );
}