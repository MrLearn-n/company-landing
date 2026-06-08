import { CreditCard, Lock, Code2, BarChart3, Globe, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: <CreditCard size={28} />,
    title: "Приём онлайн-платежей",
    description:
      "Банковские карты (Visa, МИР, Mastercard), электронные кошельки, СБП — все способы оплаты в одном решении.",
  },
  {
    icon: <Lock size={28} />,
    title: "Защита данных",
    description:
      "Токенизация карт, 3D Secure 2.0, шифрование TLS 1.3. Соответствие PCI DSS уровня 1 и ФЗ-152.",
  },
  {
    icon: <Code2 size={28} />,
    title: "API интеграция",
    description:
      "REST API с подробной документацией. Готовые SDK для PHP, Python, Node.js, Java. Поддержка Webhook-уведомлений.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Аналитика и отчёты",
    description:
      "Дашборд реального времени, выгрузка отчётов в Excel/CSV, детализация по каждой транзакции.",
  },
  {
    icon: <Globe size={28} />,
    title: "Международные платежи",
    description:
      "Поддержка 12 валют, автоматическая конвертация, выплаты на зарубежные счета.",
  },
  {
    icon: <HeadphonesIcon size={28} />,
    title: "Поддержка 24/7",
    description:
      "Круглосуточная техническая поддержка по телефону, почте и в чате. SLA до 1 часа для критических инцидентов.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Что мы предлагаем
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Полный спектр платёжных услуг
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Всё необходимое для запуска, масштабирования и защиты ваших
            платёжных потоков — в одном месте.
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
