import SelectHousing from "ren-app-vue/src/components/subComponents/SelectHousing";
import SingleMoneyInput from "ren-app-vue/src/components/subComponents/SingleMoneyInput";
import CustomExpenseManager from "ren-app-vue/src/components/subComponents/CustomExpenseManager";

export default {
  name: "NeedsManager",
  data() {
    return {
      step: 0,
      housingType: "",
      baseHousingExpense: 0,
      customExpenses: [],
    };
  },
  props: {
    percentage: {
      type: Number,
      default: 0,
  },
    allocation: {
        type: Number,
        default: 0,
    },
  },
  emits: ["continue", "back"],
  components: {
    SelectHousing,
    SingleMoneyInput,
    CustomExpenseManager,
  },
  methods: {
    forward() {
      if (this.step < 3) {
        this.step++;
        if (this.step === 3) {
          this.$emit("continue", {
            housingType: this.housingType,
            baseHousingExpense: this.baseHousingExpense,
            customExpenses: this.customExpenses,
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
      this.baseHousingExpense = target * 12;
      this.forward();
    },
    updateCustomExpenses(target) {
      // TODO: Refactor to use a generic function
      this.customExpenses = target;
      this.forward();
    },
  },
};
