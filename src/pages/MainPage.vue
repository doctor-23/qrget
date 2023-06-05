<template>

  <div>
    <HeaderComponent />

    <main class="main-page">


      <section class="main-hero">
        <div class="container">
          <div class="main-hero__left">
            <h1 class="main-hero__title main-title">
              Всё утерянное обязательно

              <span class="sticker-title">
                    <span>возвращается</span>
                </span>
            </h1>

            <div class="main-hero__description">
              <p>
                Уникальный сервис, который шифрует ваши контактные данные в QR-коде. Разместите наклейку с кодом на любую вещь и получите оберег ваших личных ценностей.
              </p>
            </div>

            <button class="main-hero__btn btn">
              Заказать QR-код
            </button>
          </div>

          <div class="main-hero__right">
            <img src="@/assets/img/image_main.png" alt="Картинка">
          </div>
        </div>
      </section>

      <section class="fast-search">
        <div class="container">
          <h2 class="fast-search__title second-title">
            Наклейка для

            <span class="sticker-title">
                <span>
                    быстрого
                </span>
            </span>

            поиска ваших вещей
          </h2>

          <div class="fast-search__sticker sticker">
            <img src="@/assets/img/sticker.png" alt="Стикер">
          </div>

          <div class="fast-search__description">
            <p>
              В QR-код шифруются контактные данные: номер телефона, электронная почта, соцсети, мессенджеры. При сканировании кода нашедший также увидит текстовое сообщение, где можно пообещать вознаграждение, что в разы увеличит вероятность возврата «потеряшки».
            </p>
          </div>

          <h3 class="fast-search__list-title">
            Возможности уникального сервиса:
          </h3>

          <div class="fast-search__list">

            <div class="fast-search__list-item">
              <div class="fast-search__list-item__heading">
                Личный QR-код
              </div>

              <div class="fast-search__list-item__description">
                Получите свой код всего за 1 минуту после прохождения быстрой регистрации. Если вы приобретаете код через партнерские точки, вы получаете индивидуальную ссылку на уже готовый QR-код. Пройдите по ней и пользуйтесь.
              </div>
            </div>

            <div class="fast-search__list-item">
              <div class="fast-search__list-item__heading">
                Для каждого QR-кода свой дизайн
              </div>

              <div class="fast-search__list-item__description">
                Оставьте предложенный дизайн для всех QR-кодов или сделайте каждую наклейку в оригинальном исполнении.
              </div>
            </div>

            <div class="fast-search__list-item">
              <div class="fast-search__list-item__heading">
                Длительный срок действия
              </div>

              <div class="fast-search__list-item__description">
                QR-код активен в течение 1 года — срока действия подписки, которую можно продлевать.
              </div>
            </div>

            <div class="fast-search__list-item">
              <div class="fast-search__list-item__heading">
                Быстрый способ связаться
              </div>

              <div class="fast-search__list-item__description">
                Нашедший всегда сможет связаться с вами по указанной информации в QR-коде. Даже если в Личном кабинете нет контактов, вам придет сообщение на электронную почту о том, что ваша вещь найдена.
              </div>
            </div>

            <div class="fast-search__list-item">
              <div class="fast-search__list-item__heading">
                Неограниченное количество QR-кодов
              </div>

              <div class="fast-search__list-item__description">
                Получите свой код всего за 1 минуту после прохождения быстрой регистрации. Если вы приобретаете код через партнерские точки, вы получаете индивидуальную ссылку на уже готовый QR-код. Пройдите по ней и пользуйтесь.
              </div>
            </div>

            <div class="fast-search__list-item">
              Наклейку можно поместить на любую вещь: телефон, ключи, паспорт, документы, чемодан, сумку, банковскую карту и др.
              Также наклейку может использовать и ребенок для ранца, пенала, дневника и других личных предметов.

              <div class="fast-search__list-item__image">
                <img src="@/assets/img/image_keys.png" alt="Ключи">
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="benefits">
        <div class="container">
          <h2 class="second-title benefits__title">
            5 важных преимуществ QRGET
          </h2>

          <div class="benefits__description">
            <p>
              Почему клиенты выбирают наш сервис:
            </p>
          </div>

          <div class="benefits__list">

            <div class="benefits__list-item">
              <svg width="60" height="60" class="svg-ico " role="img">
                <use xlink:href="@/assets/img/icons/sprite.svg#ic_infinity"></use>
              </svg>

              <h4 class="benefits__list-item__heading">
                От 0 до бесконечности
              </h4>

              <div class="benefits__list-item__description">
                <p>
                  Неограниченное количество уникальных кодов для всей семьи — регистрируйте столько, сколько вам нужно.
                </p>
              </div>
            </div>

            <div class="benefits__list-item">
              <svg width="60" height="60" class="svg-ico " role="img">
                <use xlink:href="@/assets/img/icons/sprite.svg#ic_differnce"></use>
              </svg>

              <h4 class="benefits__list-item__heading">
                Способ выделиться
              </h4>

              <div class="benefits__list-item__description">
                <p>
                  Каждый QR-код можно сделать разным, например, выбрать для ребенка яркий дизайн или в виде любимого персонажа.
                </p>
              </div>
            </div>

            <div class="benefits__list-item">
              <svg width="60" height="60" class="svg-ico " role="img">
                <use xlink:href="@/assets/img/icons/sprite.svg#ic_message"></use>
              </svg>

              <h4 class="benefits__list-item__heading">
                Единый QR-код — много разных сообщений
              </h4>

              <div class="benefits__list-item__description">
                <p>
                  Текст можно переписывать сколько угодно раз.
                </p>
              </div>
            </div>

            <div class="benefits__list-item">
              <svg width="60" height="60" class="svg-ico " role="img">
                <use xlink:href="@/assets/img/icons/sprite.svg#ic_contact"></use>
              </svg>

              <h4 class="benefits__list-item__heading">
                Без контактных данных
              </h4>

              <div class="benefits__list-item__description">
                <p>
                  Необязательно вводить свои контактные данные. Нашедший сможет связаться с владельцем, написав ему сообщение, которое придет в Личный кабинет и на электронную почту.
                </p>
              </div>
            </div>

            <div class="benefits__list-item">
              <svg width="60" height="60" class="svg-ico " role="img">
                <use xlink:href="@/assets/img/icons/sprite.svg#ic_call"></use>
              </svg>

              <h4 class="benefits__list-item__heading">
                Всегда на связи
              </h4>

              <div class="benefits__list-item__description">
                <p>
                  Даже если подписка на QR-код не действует, нашедший вещь все равно сможет связаться с владельцем, написав ему сообщение.
                </p>
              </div>
            </div>

            <div class="benefits__list-item">
              <button class="btn benefits__btn">
                Заказать QR-код
              </button>
            </div>

          </div>
        </div>
      </section>

      <section class="subscription">
        <div class="container">
          <h2 class="second-title subscription__title">
            Подписка для активации QR-кода
          </h2>

          <div class="subscription__description">
            <p>
              При оплате подписки вы получаете активный QR-код на 12 месяцев. Для продления действия кода необходимо оплатить подписку в Личном кабинете на сайте сервиса. Подписку можно оформить на любое количество QR-кодов.
            </p>
          </div>

          <div class="subscription__price">
            <span class="green">«Открытый доступ»</span><br>
            Стоимость подписки на 1 QR-код: <span class="green">99 руб./12 мес.</span>
          </div>

          <button class="btn subscription__btn">
            Заказать QR-код
          </button>
        </div>
      </section>

      <section class="testimonials testimonials_on-main">
        <div class="container">
          <h2 class="second-title testimonials__title">
            <span class="sticker-title">
                <span>
                    5000+
                </span>
            </span>

            человек <br> уже пользуются QRGET
          </h2>

          <div class="testimonials__description">
            <p>
              Сервис воспитывает новую культуру среди людей и прививает привычку обязательно возвращать найденные вещи. Это отличный способ привлечь внимание к «потеряшке» и быстрее получить свою вещь обратно.
            </p>
          </div>

          <ul class="testimonials__tabs">
            <li class="testimonials__tabs-item active">
              Телефон
            </li>
            <li class="testimonials__tabs-item">
              Документы
            </li>
            <li class="testimonials__tabs-item">
              Сумки, чемоданы
            </li>
            <li class="testimonials__tabs-item">
              Банковская карта
            </li>
            <li class="testimonials__tabs-item">
              Пенал, дневник
            </li>
            <li class="testimonials__tabs-item">
              Ранец
            </li>
          </ul>

          <div class="testimonials__slider-wrap">
            <div class="testimonials__slider">
              <div class="testimonials__item">
                <div class="testimonials__item-row">
                  <div class="testimonials__item-row__heading">
                    Цель:
                  </div>

                  <div class="testimonials__item-row__text">
                    Вернуть смартфон, забытый ребенком в самолете.
                  </div>
                </div>
                <div class="testimonials__item-row">
                  <div class="testimonials__item-row__heading">
                    Решение:
                  </div>

                  <div class="testimonials__item-row__text">
                    Марина обращалась в службу утерянных вещей авиакомпании, в самолете которой забыли телефон ребенка. Операторы приняли жалобу, но не смогли ничем помочь — телефона на борту самолета обнаружено не было. Через 2 дня Марине позвонил мужчина и сообщил, что нашел на сиденье в самолете телефон и хочет вернуть владельцу.
                  </div>

                  <a href="#" class="testimonials__item-more tablet">
                    Читать весь отзыв
                  </a>
                </div>
                <div class="testimonials__item-row">
                  <div class="testimonials__item-row__heading">
                    Результат:
                  </div>

                  <div class="testimonials__item-row__text">
                    Ребенок снова с телефоном, не пришлось тратить деньги на новый.
                  </div>
                </div>
                <div class="testimonials__item-row">
                  <div class="testimonials__item-row__heading">
                    Мнение клиента:
                  </div>

                  <div class="testimonials__item-row__text">
                    «Мой сын так распереживался, что телефон оставили в самолете. У него там и фото были, и игры, в которые он с друзьями по сети играли. В общем, было очень жаль. Но нам повезло — телефон попал в руки доброму человеку и благодаря наклейке он смог нам дозвониться и вернуть пропажу».
                  </div>
                </div>
                <div class="testimonials__item-row">
                  <div class="testimonials__item-row__heading">
                  </div>

                  <div class="testimonials__item-row__text">
                    Марина, 26 лет
                  </div>
                </div>
              </div>
            </div>

            <div class="arrow-container">
              <a href="#" class="slider-arrow arrow-left">
                <svg width="24" height="19" class="svg-ico " role="img">
                  <use xlink:href="@/assets/img/icons/sprite.svg#slider-arrow-left"></use>
                </svg>
              </a>
              <a href="#" class="slider-arrow arrow-right">
                <svg width="24" height="19" class="svg-ico " role="img">
                  <use xlink:href="@/assets/img/icons/sprite.svg#slider-arrow-right"></use>
                </svg>
              </a>

              <ul class="slider-dots">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <a href="#" class="btn testimonials__btn-more">
            Читать все отзывы
          </a>
        </div>
      </section>

      <section class="faq">
        <div class="container">
          <h2 class="faq__title second-title">
            Если есть вопросы — получайте

            <span class="sticker-title">
                <span>ответы</span>
            </span>
          </h2>

          <div class="faq__accordion accordion">

            <div class="accordion__item">
              <div class="accordion__heading">
                Как зарегистрировать QR-код?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                На сайте размещена подробная инструкция, где прописан каждый шаг: как зарегистрироваться в Личном кабинете, прикрепить свои контактные данные, сделать текстовое сообщение для кода и т.д. При возникновении вопросов обращайтесь в Службу поддержки — оставьте сообщение с вопросом либо свяжитесь через Сервис в удобном мессенджере.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Каждый ли сможет разобраться с QR-кодом, чтобы вернуть вещь?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                На наклейке будет написан призыв к действию, который вы составляете лично. По статистике, Большинство россиян пользуются смартфонами с выходом в интернет. Поэтому вероятность того, что нашедший сможет вернуть вашу вещь, довольно высока.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                А если QR-код не будет считываться?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                Такие случаи исключены. Каждый код считывается и предоставляет ваши контактные данные лицу, нашедшему вашу вещь.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                QR-код будет меняться?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                В своем Личном кабинете вы сможете изменить текстовое сообщение, которое появляется при сканировании вашего кода. Также сколько угодно раз можно менять дизайн. Сам код остается без изменений.
              </div>
            </div>


          </div>
        </div>
      </section>

      <section class="offer">
        <div class="container">
          <h2 class="offer__title second-title">
            Закажите свой эксклюзивный QR-код
          </h2>

          <div class="offer__description">
            <p>
              Обретите талисман, который бережно сохранит ваши вещи и поможет их быстро возвращать
            </p>
          </div>

          <button class="btn offer__btn">
            Заказать QR-код
          </button>
        </div>
      </section>

    </main>

    <FooterComponent />
  </div>

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {HeaderComponent, FooterComponent}
}
</script>

<style scoped lang="scss">

</style>
