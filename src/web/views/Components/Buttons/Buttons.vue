<template>
  <main class="article article-buttons">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <div class="button-overview">
        <ComponentCode :componentTitle="$route.name">
          <template #module>
            <BIMDataButton
              :width="getButtonWidth()"
              :class="getOverviewButtonClasses()"
              :disabled="getButtonDisabled()"
            >
              <BIMDataIcon
                class="icon-chevron"
                icon-name="chevron-right"
                width="10"
                height="10"
                x="23"
                y="23"
                v-if="checkboxIconChecked"
              >
                <BIMDataChevronIcon />
              </BIMDataIcon>
              <span v-if="checkboxTextChecked">
                BIMData button {{ selectedBtnOptionstypes }}
                {{ selectedBtnOptionskinds }} {{ selectedBtnOptionsvalues }}
              </span>
            </BIMDataButton>
          </template>

          <template #parameters>
            <div
              class="bimdata-ds__demo__parameters__options"
              v-for="[key, values] in Object.entries(btnOptions)"
              :key="key"
            >
              <h5 class="bimdata-h5">{{ key }}</h5>
              <BIMDataRadio
                v-for="value in values"
                :key="value"
                :text="value"
                :id="value"
                :value="value"
                :name="key"
                v-model="$data[`selectedBtnOptions${key}`]"
              >
              </BIMDataRadio>
            </div>
            <div class="bimdata-ds__demo__parameters__options">
              <h5 class="bimdata-h5">modifiers</h5>
              <BIMDataCheckbox
                text="icon"
                v-model="checkboxIconChecked"
                :disabled="checkboxIconDisabled"
              >
              </BIMDataCheckbox>
              <BIMDataCheckbox
                text="text"
                v-model="checkboxTextChecked"
                :disabled="checkboxTextDisabled"
              >
              </BIMDataCheckbox>
              <BIMDataCheckbox
                text="disabled"
                v-model="checkboxDisabledChecked"
              >
              </BIMDataCheckbox>
            </div>
          </template>

          <template #import>
            import BIMDataButton from
            "@/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
          </template>

          <template #code>
            <pre>
              &lt;BIMDataButton
                width="{{ getButtonWidth() }}"
                class="bimdata-btn__{{
                selectedBtnOptionstypes
              }} bimdata-btn__{{ selectedBtnOptionstypes }}--{{
                selectedBtnOptionsvalues
              }} bimdata-btn__{{ selectedBtnOptionskinds }}"
                :disabled="{{ getButtonDisabled() }}"&gt;
                {{ getIcon() }}
                {{ getText() }}
              &lt;/BIMDataButton&gt;
            </pre>
          </template>
        </ComponentCode>

        <div class="m-t-24">
          <h5 class="bimdata-h5">Props:</h5>
          <BIMDataTable :rows="propsData"></BIMDataTable>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";
import BIMDataChevronIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataChevronIcon.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  name: "Buttons",
  components: {
    ComponentCode,
    BIMDataButton,
    BIMDataTable,
    BIMDataRadio,
    BIMDataCheckbox,
    BIMDataIcon,
    BIMDataChevronIcon,
  },
  data() {
    return {
      message: "",
      checkboxIconChecked: false,
      checkboxTextChecked: true,
      checkboxDisabledChecked: false,
      selectedBtnOptionstypes: "fill",
      selectedBtnOptionskinds: "radius",
      selectedBtnOptionsvalues: "default",
      btnOptions: {
        types: ["fill", "outline", "ghost"],
        kinds: ["radius", "square", "rounded"],
        values: ["default", "primary", "secondary", "grey", "red"],
      },
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "width",
          "Number, String",
          "150px",
          "Use this props to change the width of the button",
        ],
        [
          "height",
          "Number, String",
          "32px",
          "Use this props to change the height of the button",
        ],
      ],
    };
  },
  computed: {
    checkboxTextDisabled() {
      return (
        this.selectedBtnOptionskinds === "rounded" ||
        this.checkboxIconChecked === false
      );
    },
    checkboxIconDisabled() {
      return (
        this.selectedBtnOptionskinds === "rounded" ||
        this.checkboxTextChecked === false
      );
    },
    buttonDisabled() {
      if (this.checkboxDisabledChecked === true) {
        return ":disabled='disabled'";
      }
      return "";
    },
  },
  watch: {
    selectedBtnOptionskinds: {
      handler(newValue, oldValue) {
        if (newValue === "rounded") {
          this.checkboxTextChecked = false;
          this.checkboxIconChecked = true;
        } else if (oldValue === "rounded") {
          this.checkboxTextChecked = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    getOverviewButtonClasses() {
      return `bimdata-btn__${this.selectedBtnOptionstypes} bimdata-btn__${this.selectedBtnOptionstypes}--${this.selectedBtnOptionsvalues} bimdata-btn__${this.selectedBtnOptionskinds}`;
    },
    getButtonWidth() {
      if (
        this.selectedBtnOptionskinds.includes("rounded") ||
        (this.checkboxIconChecked === true &&
          this.checkboxTextChecked === false)
      ) {
        return "32px";
      } else {
        return "300px";
      }
    },
    getIcon() {
      if (this.checkboxIconChecked) {
        return `<BIMDataIcon
                  class="icon-chevron"
                  icon-name="chevron-right"
                  width="10"
                  height="10"
                  x="23"
                  y="23"
                >
                  <BIMDataChevronIcon />
                </BIMDataIcon>`;
      }
    },
    getText() {
      if (this.checkboxTextChecked) {
        return `Button ${this.selectedBtnOptionskinds} ${this.selectedBtnOptionstypes} ${this.selectedBtnOptionsvalues}`;
      }
    },
    getButtonDisabled() {
      return this.checkboxDisabledChecked;
    },
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_Buttons.scss";
</style>