<template>
  <section class="instruction">
    <div class="container">
      <h1 class="title main-title">
        {{ instructionContent.title }}
      </h1>

      <h2 class="subtitle">
        {{ instructionContent.subtitle }}
      </h2>

      <InstructionListMolecule
          :list="instructionContent.list"
          :button="instructionContent.button"
      />
    </div>
  </section>
</template>

<script>
import InstructionListMolecule from "@/molecules/InstructionListMolecule";
import instructionContent from "@/constants/instructionContent";

export default {
  data() {
    return {
      instructionContent
    }
  },
  components: { InstructionListMolecule }
}
</script>

<style scoped lang="scss">
.instruction {
  padding: 60px 0 140px;

  @include tablet {
    padding: 30px 0 80px;
  }
}

.title {
  margin-bottom: 40px;
  text-align: center;

  @include mobile {
    margin-bottom: 20px;
  }
}

.subtitle {
  margin-bottom: 60px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.1;

  @include mobile {
    margin-bottom: 40px;
    font-size: 30px;
  }
}
</style>
