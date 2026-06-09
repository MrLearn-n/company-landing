"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export type LegalDocKey = "privacy" | "terms" | "consent" | "offer";

const IP = "ИП Кузовлева Алена Александровна";
const INN = "771683589962";
const OGRN = "1027700067328";
const ADDRESS = "г. Москва, ул. Холмогорская, д. 7, кв. 123";
const EMAIL = "georgykrim@yandex.ru";
const PHONE = "+7 (991) 528 18 49";

const docs: Record<LegalDocKey, { title: string; body: React.ReactNode }> = {
  privacy: {
    title: "Политика конфиденциальности",
    body: (
      <div className="space-y-5 text-sm leading-relaxed text-slate-300">
        <section>
          <h3 className="font-semibold text-white mb-2">1. Общие положения</h3>
          <p>
            Настоящая Политика конфиденциальности (далее - «Политика») описывает
            порядок сбора, хранения и использования персональных данных
            пользователей сайта и сервиса НовоТех, оператором которого является{" "}
            <strong className="text-white">{IP}</strong> (ИНН {INN}, ОГРН{" "}
            {OGRN}), далее - «Оператор».
          </p>
          <p className="mt-2">
            Используя сайт или сервис, вы соглашаетесь с условиями настоящей
            Политики. Если вы не согласны - пожалуйста, прекратите использование
            сервиса.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            2. Какие данные мы собираем
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Имя и фамилия (при регистрации или обращении);</li>
            <li>Адрес электронной почты;</li>
            <li>Номер телефона;</li>
            <li>Платёжные реквизиты (обрабатываются платёжным оператором);</li>
            <li>
              Технические данные: IP-адрес, тип браузера, cookies, данные об
              устройстве.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            3. Цели обработки данных
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Обеспечение работы сервиса и обработки платежей;</li>
            <li>Связь с пользователем по вопросам поддержки;</li>
            <li>Направление уведомлений о транзакциях;</li>
            <li>Выполнение требований законодательства РФ;</li>
            <li>Улучшение качества сервиса.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            4. Передача данных третьим лицам
          </h3>
          <p>
            Персональные данные не продаются и не передаются третьим лицам без
            вашего согласия, за исключением случаев, предусмотренных
            законодательством РФ, а также передачи платёжным операторам,
            необходимой для проведения транзакций.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            5. Хранение и защита данных
          </h3>
          <p>
            Данные хранятся на серверах, расположенных на территории Российской
            Федерации. Оператор принимает организационные и технические меры для
            защиты персональных данных от несанкционированного доступа.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">6. Права пользователя</h3>
          <p>
            Вы вправе запросить доступ к своим данным, их исправление или
            удаление, направив запрос по адресу: <strong className="text-white">{EMAIL}</strong>.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">7. Cookies</h3>
          <p>
            Сайт использует файлы cookies для корректной работы и аналитики. Вы
            можете отключить cookies в настройках браузера, однако это может
            повлиять на функциональность сервиса.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">8. Контакты</h3>
          <p>
            {IP}, {ADDRESS}. Email: {EMAIL}. Тел.: {PHONE}.
          </p>
        </section>
      </div>
    ),
  },

  terms: {
    title: "Пользовательское соглашение",
    body: (
      <div className="space-y-5 text-sm leading-relaxed text-slate-300">
        <section>
          <h3 className="font-semibold text-white mb-2">1. Предмет соглашения</h3>
          <p>
            Настоящее Пользовательское соглашение (далее - «Соглашение»)
            регулирует отношения между{" "}
            <strong className="text-white">{IP}</strong> (ИНН {INN}, ОГРН{" "}
            {OGRN}), далее - «Исполнитель», и физическим или юридическим лицом,
            использующим платёжный модуль НовоТех, далее - «Пользователь».
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            2. Условия использования
          </h3>
          <p>
            Регистрируясь или используя сервис, Пользователь принимает условия
            настоящего Соглашения в полном объёме. Использование сервиса лицами
            младше 18 лет не допускается.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            3. Права и обязанности Пользователя
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Использовать сервис только в законных целях, не нарушая
              законодательство РФ;
            </li>
            <li>
              Не передавать данные для доступа к аккаунту третьим лицам;
            </li>
            <li>
              Своевременно уведомлять Исполнителя о несанкционированном доступе
              к аккаунту;
            </li>
            <li>
              Предоставлять достоверные сведения при регистрации и использовании
              сервиса.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            4. Права и обязанности Исполнителя
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Обеспечивать работу платёжного модуля в соответствии с офертой;</li>
            <li>
              Информировать Пользователя об изменениях в условиях Соглашения;
            </li>
            <li>
              Приостанавливать доступ к сервису при нарушении Пользователем
              условий Соглашения.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            5. Ограничение ответственности
          </h3>
          <p>
            Исполнитель не несёт ответственности за убытки, возникшие вследствие
            неправомерных действий третьих лиц, перебоев в работе платёжных
            систем, а также в случаях форс-мажора.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            6. Изменение соглашения
          </h3>
          <p>
            Исполнитель вправе в одностороннем порядке изменять условия
            Соглашения с уведомлением Пользователя не менее чем за 5 рабочих
            дней. Продолжение использования сервиса после изменений означает
            согласие с ними.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            7. Применимое право
          </h3>
          <p>
            Настоящее Соглашение регулируется законодательством Российской
            Федерации. Все споры разрешаются в суде по месту нахождения
            Исполнителя.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">8. Контакты</h3>
          <p>
            {IP}, {ADDRESS}. Email: {EMAIL}. Тел.: {PHONE}.
          </p>
        </section>
      </div>
    ),
  },

  consent: {
    title: "Согласие на обработку персональных данных",
    body: (
      <div className="space-y-5 text-sm leading-relaxed text-slate-300">
        <p>
          Настоящим я, субъект персональных данных, даю своё согласие{" "}
          <strong className="text-white">{IP}</strong> (ИНН {INN}, ОГРН {OGRN}),
          расположенному по адресу: {ADDRESS} (далее - «Оператор»), на обработку
          моих персональных данных на условиях, изложенных ниже, в соответствии
          с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
        </p>

        <section>
          <h3 className="font-semibold text-white mb-2">
            Перечень персональных данных
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Фамилия, имя, отчество;</li>
            <li>Адрес электронной почты;</li>
            <li>Номер телефона;</li>
            <li>Наименование организации (для юридических лиц);</li>
            <li>Платёжные реквизиты (при проведении транзакций).</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">Цели обработки</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Регистрация и идентификация пользователя;</li>
            <li>Обеспечение работы платёжного модуля;</li>
            <li>Обработка платёжных транзакций;</li>
            <li>Информирование об изменениях условий сервиса;</li>
            <li>Исполнение требований законодательства РФ.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">Способы обработки</h3>
          <p>
            Сбор, запись, систематизация, накопление, хранение, уточнение,
            извлечение, использование, передача (предоставление, доступ),
            блокирование, удаление, уничтожение персональных данных.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">Срок действия согласия</h3>
          <p>
            Согласие действует с момента его предоставления и до момента
            достижения целей обработки или отзыва субъектом персональных данных.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">Отзыв согласия</h3>
          <p>
            Вы вправе отозвать настоящее согласие, направив письменное заявление
            на адрес электронной почты:{" "}
            <strong className="text-white">{EMAIL}</strong>. После отзыва
            согласия Оператор прекратит обработку персональных данных и уничтожит
            их в срок, установленный законодательством.
          </p>
        </section>
      </div>
    ),
  },

  offer: {
    title: "Публичная оферта",
    body: (
      <div className="space-y-5 text-sm leading-relaxed text-slate-300">
        <p>
          <strong className="text-white">{IP}</strong> (ИНН {INN}, ОГРН {OGRN}),
          далее - «Исполнитель», публикует настоящую Публичную оферту о
          предоставлении доступа к платёжному модулю НовоТех на следующих
          условиях.
        </p>

        <section>
          <h3 className="font-semibold text-white mb-2">1. Предмет оферты</h3>
          <p>
            Исполнитель предоставляет Заказчику доступ к платёжному модулю
            НовоТех - программному обеспечению для организации безопасных
            расчётов, разделения платежей между участниками транзакций и API
            интеграции на сайтах и платформах Заказчика.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            2. Акцепт оферты
          </h3>
          <p>
            Акцептом настоящей оферты является выполнение одного из следующих
            действий: регистрация в системе, оплата тарифа или начало
            использования сервиса. С момента акцепта договор считается
            заключённым.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            3. Стоимость и порядок оплаты
          </h3>
          <p>
            Стоимость услуг определяется выбранным тарифом, опубликованным на
            сайте. Оплата производится в безналичной форме согласно выставленному
            счёту или автоматически в соответствии с условиями тарифа. НДС не
            облагается в связи с применением упрощённой системы налогообложения.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            4. Обязанности Исполнителя
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Обеспечивать работоспособность платёжного модуля 24/7, за
              исключением плановых технических работ;
            </li>
            <li>Информировать о плановых работах не менее чем за 24 часа;</li>
            <li>Обеспечивать конфиденциальность платёжных данных;</li>
            <li>Предоставлять техническую поддержку по запросу Заказчика.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            5. Обязанности Заказчика
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Своевременно производить оплату услуг;</li>
            <li>
              Использовать платёжный модуль только в законных целях и не
              нарушать законодательство РФ о платёжных системах;
            </li>
            <li>
              Не передавать API-ключи и доступы к аккаунту третьим лицам без
              согласия Исполнителя.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            6. Ответственность сторон
          </h3>
          <p>
            Стороны несут ответственность в соответствии с законодательством РФ.
            Совокупная ответственность Исполнителя ограничена суммой, фактически
            уплаченной Заказчиком за период, в котором возникли основания для
            ответственности.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            7. Срок действия и расторжение
          </h3>
          <p>
            Договор вступает в силу с момента акцепта и действует бессрочно.
            Любая из сторон вправе расторгнуть договор, уведомив другую сторону
            за 30 календарных дней.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-white mb-2">
            8. Реквизиты Исполнителя
          </h3>
          <p className="text-white font-medium">{IP}</p>
          <ul className="mt-1 space-y-0.5 text-slate-400">
            <li>ИНН: {INN}</li>
            <li>ОГРН: {OGRN}</li>
            <li>Адрес: {ADDRESS}</li>
            <li>Email: {EMAIL}</li>
            <li>Тел.: {PHONE}</li>
            <li>Расчётный счёт: 40802810602840008963</li>
            <li>Банк: АО «Альфа-Банк», БИК 044525593</li>
            <li>Корр. счёт: 30101810200000000593</li>
          </ul>
        </section>
      </div>
    ),
  },
};

interface LegalModalProps {
  docKey: LegalDocKey | null;
  onClose: () => void;
}

export default function LegalModal({ docKey, onClose }: LegalModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (docKey) {
      document.body.style.overflow = "hidden";
      scrollRef.current?.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [docKey]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!docKey) return null;
  const { title, body } = docs[docKey];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full sm:max-w-2xl bg-slate-900 border border-slate-700 rounded-t-2xl sm:rounded-2xl flex flex-col max-h-[92dvh] sm:max-h-[85vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 flex-shrink-0">
          <h2 className="font-bold text-white text-base leading-tight pr-4">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors flex-shrink-0"
            aria-label="Закрыть"
          >
            <X size={18} />
          </button>
        </div>

        <div ref={scrollRef} className="overflow-y-auto px-6 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {body}
        </div>
      </div>
    </div>
  );
}
