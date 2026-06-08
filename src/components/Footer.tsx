export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">Н</span>
            </div>
            <span className="text-white font-semibold text-sm">НовоТех</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <a href="#about" className="hover:text-white transition-colors">
              О компании
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Услуги
            </a>
            <a href="#payment" className="hover:text-white transition-colors">
              Оплата
            </a>
            <a href="#contacts" className="hover:text-white transition-colors">
              Контакты
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Оферта
            </a>
          </div>

          <p className="text-xs">© {year} ООО «НовоТех»</p>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-600 text-center leading-relaxed">
          ООО «НовоТех» · ИНН 7707012345 · ОГРН 1197746000001 · 125009, г.
          Москва, ул. Тверская, д. 1, офис 100 · Лицензия ЦБ РФ № 0000-000000
        </div>
      </div>
    </footer>
  );
}
