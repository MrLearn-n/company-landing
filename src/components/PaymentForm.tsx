"use client";

import { useState, FormEvent } from "react";
import { CreditCard, Lock, CheckCircle2 } from "lucide-react";

const services = [
  "Подключение платёжного шлюза",
  "Тарифный план «Старт»",
  "Тарифный план «Бизнес»",
  "Тарифный план «Корпорация»",
  "Техническая поддержка (расширенная)",
  "Индивидуальная интеграция",
];

function formatCard(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

export default function PaymentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="payment" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Заявка принята
            </h3>
            <p className="text-slate-500 mb-8">
              Ваша заявка на оплату отправлена. Наш менеджер свяжется с вами в
              течение 30 минут для подтверждения.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              Оформить ещё одну заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="payment" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Оплата услуг
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Подключитесь к платформе
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Заполните форму для оплаты выбранного тарифа. Данные передаются по
            защищённому каналу TLS 1.3.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <CreditCard size={20} />
                <span className="font-semibold">Безопасная оплата</span>
              </div>
              <div className="flex items-center gap-1.5 text-green-400 text-xs">
                <Lock size={12} />
                <span>SSL защищено</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Имя и фамилия
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="ivan@company.ru"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Услуга
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Сумма (₽)
                  </label>
                  <input
                    type="number"
                    required
                    min="100"
                    placeholder="5000"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">
                  Данные карты
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Номер карты
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      required
                      placeholder="0000 0000 0000 0000"
                      value={card}
                      onChange={(e) => setCard(formatCard(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Срок действия
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        required
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                        CVV / CVC
                      </label>
                      <input
                        type="password"
                        inputMode="numeric"
                        required
                        maxLength={3}
                        placeholder="•••"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Lock size={16} />
                Оплатить безопасно
              </button>

              <p className="text-center text-xs text-slate-400 leading-relaxed">
                Нажимая «Оплатить», вы соглашаетесь с{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  условиями оферты
                </a>
                . Данные карты защищены шифрованием и не хранятся на наших
                серверах.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
