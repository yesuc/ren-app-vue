
import DonutChart from "ren-app-vue/src/components/subComponents/DonutChart";

import mockData from "ren-app-vue/mockData/budgetData.json";

export default {
    name: 'BudgetOverview',
    data() {
        return {
            budget: [],
            chartData: [],
            chartLabels: [],
        }
    },
    props: {
        demo: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        DonutChart,
    },
    methods: {
        sumBudgetGroup(obj) {
            let sum = 0;
            for (const field in obj) {
                sum += obj[field];
            }
            return Math.round(sum * 100) / 100; // round off 10th decimal place .001234..
        }
    },
    computed: {},
    created() {
        if (this.demo) {
            this.budget = mockData[0];  
        }
        this.budget.groups.forEach( (obj, _) => {
            this.chartLabels.push(obj.name);
            this.chartData.push(this.sumBudgetGroup(obj.entries));
        });
    }
}