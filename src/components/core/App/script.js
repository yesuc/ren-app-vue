import BudgetOverview from "ren-app-vue/src/components/pages/BudgetOverview";
import CreateBudgetManager from "ren-app-vue/src/components/pages/CreateBudgetManager";

export default {
  name: "App",
  data() {
    return {
      demo: false,
      displayDemoButton: true,
    };
  },
  components: {
    BudgetOverview,
    CreateBudgetManager,
  },
  methods: {},
  watch: {},
  computed: {},
  // lifecycle methods down here
};
