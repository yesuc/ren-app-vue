import CustomExpenseManager from "ren-app-vue/src/components/subComponents/CustomExpenseManager";

export default {
    name: 'SavingsManager',
    data() {
        return {
            step: 0,
        }
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
    components: {
        CustomExpenseManager,
    },
    emits: ['continue', 'back'],
    methods: {
        forward(expenses) {
            this.$emit('continue', expenses);
        },
        back() {
            if (this.step > 0) {
                this.step--;
            } else if (this.step === 0) {
                // TODO: warn user that their inputs may be lost
                this.$emit("back");
            }
        },
    },
}