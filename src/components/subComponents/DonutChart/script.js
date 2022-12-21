import { Chart, DoughnutController, ArcElement, Tooltip, SubTitle, Title } from "chart.js";
// import Chart from 'chart.js/auto';

export default {
    name: "DonutChart",
    data() {
        return {
            chart: undefined,
        }
    },
    props: {
        labels: {
            type: Array,
            default: () => [],
        },
        data: {
            type: Array,
            required: true,
            default: () => [],
        }
    },
    methods: {},
    computed: {},
    mounted() {
        const contextElement = document.getElementById('chart');
        const data = {
            labels: this.labels,
            datasets: [
                {
                    data: this.data,
                    backgroundColor: ['#FCC3BF', '#BFDBE4', '#F9FCD8'],
                    hoverOffset: 4,
                }
            ],
        };
        const config = {
            type: 'doughnut',
            data: data,
        }
        Chart.register([DoughnutController, ArcElement, Tooltip, SubTitle, Title]);
        this.chart = new Chart(contextElement, config);
    }
}