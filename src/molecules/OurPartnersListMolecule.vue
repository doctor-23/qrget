<template>
  <div class="list">

    <OurPartnersListAtom
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index + 1"
        class="list-item"
    />

    <div class="list-item">
      <ButtonAtom class-name="partners-btn">
        <template #default>
          {{ button }}
        </template>
      </ButtonAtom>
    </div>

  </div>
</template>

<script>
import ButtonAtom from "@/atoms/ButtonAtom";
import OurPartnersListAtom from "@/atoms/OurPartnersListAtom";

export default {
  props: {
    list: {
      type: Array,
      default: [{title: "", image: ""}]
    },
    button: String
  },
  components: {
    ButtonAtom,
    OurPartnersListAtom
  }
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

.list-item {
  width: 33.33%;
  min-height: 306px;
  margin: -4px 0 0 -4px;
  padding: 30px 18.5px;
  border: 4px dotted var(--purpure);
  border-radius: 30px;
  background-repeat: no-repeat;
  background-position-y: bottom;

  @include tablet {
    width: 50%;
  }

  @include mobile {
    width: 100%;
    margin-left: 0;
    padding: 30px 22.5px 20px;
    min-height: 300px;
  }

  &:first-child {
    padding: 30px 40px;

    @include mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px 22.5px;
    }
  }

  &:nth-child(2) {
    background-size: 420px 219px;
    background-position-x: 0;

    @include mobile {
      background-size: 335px 174px;
      background-position: center bottom 10px;
    }
  }

  &:nth-child(3) {
    background-size: 294px 214px;
    background-position-x: 45px;

    @include mobile {
      background-size: 260px 185px;
      background-position: bottom 15px center;
    }

    @include fullMobile {
      background-position-x: calc(100vw / 15);
    }
  }

  &:nth-child(4) {
    background-size: 326px 206px;
    background-position-x: 18px;

    @include mobile {
      background-size: 300px 190px;
      background-position: bottom 11px center;
    }

    @include fullMobile {
      background-position-x: calc(100vw / 53.57);
    }
  }

  &:nth-child(5) {
    background-size: 297px 231px;
    background-position-x: 50px;

    @include mobile {
      background-size: 297px 231px;
      background-position: bottom 0 center;
    }
  }

  &:last-child {
    padding: 0;

    @include mobile {
      min-height: auto;
      height: 80px;
    }
  }
}

.partners-btn {
  width: 100%;
  height: 100%;
  border-radius: 27px;

  @include mobile {
    width: 100%;
    height: 100%;
  }
}
</style>
