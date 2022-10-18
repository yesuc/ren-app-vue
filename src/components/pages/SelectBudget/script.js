import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: "SelectBudget",
  data() {
    return {
      loadingProgress: 0,
      options: [],
      selectedOption: undefined,
    }
  },
  components: {},
  methods: {
    toggleOption(value) {
      if (this.selectedOption && this.selectedOption._id === value) {
        this.selectedOption = undefined;
      } else {
        this.selectedOption = this.options.find((item) => item._id === value);
      }
    }
  },
  watch: {},
  computed: {
    ...mapGetters({
      baseUri: 'BACKEND_BASE_URI',
    })
  },
  async created() {
    let vueInstance = this;
    const config = {
      onDownloadProgress(progressEvent) {
        vueInstance.loadingProgress = progressEvent.loaded / progressEvent.total * 100;
      }
    };
    await axios.get(`http://${this.baseUri}/dbs_api/default_budget_strategy`, config).then(response => {
      if (response.error) {
        console.error(response.error);
      } else {
        this.options = response.data.data;
      }
    });
  }
};
