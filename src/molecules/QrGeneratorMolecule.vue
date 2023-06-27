<template>
  <div
      id="qr-code"
      class="qr-generator-container"
      ref="qrCode"
      :style="{borderRadius: `${radius}px`}"
  />
</template>

<script>
import QrCodeStyling from "@/assets/js/qrCodeStyling";

export default {
  data() {
    return {
      qrCode: new QrCodeStyling(this.options)
    }
  },
  props: ['options', 'radius'],
  mounted: function () {
    this.qrCode.append(this.$refs["qrCode"]);
  },
  watch: {
    updateOptions: function(newOptions, oldOptions) {
      this.qrCode.update(this.options);
    }
  }
}
</script>

<style scoped lang="scss">
.qr-generator-container {
  height: max-content;
  line-height: 0;

  svg {
    border-radius: 50px;
  }
}
</style>
