<template>
  <section class="personal">
    <div class="container">
      <PersonalNavMenu />

      <div class="personal__content">
<!--        <MyCodesComponent :codes="codes" />-->

        <CodeDesignComponent :codes="codes" />

<!--        <div class="code-content">-->
<!--          <div class="choice-code">-->
<!--            <div class="choice-code__text">-->
<!--              Выберите QR-код-->
<!--            </div>-->

<!--            <div class="choice-code__select select">-->
<!--              <div class="select-title">-->
<!--                <div class="select-title__text">-->
<!--                  Паспорт-->
<!--                </div>-->

<!--                <div class="select-title__ico">-->
<!--                  <svg width="21" height="12" viewBox="0 0 21 12" fill="none"-->
<!--                       xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path d="M19.166 1.5L10.166 10.5L1.16602 1.5" stroke="#242424" stroke-width="2"-->
<!--                          stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                  </svg>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="select-content">-->
<!--                <div class="select-content_wrap">-->

<!--                  <label class="select-content__wrapper">-->
<!--                    <input type="radio" name="codes_title" value="1">-->
<!--                    <span class="select-content__radio">-->
<!--                                            Паспорт-->
<!--                                        </span>-->

<!--                  </label>-->
<!--                  <label class="select-content__wrapper">-->
<!--                    <input type="radio" name="codes_title" value="2">-->
<!--                    <span class="select-content__radio">-->
<!--                                            Багаж-->
<!--                                        </span>-->

<!--                  </label>-->
<!--                  <label class="select-content__wrapper">-->
<!--                    <input type="radio" name="codes_title" value="3">-->
<!--                    <span class="select-content__radio">-->
<!--                                            Водительское удостоверение-->
<!--                                        </span>-->

<!--                  </label>-->
<!--                  <label class="select-content__wrapper">-->
<!--                    <input type="radio" name="codes_title" value="4">-->
<!--                    <span class="select-content__radio">-->
<!--                                            Багаж-->
<!--                                        </span>-->

<!--                  </label>-->
<!--                  <label class="select-content__wrapper">-->
<!--                    <input type="radio" name="codes_title" value="5">-->
<!--                    <span class="select-content__radio">-->
<!--                                            Паспорт-->
<!--                                        </span>-->
<!--                  </label>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
import PersonalNavMenu from "@/components/PersonalNavMenu";
import MyCodesComponent from "@/components/MyCodesComponent";
import CodeDesignComponent from "@/components/CodeDesignComponent";

export default {
  props: ['codes'],
  components: {
    PersonalNavMenu,
    MyCodesComponent,
    CodeDesignComponent
  }
}
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    gap: 80px;
  }

  .personal__content {
    width: calc(100% - 260px);

    @include mobile {
      width: 100%;
    }
  }
</style>
