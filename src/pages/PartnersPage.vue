<template>
  <div>
    <HeaderComponent/>

    <main class="partners-page">


      <section class="partners-hero">
        <div class="container">
          <div class="partners-hero__sticker">
            <img src="@/assets/img/partners-sticker.png" alt="Стикер">
          </div>

          <h1 class="main-title partners-hero__title">
            Получайте дополнительную прибыль за счет продажи QRGET
          </h1>

          <div class="partners-hero__description">
            <p>
              Продавайте сервис вместе с вашим основным товаром.
            </p>
          </div>

          <button class="btn partners-hero__btn">
            Стать партнёром
          </button>
        </div>
      </section>

      <section class="our-partners">
        <div class="container">
          <h2 class="our-partners__title second-title">
            Наши потенциальные

            <span class="sticker-title">
                <span>
                    партнёры
                </span>
            </span>
          </h2>

          <div class="our-partners__description">
            <p>
              Программа предназначена для продвижения сервиса и увеличения продаж партнёров.
            </p>
          </div>

          <div class="our-partners__list">
            <div class="our-partners__list-item">
              <h3 class="our-partners__list-item__heading">
                Выгоды от партнёрской программы получат:
              </h3>
            </div>
            <div
                class="our-partners__list-item"
                style="
                        background-image:url('@/assets/img/image_things.png');
                        background-size: 420px 219px;
                        background-position-x: 0;
                        "
            >
              <h3 class="our-partners__list-item__heading">
                Магазины детских вещей
              </h3>
            </div>
            <div
                class="our-partners__list-item"
                style="
                        background-image:url('@/assets/img/image_bags.png');
                        background-size: 294px 214px;
                        background-position-x: 45px;
                        "
            >
              <h3 class="our-partners__list-item__heading">
                Магазины сумок, чемоданов
              </h3>
            </div>
            <div
                class="our-partners__list-item"
                style="
                        background-image:url('@/assets/img/image_card.png');
                        background-size: 326px 206px;
                        background-position-x: 18px;
                        "
            >
              <h3 class="our-partners__list-item__heading">
                Банки
              </h3>
            </div>
            <div
                class="our-partners__list-item"
                style="
                        background-image:url('@/assets/img/image_phone.png');
                        background-size: 297px 231px;
                        background-position-x: 50px;
                        "
            >
              <h3 class="our-partners__list-item__heading">
                Салоны связи и др
              </h3>
            </div>
            <div class="our-partners__list-item">
              <button class="btn our-partners__btn">
                Стать партнёром
              </button>
            </div>

          </div>
        </div>
      </section>

      <section class="partner-program">
        <div class="container">
          <div class="partner-program__top">
            <div class="partner-program__top-left">
              <h2 class="partner-program__title second-title">
                Партнёрская программа QRGET: без рисков и затрат
              </h2>

              <div class="partner-program__description">
                <p>
                  Продавайте основные товары и предлагайте клиентам приобрести полезный сервис для сохранности купленной
                  вещи. Это предоставляет вам возможность получить дополнительную прибыль без затрат на рекламу. Легкая
                  и простая интеграция с Сервисом для продаж.
                </p>
              </div>
            </div>

            <div class="partner-program__top-right">
              <img src="@/assets/img/partner-program-sticker.png" alt="Стикер">
            </div>
          </div>

          <div class="partner-program__bottom">
            <div class="partner-program__bottom-left">
              <h3 class="partner-program__subtitle">
                Выгодные преимущества для партнёров:
              </h3>

              <div class="partner-program__subdescription">
                <p>
                  Вступайте в ряды предпринимателей, выбирающих экологичное расширение бизнеса.
                </p>
              </div>
            </div>

            <div class="partner-program__bottom-right">
              <div class="partner-program__item">
                <svg width="60" height="60" class="svg-ico " role="img">
                  <use xlink:href="@/assets/img/icons/sprite.svg#ic_price"></use>
                </svg>

                Рост продаж без затрат на рекламную кампанию
              </div>
              <div class="partner-program__item">
                <svg width="60" height="60" class="svg-ico " role="img">
                  <use xlink:href="@/assets/img/icons/sprite.svg#ic_rate"></use>
                </svg>

                Дополнительная прибыль без больших вложений
              </div>
              <div class="partner-program__item">
                <svg width="60" height="60" class="svg-ico " role="img">
                  <use xlink:href="@/assets/img/icons/sprite.svg#ic_money"></use>
                </svg>

                Увеличение среднего чека
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="move-program">
        <div class="container">
          <div class="move-program__sticker">
            <img src="@/assets/img/move-program-sticker.png" alt="Стикер">
          </div>

          <h3 class="move-program__title">
            Присоединяйтесь к партнёрской программе, которая поможет увеличивать вашу прибыль
          </h3>

          <div class="move-program__description">
            <p>
              Оставьте контакты, свяжемся с вами в течение 30 минут.
            </p>
          </div>

          <button class="btn move-program__btn">
            Стать партнёром
          </button>
        </div>
      </section>

      <section class="faq faq-partners">
        <div class="container">
          <h2 class="faq__title second-title">
            Вы спрашиваете — мы

            <span class="sticker-title">
                <span>отвечаем</span>
            </span>
          </h2>

          <div class="faq__accordion accordion columns">

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
                Пройдите быструю регистрацию в Личном кабинете. Оплатите подписку на QR-код. Создайте свой уникальный
                дизайн и текстовое сообщение. Ваш QR-код готов.
                Подробная инструкция размещена на сайте в разделе «Инструкции».
                При возникновении вопросов обращайтесь в службу поддержки по e-mail NNNNN@gmail.com.
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
                На наклейке будет написан призыв к действию, который вы составляете лично. По статистике, 67% россиян
                пользуются смартфонами с выходом в интернет. Поэтому вероятность того, что нашедший вашу вещь сможет ее
                вернуть, довольно высока.
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
                Такие случаи исключены. Каждый код считывается и предоставляет ваши контактные данные лицу, нашедшему
                вашу вещь.
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
                В своем Личном кабинете вы сможете изменить текстовое сообщение, которое появляется при сканировании
                вашего кода. Сам код остается без изменений. Также сколько угодно раз можно менять дизайн без
                ограничений.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Какой период действует код?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                QR-код активен по подписке в течение 1 года. Чтобы продлить его действие, необходимо оплатить подписку.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Можно делать дизайнерские QR-коды?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                Да, предоставляем дизайнерские коды, которые вы можете менять сколько угодно раз на свое усмотрение.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Что делать, если я забыл пароль от Личного кабинета?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                Чтобы восстановить пароль, укажите в форме авторизации в Личном кабинете ранее прикрепленный email. На
                почту будет отправлено письмо с новым паролем и ссылкой для перехода на сайт.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Мои персональные данные, указанные в Личном кабинете, не попадут к мошенникам?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                Все данные шифруются специальным кодом и защищены от взлома и доступа.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Насколько длинные сообщения можно писать для QR-кода?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                Вы можете написать сообщение любой длины.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Что можно написать в сообщении для кода?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                Для примера: «Я потерялся. Если вы нашли меня, отсканируйте и свяжитесь с владельцем». Вы можете
                написать любой призыв к действию без ограничений по количеству знаков.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Обязательно указывать все свои данные: имя, соцсети, номер телефона?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                Нет, если вы не укажете свои контакты, то под текстовым сообщением появится кнопка «Написать», при
                нажатии на которую придет сообщение в Личный кабинет или на указанный вами email.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Какие опции для QR-кода доступны в Личном кабинете?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                В Личном кабинете вы можете изменить дизайн и текстовую надпись, отправить на печать, изменить размеры,
                скачать файл для сохранения в PDF/jpeg, посмотреть в режиме «Предпросмотр». Также вы можете видеть
                сообщения от нашедших ваши вещи и воспользоваться чатом со Службой поддержки.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Куда обратиться, если у меня возникли вопросы по использованию кода?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                При возникновении вопросов обращайтесь в Службу клиентской поддержки через Личный кабинет, перейдя в
                раздел «Поддержка», либо через удобный для вас мессенджер: WhatsApp или Телеграм.
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__heading">
                Если у меня несколько кодов, то на каждом будет одинаковый дизайн и текстовое сообщение?

                <div class="ico-wrap">
                  <svg width="24" height="24" class="svg-ico " role="img">
                    <use xlink:href="@/assets/img/icons/sprite.svg#plus"></use>
                  </svg>
                </div>
              </div>

              <div class="accordion__submenu">
                Вы можете выбрать разный дизайн и написать разные сообщения для каждого кода. По умолчанию выводится
                сохраненный дизайн и текст первого QR-кода.
              </div>
            </div>


          </div>
        </div>
      </section>

    </main>

    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {HeaderComponent, FooterComponent}
}
</script>

<style scoped>

</style>
