import { CreditCard, ShieldCheck, SplitSquareHorizontal, Settings2, Code2, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <CreditCard size={28} />,
    title: "Платёжный модуль для сайта",
    description:
      "Готовое решение для подключения оплаты на сайт, платформу, личный кабинет или онлайн-сервис.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Безопасная сделка",
    description:
      "Сценарий, при котором оплата проходит по заранее заданной логике: стороны понимают условия сделки, этапы выполнения и момент завершения.",
  },
  {
    icon: <SplitSquareHorizontal size={28} />,
    title: "Разделение платежей",
    description:
      "Сумму можно распределять между несколькими участниками сделки: платформой, исполнителем, партнёром или другими сторонами.",
  },
  {
    icon: <Settings2 size={28} />,
    title: "Гибкая логика распределения",
    description:
      "Настраивайте правила деления платежа под вашу бизнес-модель: фиксированные суммы, проценты или комбинированные сценарии.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Интеграция через API",
    description:
      "Модуль можно встроить в существующий сайт или платформу и связать с внутренней системой заказов, пользователей и сделок.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Контроль операций",
    description:
      "Отслеживайте статусы оплат, сделок и распределений в удобном интерфейсе или передавайте события в вашу систему.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Возможности
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Всё необходимое для приёма оплат и управления сделками
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Модуль помогает принимать оплату на сайте, запускать безопасную
            сделку, разделять платежи между участниками и передавать данные в
            вашу систему.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
