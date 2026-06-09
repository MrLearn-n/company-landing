import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import PaymentPageForm from "@/components/PaymentPageForm";

export const metadata: Metadata = {
  title: "Безопасная оплата услуги - НовоТех",
  description:
    "Защищённая страница оплаты для клиентов компаний, использующих платёжный модуль НовоТех.",
};

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Н</span>
            </div>
            <span className="text-xl font-bold text-slate-900">НовоТех</span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft size={15} />
            Вернуться на главную
          </a>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Безопасная оплата услуги
            </h1>
            <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
              Заполните данные платежа и подтвердите оплату. Если у вас возникли
              вопросы по услуге, обратитесь к компании, которая направила вам
              ссылку на оплату.
            </p>
          </div>

          <PaymentPageForm />
        </div>
      </main>

      <footer className="py-6 border-t border-slate-200 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} ИП Кузовлева Алена Александровна · ИНН 771683589962
      </footer>
    </div>
  );
}
