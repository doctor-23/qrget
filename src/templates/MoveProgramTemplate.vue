<template>
  <section class="move-program">
    <div class="container">
      <div class="sticker">
        <img :src="content.image" alt="Стикер">
      </div>

      <h3 class="title">
        {{ content.title }}
      </h3>

      <div class="description">
        <p>
          {{ content.description }}
        </p>
      </div>

      <button class="btn move-program--btn">
        {{ content.button }}
      </button>
    </div>
  </section>
</template>

<script>
import moveProgramContent from "@/constants/moveProgramContent";

export default {
  data() {
    return {
      content: moveProgramContent
    }
  }
}
</script>

<style scoped lang="scss">
.move-program {
  padding-bottom: 126px;

  @include tablet {
    padding-bottom: 80px;
  }

  @include mobile {
    padding: 0 20px 80px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 50px 60px 56px;
    background: var(--violet) url("@/assets/img/move-program-bg.png") center / cover no-repeat;
    border-radius: 30px;

    @include tablet {
      padding: 30px 15px 40px;
    }

    @include mobile {
      background-image: none;
    }
  }
}

.sticker {
  width: 96px;
  height: 96px;
  margin-left: -7px;
  margin-bottom: 16px;

  @include tablet {
    margin-left: 0;
  }

  @include mobile {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.title {
  max-width: 778px;
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.1;
  color: #fff;

  @include mobile {
    margin-bottom: 20px;
    font-size: 28px;
  }
}

.description {
  max-width: 778px;
  margin-bottom: 30px;
  font-size: 22px;
  color: #fff;

  @include mobile {
    font-size: 16px;
  }
}

.move-program--btn {
  border: 2px solid var(--green);
}
</style>
