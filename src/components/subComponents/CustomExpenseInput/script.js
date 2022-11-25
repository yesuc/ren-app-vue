export default {
    name: 'CustomExpenseInput',
    data() {
        return {
            name: {
                type: String,
                default: '',
            },
            value: {
                type: Number,
                default: 0,
            },
            limit: {
                type: Number,
                default: undefined,
            }
        };
    },
    props: {
        id: {
            type: Number,
            default: 0,
        },
       'expense-name': {
            type: String,
            default: '',
       },
       'expense-init-value': {
            type: Number,
            default: 0,
       },
       'expense-limit': {
            type: Number,
            default: undefined,
            validator(value) {
                return value === undefined || value <= this['expense-init-value'];
            }
       }
    },
    emits: ['update'],
    methods: {
        update(fieldName) {
            const expenseUpdate = { id: this.id };
            expenseUpdate[fieldName] = this[fieldName];
            this.$emit('update', expenseUpdate);
        }
    },
    created() {
        this.name = this['expense-name'];
        this.value = this['expense-init-value'];
        this.limit = this['expense-limit'];
    }
}