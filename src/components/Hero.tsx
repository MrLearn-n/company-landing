import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-700/50 rounded-full px-4 py-1.5 text-sm text-blue-200 mb-6">
            <ShieldCheck size={14} />
            <span>Сертифицированная платёжная платформа</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Современная платёжная{" "}
            <span className="text-blue-400">платформа</span> для вашего бизнеса
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
            НовоТех предлагает надёжные и безопасные решения для приёма и
            обработки онлайн-платежей. Простая интеграция, прозрачные тарифы и
            поддержка 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#payment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors"
            >
              Начать сейчас
              <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 hover:border-slate-400 text-slate-200 font-semibold transition-colors"
            >
              Узнать больше
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <ShieldCheck size={20} />, label: "Безопасность", value: "PCI DSS Level 1" },
            { icon: <Zap size={20} />, label: "Скорость обработки", value: "< 1.5 сек" },
            { icon: <ArrowRight size={20} />, label: "Транзакций в день", value: "500 000+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-blue-300 mb-2">
                {stat.icon}
                <span className="text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
