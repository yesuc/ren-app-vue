import SelectHousing from "ren-app-vue/src/components/subComponents/SelectHousing";
import SingleMoneyInput from "ren-app-vue/src/components/subComponents/SingleMoneyInput";

export default {
  name: "NeedsManager",
  data() {
    return {
      step: 0,
      housingType: "",
      baseHousingExpense: 0,
    };
  },
  props: {},
  emits: ["continue", "back"],
  components: {
    SelectHousing,
    SingleMoneyInput,
  },
  methods: {
    forward() {
      if (this.step < 1) {
        this.step++;
        if (this.step === 1) {
          this.$emit("continue", {
            housingType: this.housingType,
            baseHousingExpense: this.baseHousingExpense,
          });
        }
      }
    },
    back() {
      if (this.step > 0) {
        this.step--;
      } else if (this.step === 0) {
        this.$emit("back");
      }
    },
    updateHousingType(target) {
      this.housingType = target;
      this.forward();
    },
    updateBaseHousingExpense(target) {
      this.baseHousingExpense = target;
      this.forward();
    },
  },
};
