<template>

  <div>
    <HeaderComponent />

    <main class="main-page">

      <MainHeroTemplate />

      <FastSearchTemplate />

      <BenefitsTemplate />

      <SubscriptionTemplate />

      <ReviewsTemplate
          location="main"
          :content="mainReviewsContent"
      />

      <FaqTemplate :content="mainFaqContent" />

      <MainOfferTemplate />

    </main>

    <FooterComponent />
  </div>

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import MainHeroTemplate from "@/templates/MainHeroTemplate";
import FastSearchTemplate from "@/templates/FastSearchTemplate";
import BenefitsTemplate from "@/templates/BenefitsTemplate";
import SubscriptionTemplate from "@/templates/SubscriptionTemplate";
import ReviewsTemplate from "@/templates/ReviewsTemplate";
import FaqTemplate from "@/templates/FaqTemplate";
import MainOfferTemplate from "@/templates/MainOfferTemplate";
import mainReviewsContent from "@/constants/mainReviewsContent";
import mainFaqContent from "@/constants/mainFaqContent";

export default {
  data() {
    return {
      mainReviewsContent,
      mainFaqContent
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    MainHeroTemplate,
    FastSearchTemplate,
    BenefitsTemplate,
    SubscriptionTemplate,
    ReviewsTemplate,
    FaqTemplate,
    MainOfferTemplate
  }
}
</script>

<style lang="scss">
.reviews_on-main {
  padding-bottom: 140px;

  @include tablet {
    padding-bottom: 80px;
  }
}

</style>
