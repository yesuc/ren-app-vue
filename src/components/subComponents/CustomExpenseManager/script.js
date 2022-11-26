import CustomExpenseInput from 'ren-app-vue/src/components/subComponents/CustomExpenseInput';

export default {
    name: 'CustomExpenseManager',
    data() {
        return {
            expenses: [],
        }
    },
    components: {
        CustomExpenseInput
    },
    emits: ['forward', 'back'],
    methods: {
        createExpense() {
            this.expenses.push({ id: this.expenses.length + 1, name: '', value: 0 });
        },
        updateExpense(updateObj) {
            // See createExpense(), id is always index of element + 1
            // So we know index is expense.id - 1
            let expense = this.expenses[updateObj.id - 1];
            if (!expense) return; // this should not ever happen but...
            expense = Object.assign(expense, updateObj);
            this.expenses[expense.id - 1] = expense;
        },
        deleteExpense(id) {
            this.expenses.splice(id - 1, 1);
        },
    }
}