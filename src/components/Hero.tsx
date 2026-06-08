import { ArrowRight, ShieldCheck, SplitSquareHorizontal, Puzzle } from "lucide-react";

const cards = [
  {
    icon: <ShieldCheck size={20} />,
    label: "Безопасная сделка",
    desc: "Оплата проходит по понятному сценарию с защитой интересов сторон",
  },
  {
    icon: <SplitSquareHorizontal size={20} />,
    label: "Разделение платежей",
    desc: "Можно распределять оплату между 2–4 участниками",
  },
  {
    icon: <Puzzle size={20} />,
    label: "Готовый модуль",
    desc: "Интеграция в сайт, сервис или платформу",
  },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex flex-wrap items-center gap-2 bg-blue-800/50 border border-blue-700/50 rounded-full px-4 py-1.5 text-xs sm:text-sm text-blue-200 mb-6">
            <Puzzle size={14} />
            <span>Платёжный модуль для сайтов и платформ</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Платёжный модуль для сайта с{" "}
            <span className="text-blue-400">безопасной сделкой</span> и разделением платежей
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
            НовоТех — это платёжный модуль для сайтов и платформ, которым нужно
            не просто принимать оплату, а управлять логикой сделки. Решение
            помогает подключить оплату, настроить сценарий безопасной сделки и
            распределять платёж между несколькими участниками: платформой,
            исполнителем, партнёром или другими сторонами.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#payment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors"
            >
              Подключить модуль
              <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 hover:border-slate-400 text-slate-200 font-semibold transition-colors"
            >
              Посмотреть возможности
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.label}
              className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-blue-300 mb-3">
                {c.icon}
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {c.label}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
