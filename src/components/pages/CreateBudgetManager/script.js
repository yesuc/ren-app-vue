import SelectBudget from 'ren-app-vue/src/components/subComponents/SelectBudget';
import BudgetLimit from 'ren-app-vue/src/components/subComponents/BudgetLimit';

export default {
    name: 'CreateBudgetManager',
    data() {
        return {
            step: 0,
            budgetSelected: undefined,
            budgetLimit: undefined,
        };
    },
    props: {},
    components: {
        SelectBudget,
        BudgetLimit,
    },
    methods: {
        forward() {
            if (this.step < 1) {
                this.step++;
            }
        },
        back() {
            if (this.step > 0) {
                this.step--;
            }
        }
    },
    watch: {},
    computed: {},
}