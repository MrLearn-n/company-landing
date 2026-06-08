"use client";

import { useState, FormEvent } from "react";
import { Lock, CheckCircle2 } from "lucide-react";

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

export default function PaymentPageForm() {
  const [submitted, setSubmitted] = useState(false);
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Платёж отправлен
        </h2>
        <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto">
          Ваша операция принята. Подтверждение будет отправлено на указанный
          email.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-blue-600 hover:underline"
        >
          Выполнить ещё один платёж
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white text-sm font-semibold">
          <Lock size={15} />
          Защищённая форма оплаты
        </div>
        <span className="text-green-400 text-xs flex items-center gap-1">
          <Lock size={11} />
          SSL
        </span>
      </div>

      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="p-6 space-y-7"
      >
        <fieldset className="space-y-4">
          <legend className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            Данные плательщика
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
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
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
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
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="name@example.ru"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </fieldset>

        <fieldset className="space-y-4 border-t border-slate-100 pt-6">
          <legend className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            Данные платежа
          </legend>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Название услуги / номер заказа
            </label>
            <input
              type="text"
              required
              placeholder="Например: Заказ №12345"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Сумма оплаты (₽)
            </label>
            <input
              type="number"
              required
              min="1"
              placeholder="5000"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Комментарий к оплате{" "}
              <span className="text-slate-400 font-normal">(необязательно)</span>
            </label>
            <textarea
              rows={2}
              placeholder="Необязательно"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            />
          </div>
        </fieldset>

        <fieldset className="space-y-4 border-t border-slate-100 pt-6">
          <legend className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            Данные карты
          </legend>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
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
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
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
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
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
        </fieldset>

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
        >
          <Lock size={15} />
          Оплатить
        </button>

        <p className="text-center text-xs text-slate-400 leading-relaxed">
          Нажимая «Оплатить», вы подтверждаете согласие с{" "}
          <a href="#" className="text-blue-500 hover:underline">
            условиями оплаты
          </a>{" "}
          и обработкой персональных данных. Данные банковской карты передаются
          по защищённому каналу и не сохраняются на сайте.
        </p>
      </form>
    </div>
  );
}
