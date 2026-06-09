import { CheckCircle2, Building2, Code2, ShieldCheck } from "lucide-react";

const highlights = [
  "Готовый платёжный модуль для сайта или платформы",
  "Сценарий безопасной сделки для защиты сторон",
  "Распределение платежа между несколькими участниками",
  "Гибкая настройка логики под бизнес-модель проекта",
];

const stats = [
  { icon: <Building2 size={24} />, value: "До 4", label: "частей разделение одного платежа" },
  { icon: <Code2 size={24} />, value: "API", label: "для интеграции с сайтом" },
  { icon: <ShieldCheck size={24} />, value: "Безопасная сделка", label: "для платформ и сервисов" },
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              О решении
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Мы упрощаем приём оплат и распределение платежей внутри сделки
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              НовоТех разрабатывает технологическое решение для сайтов, сервисов
              и платформ, которым нужен удобный модуль приёма платежей.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Мы не выступаем платёжным провайдером и не заменяем банк. Наша
              задача - предоставить бизнесу понятный интерфейс, техническую
              интеграцию и гибкую логику работы с оплатами: от приёма платежа до
              сценария безопасной сделки и распределения суммы между несколькими
              участниками.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Решение подходит для платформ, где в одной сделке участвуют
              продавец, исполнитель, сервис, партнёр или несколько сторон
              одновременно.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-blue-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3">Наша задача</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Дать онлайн-проектам удобный инструмент для приёма оплат и
                управления сделками. Мы помогаем бизнесу не просто принять
                платёж, а настроить понятный сценарий: кто платит, за что
                платит, когда сделка считается выполненной и как сумма
                распределяется между участниками.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-blue-600 rounded-xl p-3 sm:p-5 text-white flex flex-col items-center text-center"
                >
                  <div className="mb-1.5 sm:mb-2 opacity-80 hidden sm:block">{s.icon}</div>
                  <p className="text-sm sm:text-base font-bold leading-tight">{s.value}</p>
                  <p className="text-xs text-blue-200 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Юридическая информация:</strong> ИП Кузовлева Алена Александровна
                <br />
                <strong>ИНН:</strong> 771683589962 &nbsp;|&nbsp;
                <strong>ОГРН:</strong> 1027700067328
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
