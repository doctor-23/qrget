<template>
  <div>

    <HeaderComponent/>

    <main class="tariff-page">


      <section class="how-much">
        <div class="container">
          <h1 class="how-much__title main-title">
            Сколько стоит подписка?
          </h1>

          <div class="how-much__wrap">
            <div class="how-much__heading">
              <div class="how-much__heading-title">
                «Открытый доступ»
              </div>

              <div class="how-much__heading-price">
                99руб / 1 год
              </div>
            </div>

            <div class="how-much__description">
              <p>
                Оплачивая подписку, вы получаете:
              </p>
            </div>

            <ul class="how-much__list">
              <li>
                Создание индивидуального динамического QR-кода.
              </li>
              <li>
                Неограниченное сканирование QR-кода.
              </li>
              <li>
                Создание собственного дизайна QR-кода или выбор дизайна, предложенного сервисом QRGET.
              </li>
              <li>
                Создание и изменение в неограниченном количестве содержимого (контента) зашифрованной страницы QR-кода.
              </li>
              <li>
                Большое количество разнообразных дизайнерских рамок для QR-кода, выполненных в классическом и детском вариантах.
              </li>
              <li>
                Получение информации о каждом сканировании QR-кода.
              </li>
              <li>
                Создание и сохранение изображений QR-кода в неограниченном количестве.
              </li>
              <li>
                Возможность получать личные сообщения от лиц, отсканировавших QR-код, через форму обратной связи.
              </li>
              <li>
                Возможность создать и скачать собственный стикерпак с QR-кодом в разных вариантах дизайна и разных размеров.
              </li>
              <li>
                Активный QR-код с ограниченными возможностями даже после окончания подписки. Восстановление всех функций QR-кода после продления подписки.
              </li>
              <li>
                Загрузка QR-кода в разнообразных форматах, таких как png, pdf, tiff, svg.
              </li>
              <li>
                <button class="btn how-much__btn">
                  Заказать QR-код
                </button>
              </li>
            </ul>
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

<style scoped lang="scss">
.how-much {
  padding: 60px 0 140px;

  @include tablet {
    padding: 30px 0 80px;
  }
}

.how-much__title {
  margin-bottom: 50px;
  text-align: center;

  @include mobile {
    margin-bottom: 40px;
  }
}

.how-much__wrap {
  padding: 30px 55px 35px 31px;
  border: 4px dashed var(--purpure);
  border-radius: 30px;

  @include mobile {
    padding: 20px 17.5px 30px;
  }
}

.how-much__heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px 20px;
  margin-bottom: 15px;

  &>* {
    font-size: 26px;
    font-weight: 600;
    color: var(--violet);

    @include mobile {
      font-size: 22px;
    }
  }
}

.how-much__description {
  margin-bottom: 40px;

  &, * {
    font-weight: 600;
  }

  @include mobile {
    margin-bottom: 20px;
  }
}

.how-much__list {
  column-gap: 64px;
  column-count:  2;
  column-width: calc((var(--container) - 94px) / 2 - 32px);
  column-fill: balance;

  @include laptop {
    column-width: calc(((var(--container) - 40px) - 94px) / 2 - 32px);
  }

  @include tablet {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  li {
    display: flex;
    gap: 10px;
    page-break-inside: avoid;
    break-inside: avoid-column;

    &:not(:last-child) {
      margin-bottom: 15px;

      @include tablet {
        margin-bottom: 0;
      }

      &::before {
        content: '';
        flex-shrink: 0;
        width: 15px;
        height: 15px;
        margin-top: 5px;
        background-color: var(--violet);
        border-radius: 50%;
      }
    }

    &:last-child {
      margin-top: 5px;
    }
  }
}

.how-much__btn {
  @include mobile {
    margin: 0 auto;
  }
}

</style>
