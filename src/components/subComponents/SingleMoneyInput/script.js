export default {
  name: "SingleMoneyInput",
  data() {
    return {
      value: undefined,
    };
  },
  props: {
    header: {
      type: String,
      default: undefined,
    },
    "sub-header": {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: "",
    },
  },
  emits: ["continue", "back"],
  components: {},
  methods: {},
  watch: {},
  computed: {},
};
