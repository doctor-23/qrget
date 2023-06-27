<template>
  <div class="design">
    <TabsDesignMolecule
        :tabs="tabs"
        :active-tab="activeTab"
        @updateActiveTab="onUpdateActiveTab"
    />

    <DesignReadyComponent
        :codes="codes"
        v-if="activeTab === 0"
        :current-code="code"
    />

    <DesignCustomComponent
        :codes="codes"
        v-if="activeTab === 1"
        :key="componentKey"
        :current-code="code"
    />

  </div>
</template>

<script>

import DesignReadyComponent from "@/components/DesignReadyComponent";
import DesignCustomComponent from "@/components/DesignCustomComponent";
import TabsDesignMolecule from "@/molecules/TabsDesignMolecule";
import PersonalContent from "@/constants/personalContent";
import eventBus from "@/eventBus";

export default {
  data() {
    return {
      tabs: PersonalContent.tabsDesign,
      activeTab: 1,
      currentCode: 1,
      componentKey: 0
    }
  },
  props: ['codes'],
  components: {
    DesignReadyComponent,
    DesignCustomComponent,
    TabsDesignMolecule
  },
  methods: {
    onUpdateActiveTab(data) {
      this.activeTab = data;
    }
  },
  computed: {
    code() {
      return this.codes.find(code => code.value === this.currentCode)
    }
  },
  created() {
    eventBus.$on('getCurrentCode', value => {
      this.currentCode = value
    })
  },
  watch: {
    currentCode() {
      this.componentKey += 1
    }
  }
}
</script>

<style scoped lang="scss">
</style>
