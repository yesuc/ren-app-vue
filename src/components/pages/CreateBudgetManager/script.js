import SelectBudget from "ren-app-vue/src/components/subComponents/SelectBudget";
import BudgetLimit from "ren-app-vue/src/components/subComponents/BudgetLimit";
import NeedsManager from "ren-app-vue/src/components/subComponents/NeedsManager";

export default {
  name: "CreateBudgetManager",
  data() {
    return {
      step: 0,
      budgetSelected: undefined,
      budgetLimit: undefined,
      housingType: undefined,
      baseHousingExpense: undefined,
    };
  },
  props: {},
  components: {
    SelectBudget,
    BudgetLimit,
    NeedsManager,
  },
  methods: {
    forward() {
      if (this.step < 2) {
        this.step++;
      }
    },
    back() {
      if (this.step > 0) {
        this.step--;
      }
    },
    updateBudgetStrategy(target) {
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
  },
  watch: {},
  computed: {},
};
