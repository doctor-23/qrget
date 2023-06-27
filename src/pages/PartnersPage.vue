<template>
  <div>
    <HeaderComponent/>

    <main class="partners-page">

      <PartnersHeroTemplate />

      <OurPartnersTemplate />

      <PartnersProgramTemplate />

      <MoveProgramTemplate />

      <FaqTemplate
          :content="partnersFaqContent"
          class-name="faq-partners"
          :columns="true"
      />


    </main>

    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import PartnersHeroTemplate from "@/templates/PartnersHeroTemplate";
import OurPartnersTemplate from "@/templates/OurPartnersTemplate";
import PartnersProgramTemplate from "@/templates/PartnersProgramTemplate";
import MoveProgramTemplate from "@/templates/MoveProgramTemplate";
import FaqTemplate from "@/templates/FaqTemplate";
import partnersFaqContent from "@/constants/partnersFaqContent";


export default {
  data() {
    return {
      partnersFaqContent
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    PartnersHeroTemplate,
    OurPartnersTemplate,
    PartnersProgramTemplate,
    MoveProgramTemplate,
    FaqTemplate
  }
}
</script>

<style scoped lang="scss">

.faq {
  padding-bottom: 150px;

  @include tablet {
    padding-bottom: 80px;
  }
}

.faq__title {
  max-width: 851px;
  margin-bottom: 40px;

  @include mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    margin-bottom: 30px;
    text-align: center;
  }

  .sticker-title {
    display: inline-flex;
    height: 89px;
    transform: matrix(1, 0.05, -0.05, 1, 0, 0);

    @include mobile {
      height: 48px;
    }

    span {
      height: 83px;
      padding-top: 14px;
      background-color: var(--blue);

      @include mobile {
        height: 42px;
        padding-top: 0;
      }
    }
  }
}

.faq-partners {
  padding-bottom: 140px;

  .faq__title {
    max-width: 723px;

    @include mobile {
      display: inline-block;
      max-width: 375px;
      text-align: left;
    }
  }
}

</style>
