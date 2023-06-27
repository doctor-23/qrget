<template>
  <section class="subscription">
    <div class="container">
      <h2 class="second-title title">
        {{ subscriptionContent.title }}
      </h2>

      <div class="description">
        <p>
          {{ subscriptionContent.description }}}
        </p>
      </div>

      <div class="price">
        <span class="green">
          {{ subscriptionContent.subscribe_name }}
        </span>

        <br>

        {{ subscriptionContent.price_text }}

        <span class="green">
          {{ subscriptionContent.subscribe_price }}
        </span>
      </div>

      <ButtonAtom class-name="subscription-btn">
        <template #default>
          {{ subscriptionContent.button }}
        </template>
      </ButtonAtom>
    </div>
  </section>
</template>

<script>
import ButtonAtom from "@/atoms/ButtonAtom";
import subscriptionContent from "@/constants/subscriptionContent";


export default {
  data() {
    return {
      subscriptionContent
    }
  },
  components: { ButtonAtom }
}
</script>

<style scoped lang="scss">
.subscription {
  padding-bottom: 140px;

  @include tablet {
    padding-bottom: 80px;
  }

  @include mobile {
    padding: 0 20px 80px;
  }

  .container {
    padding: 60px 50px;
    background: var(--violet) url("@/assets/img/main-subscription-bg.png") center / cover no-repeat;
    border-radius: 30px;

    @include tablet {
      padding: 30px 17.5px;
    }

    @include mobile {
      background-image: none;
    }
  }
}

.title {
  max-width: 700px;
  margin-bottom: 30px;
  color: #fff;

  @include mobile {
    margin-bottom: 20px;
  }
}

.description {
  max-width: 700px;
  margin-bottom: 40px;
  color: #fff;

  @include mobile {
    margin-bottom: 30px;
  }
}

.price {
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 600;
  line-height: 145%;
  color: #fff;

  * {
    font-weight: 600;
  }
}

.subscription-btn {
  border: 2px solid var(--green)
}
</style>
