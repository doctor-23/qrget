<template>
  <div class="choice-code choice-code_with-footnote" :class="className" v-if="footnote">
    <div class="choice-code__wrap">
      <div class="choice-code__title">
        Выберите QR-код
      </div>

      <SelectMolecule
          class-name="select"
          :class-name="selectClassName"
          :options="options"
          :current-value="currentCode"
          event-bus-event="getCurrentCode"
          name="choice_code"
      />
    </div>

    <div class="footnote">
      {{ footnote }}
    </div>
  </div>

  <div class="choice-code" :class="className" v-else>
    <div class="choice-code__title">
      Выберите QR-код
    </div>

    <SelectMolecule
        :class-name="selectClassName"
        name="choice_code"
        :options="options"
        :current-value="currentCode"
        event-bus-event="getCurrentCode"
    />
  </div>
</template>

<script>

import SelectMolecule from "@/molecules/SelectMolecule";

export default {
  data() {
    return {
    }
  },
  props: {
    className: String,
    options: Array,
    currentCode: Object,
    footnote: {
      type: [String, Boolean],
      default: false
    },
    selectClassName: String
  },
  components: { SelectMolecule },
}
</script>

<style scoped lang="scss">
.choice-code {
  display: flex;
  align-items: center;
  gap: 20px;
}

.choice-code_with-footnote {
  align-items: center;
  gap: 40px;
  width: 100%;

  @include tablet {
    flex-direction: column;
    gap: 18px;
    margin-bottom: 10px;
  }
}

.choice-code__wrap {
  display: flex;
  align-items: center;
  gap: 20px;

  .select {
    width: 230px;
  }

  @include laptop {
    flex-direction: column;
    align-items: flex-start;
    max-width: calc((var(--container) - 260px) * .4444);
    width: 100%;

    .select {
      width: 100%;
    }
  }

  @include tablet {
    max-width: 100%;
  }
}

.footnote {
  max-width: 440px;
  font-size: 16px;
  color: rgba(36, 36, 36, 0.7);

  @include tablet {
    max-width: 100%;
  }
}
</style>
