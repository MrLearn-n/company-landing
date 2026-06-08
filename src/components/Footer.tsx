const navLinks = [
  { label: "О решении", href: "#about" },
  { label: "Возможности", href: "#services" },
  { label: "Как работает", href: "#services" },
  { label: "Подключение", href: "#payment" },
  { label: "Контакты", href: "#contacts" },
];

const docLinks = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Пользовательское соглашение", href: "#" },
  { label: "Согласие на обработку персональных данных", href: "#" },
  { label: "Оферта", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-800">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">Н</span>
              </div>
              <span className="text-white font-bold text-lg">НовоТех</span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed">
              Платёжный модуль для сайтов и платформ. Безопасная сделка,
              разделение платежей, API интеграция.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Меню
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Документы
            </p>
            <ul className="space-y-2.5">
              {docLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors leading-tight block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Связь с компанией
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#contacts"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Написать нам
                </a>
              </li>
              <li>
                <a
                  href="#payment"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Оставить заявку
                </a>
              </li>
              <li>
                <a
                  href="/payment"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Страница оплаты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {year} ООО «НовоТех»
          </p>
          <p className="text-xs text-slate-700 text-center sm:text-right leading-relaxed">
            ИП Кузовлева Алена Александровна · ИНН 771683589962 · ОГРН 1027700067328
          </p>
        </div>
      </div>
    </footer>
  );
}
