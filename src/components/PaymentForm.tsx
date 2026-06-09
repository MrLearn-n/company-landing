"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";

const projectTypes = [
  "Маркетплейс",
  "Сервисная платформа",
  "Агрегатор",
  "Партнёрский проект",
  "Другое",
];

export default function PaymentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="payment" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Подключение и оплата
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Подключите платёжный модуль или перейдите к оплате
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Если вы хотите подключить наше решение к своему сайту или платформе
            - оставьте заявку. Если вам прислали ссылку на оплату услуги,
            перейдите на защищённую страницу оплаты.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 sm:px-8 py-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">
                Заявка на подключение
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Оставьте контакты, и мы разберём вашу бизнес-модель: как
                проходит сделка, кто участвует в оплате и как нужно
                распределять платежи.
              </p>
            </div>

            {submitted ? (
              <div className="px-4 sm:px-8 py-16 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Заявка принята
                </h4>
                <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                  Мы свяжемся с вами, чтобы уточнить детали проекта и
                  предложить подходящий сценарий подключения.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-4 sm:px-8 py-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.ru"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Сайт или проект
                    </label>
                    <input
                      type="text"
                      placeholder="example.ru"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                    Тип проекта
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">Выберите тип проекта</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                    Как нужно распределять платёж?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Опишите кратко вашу схему"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Оставить заявку
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-xs text-slate-400 leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных
                  данных. Мы свяжемся с вами, чтобы уточнить детали проекта и
                  предложить подходящий сценарий подключения.
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Оплата услуги
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Если вы являетесь клиентом компании, которая использует наше
                  платёжное решение, вы можете перейти на отдельную страницу
                  оплаты.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mt-2">
                  На странице оплаты нужно будет указать данные платежа и
                  подтвердить операцию через защищённую форму.
                </p>
              </div>

              <a
                href="/payment"
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Lock size={15} />
                Перейти к оплате
              </a>

              <div className="border-t border-slate-100 pt-4 space-y-2">
                <p className="text-xs text-slate-400 flex items-start gap-2">
                  <Lock size={12} className="mt-0.5 flex-shrink-0 text-slate-300" />
                  Оплата проходит на отдельной защищённой странице.
                </p>
                <p className="text-xs text-slate-400 flex items-start gap-2">
                  <Lock size={12} className="mt-0.5 flex-shrink-0 text-slate-300" />
                  Данные платежа используются только для проведения операции.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
