import { CheckCircle2, Building2, Users, Award } from "lucide-react";

const highlights = [
  "Основана в 2019 году в г. Москва",
  "Более 1 200 корпоративных клиентов",
  "Обработано свыше 10 млрд руб. платежей",
  "Лицензия ЦБ РФ на осуществление переводов",
];

const stats = [
  { icon: <Building2 size={24} />, value: "5 лет", label: "на рынке" },
  { icon: <Users size={24} />, value: "1 200+", label: "клиентов" },
  { icon: <Award size={24} />, value: "99.98%", label: "доступность" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              О компании
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Мы делаем платежи простыми и безопасными
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              ООО «НовоТех» — российская финтех-компания, специализирующаяся на
              разработке и сопровождении платёжной инфраструктуры для
              интернет-торговли и сервисов.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Мы строим технологии, которые позволяют бизнесу принимать платежи
              быстро, безопасно и без лишних сложностей. Наша платформа
              соответствует требованиям ФЗ-161, ФЗ-152 и международному
              стандарту PCI DSS, что гарантирует защиту данных ваших клиентов.
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
              <h3 className="font-bold text-slate-900 mb-3">Наша миссия</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Сделать цифровые платежи доступными для каждого бизнеса в России
                — от стартапа до крупной корпорации. Мы верим, что надёжная
                платёжная инфраструктура — это фундамент цифровой экономики.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-blue-600 rounded-xl p-5 text-white flex flex-col items-center text-center"
                >
                  <div className="mb-2 opacity-80">{s.icon}</div>
                  <p className="text-xl font-bold leading-tight">{s.value}</p>
                  <p className="text-xs text-blue-200 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Юридический адрес:</strong> 125009, г. Москва, ул.
                Тверская, д. 1, офис 100
                <br />
                <strong>ИНН:</strong> 7707012345 &nbsp;|&nbsp;
                <strong>ОГРН:</strong> 1197746000001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
