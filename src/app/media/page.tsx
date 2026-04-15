import { getMedia } from "@/services/mediaService";
import {
  PlayCircle,
  ChevronLeft,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default async function MediaPage({
  searchParams,
}: {
  searchParams: {
    type?: "technical" | "fusha";
    filter?: "video" | "podcast";
  };
}) {
  const language = searchParams.type || "technical";
  const filter = searchParams.filter;

  const mediaItems = await getMedia({
    language,
    type: filter,
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <header className="py-12 border-b border-slate-100 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold">
              المكتبة السماعية
            </h1>

            <p className="text-sm text-slate-500 mt-2">
              محتوى {language === "technical" ? "تقني" : "فصيح"}
            </p>
          </div>

          {/* FILTER */}
          <div className="flex gap-2 bg-slate-50 p-1 rounded-md border border-slate-100">
            <FilterLink
              label="الكل"
              active={!filter}
              href={`/media?type=${language}`}
            />
            <FilterLink
              label="فيديو"
              active={filter === "video"}
              href={`/media?type=${language}&filter=video`}
            />
            <FilterLink
              label="بودكاست"
              active={filter === "podcast"}
              href={`/media?type=${language}&filter=podcast`}
            />
          </div>
        </header>

        {/* CONTENT */}
        {mediaItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mediaItems.map((item: any) => (
              <div
                key={item.id}
                className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-sm transition"
              >
                {/* IMAGE */}
                <div className="aspect-video bg-slate-50 relative">
                  {item.thumbnail_url ? (
                    <img
                      src={item.thumbnail_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <PlayCircle className="text-slate-300" size={40} />
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div className="p-5 space-y-3">
                  <span className="text-[10px] text-sky-600 font-bold uppercase">
                    {item.modules?.categories?.name || "عام"}
                  </span>

                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <Link
                    href={`/media/${item.id}`}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-sky-600 transition"
                  >
                    عرض المحتوى
                    <ChevronLeft size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY */
          <div className="py-20 text-center border border-dashed border-slate-100 rounded-lg">
            <Search size={40} className="mx-auto text-slate-200 mb-3" />
            <p className="text-slate-400 text-sm">
              لا يوجد محتوى حالياً
            </p>
          </div>
        )}

        {/* BACK */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-700"
          >
            <ArrowRight size={14} />
            العودة للرئيسية
          </Link>
        </div>

      </div>
    </div>
  );
}

/* FILTER BUTTON */
function FilterLink({
  label,
  active,
  href,
}: {
  label: string;
  active: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-xs font-semibold rounded-md transition ${
        active
          ? "bg-white border border-slate-200 text-sky-600"
          : "text-slate-400 hover:text-slate-600"
      }`}
    >
      {label}
    </Link>
  );
}