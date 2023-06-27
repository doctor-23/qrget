<template>
  <section class="benefits">
    <div class="container">
      <h2 class="second-title title">
        {{ benefitsContent.title }}
      </h2>

      <div class="description">
        <p>
          {{ benefitsContent.description }}
        </p>
      </div>

      <BenefitsListMolecule
          :list="benefitsContent.list"
          :button="benefitsContent.button"
      />
    </div>
  </section>
</template>

<script>
import BenefitsListMolecule from "@/molecules/BenefitsListMolecule";
import benefitsContent from "@/constants/benefitsContent";

export default {
  data() {
    return {
      benefitsContent
    }
  },
  components: {
    BenefitsListMolecule
  }
}
</script>

<style scoped lang="scss">
.benefits {
  padding-bottom: 130px;

  @include tablet {
    padding-bottom: 80px;
  }
}

.title {
  max-width: 778px;
  margin: 0 auto 30px;
  text-align: center;

  @include mobile {
    margin-bottom: 20px;
    text-align: left;
  }
}

.description {
  max-width: 834px;
  margin: 0 auto 40px;
  text-align: center;

  @include mobile {
    margin-bottom: 30px;
    text-align: left;
  }
}
</style>
