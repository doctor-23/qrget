<template>
  <div class="list">

    <div
        v-for="item in list"
        :key="item.icon"
        class="item"
    >

      <SvgSpriteAtom
          :name="item.icon"
          width="60"
          height="60"
      />

      <h4 class="heading">
        {{ item.title }}
      </h4>

      <div class="description">
        <p>
          {{ item.description }}
        </p>
      </div>
    </div>

    <div class="item">
      <ButtonAtom class-name="benefits-btn">
        <template #default>
          {{ button }}
        </template>
      </ButtonAtom>
    </div>

  </div>
</template>

<script>
import ButtonAtom from "@/atoms/ButtonAtom";
import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";

export default {
  props: ['list', 'button'],
  components: { ButtonAtom, SvgSpriteAtom }
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  margin: 4px 0 0 4px;

  @include mobile {
    margin-left: 0;
  }
}

.item {
  display: flex;
  flex-direction: column;
  width: 33.33%;
  min-height: 328px;
  padding: 25px 20px;
  margin: -4px 0 0 -4px;
  //background: url('@/assets/img/border.png') center / contain no-repeat;
  border: 4px dotted var(--purpure);
  border-radius: 30px;

  @include tablet {
    width: 50%;
  }

  @include mobile {
    width: 100%;
    min-height: 300px;
    margin-left: 0;
    padding: 20px;
  }

  &:last-child {
    padding: 0;

    @include mobile {
      min-height: auto;
      height: 80px;
    }
  }

  .svg-ico {
    margin-bottom: 18px;
  }
}

.heading {
  margin-bottom: 15px;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.2;

  @include mobile {
    font-size: 22px;
  }
}

.description {

}

.benefits-btn {
  width: 100%;
  height: 100%;
  border-radius: 27px;

  @include mobile {
    width: 100%;
    height: 100%;
  }
}
</style>
