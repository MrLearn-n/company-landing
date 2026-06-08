"use client";

import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const contacts = [
  {
    icon: <MapPin size={20} />,
    label: "Адрес",
    value: "125009, г. Москва, ул. Тверская, д. 1, офис 100",
  },
  {
    icon: <Phone size={20} />,
    label: "Телефон",
    value: "+7 (495) 000-00-00",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "info@novotech.ru",
  },
  {
    icon: <Clock size={20} />,
    label: "Режим работы",
    value: "Пн–Пт: 9:00–18:00 (МСК). Техподдержка — 24/7",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              Контакты
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10">
              Готовы ответить на все ваши вопросы о тарифах, интеграции и
              возможностях платформы. Наши специалисты работают для вас.
            </p>

            <ul className="space-y-6">
              {contacts.map((c) => (
                <li key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-slate-200 text-sm">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} className="text-blue-400" />
              <h3 className="font-bold text-lg">Напишите нам</h3>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="ivan@company.ru"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                  Сообщение
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Расскажите о вашей задаче..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
