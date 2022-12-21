import SelectBudget from "ren-app-vue/src/components/subComponents/SelectBudget";
import BudgetLimit from "ren-app-vue/src/components/subComponents/BudgetLimit";
import NeedsManager from "ren-app-vue/src/components/subComponents/NeedsManager";
import WantsManager from "ren-app-vue/src/components/subComponents/WantsManager";
import SavingsManager from "ren-app-vue/src/components/subComponents/SavingsManager";

export default {
  name: "CreateBudgetManager",
  data() {
    return {
      step: 0,
      budgetSelected: undefined,
      budgetLimit: undefined,
      housingType: undefined,
      baseHousingExpense: undefined,
      wantExpenses: undefined,
    };
  },
  props: {},
  components: {
    SelectBudget,
    BudgetLimit,
    NeedsManager,
    WantsManager,
    SavingsManager,
  },
  emits: ['disableDemo'], // for demo only
  methods: {
    forward() {
      if (this.step < 4) {
        this.step++;
      }
    },
    back() {
      if (this.step > 0) {
        this.step--;
      }
    },
    updateBudgetStrategy(target) {
      this.$emit('disableDemo');
      this.budgetSelected = target;
      this.forward();
    },
    updateBudgetLimit(target) {
      this.budgetLimit = target;
      this.forward();
    },
    updateNeeds(target) {
      this.housingType = target.housingType;
      this.baseHousingExpense = target.baseHousingExpense;
      this.forward();
    },
    updateWants(target) {
      this.wantExpenses = target;
      this.forward();
    },
    updateSavings(target) {
      this.SavingsManager = target;
      this.forward();
    }
  },
  watch: {},
  computed: {},
};
