<template>
  <div class="bimdata-card" :style="{ 'min-width': width }">
    <BIMDataCardBand
      :text="titleHeader"
      class="bimdata-card__header"
      v-if="titleHeader || $scopedSlots.headerIcons"
    >
      <template #right>
        <slot name="headerIcons"></slot>
      </template>
    </BIMDataCardBand>
    <BIMDataCardBand
      class="bimdata-card__submenu"
      :text="submenuText"
      v-if="$scopedSlots.left || submenuText || $scopedSlots.right"
    >
      <template #left>
        <slot name="left"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
    </BIMDataCardBand>
    <div class="bimdata-card__content" v-if="$scopedSlots.content">
      <slot name="content"></slot>
    </div>
    <footer class="bimdata-card__footer" v-if="$scopedSlots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import BIMDataCardBand from "./BIMDataCardBand.vue";

export default {
  components: {
    BIMDataCardBand,
  },
  props: {
    titleHeader: {
      type: String,
    },
    submenuText: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: "215px",
    },
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA UTILITIES
@import "../../assets/scss/utilities/_text.scss";
</style>

<style lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA UTILITIES
@import "../../assets/scss/mixins/_font-size.scss";

// import BIMDATA STYLE COMPONENT
@import "./_BIMDataCard.scss";
</style>
