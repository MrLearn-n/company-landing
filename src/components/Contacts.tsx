"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2 } from "lucide-react";

const contacts = [
  {
    icon: <MapPin size={20} />,
    label: "Адрес",
    value: "Г. Москва, ул. Холмогорская, д. 7, кв. 123",
  },
  {
    icon: <Phone size={20} />,
    label: "Телефон",
    value: "+7 (991) 528 18 49",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "georgykrim@yandex.ru",
  },
  {
    icon: <Clock size={20} />,
    label: "Режим работы",
    value: "Пн-Пт: 9:00-18:00",
  },
];

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);

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
              Расскажем, как работает платёжный модуль, какие сценарии
              безопасной сделки можно реализовать и как настроить распределение
              платежей под вашу платформу.
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
                    <p className="text-slate-200 text-sm">
                      {c.value || <span className="text-slate-600 italic">-</span>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} className="text-blue-400" />
              <h3 className="font-bold text-lg">Напишите нам</h3>
            </div>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={24} className="text-green-400" />
                </div>
                <p className="font-semibold text-white mb-1">Сообщение отправлено</p>
                <p className="text-slate-400 text-sm mb-6">
                  Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-blue-400 hover:underline"
                >
                  Отправить ещё одно
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
