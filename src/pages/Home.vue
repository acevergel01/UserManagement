<template>
  <q-page class="flex flex-start q-pa-md">
    <div class="q-pa-lg" v-if="!isLoading">
      <div class="row text-h5 q-pb-sm">Basic Information</div>
      <q-separator class="q-mb-md" />
      <div class="row">
        <div class="q-mr-xl user-label">Username</div>
        <div>{{ username }}</div>
      </div>
      <div class="row">
        <div class="q-mr-xl user-label">Email</div>
        <div>{{ email }}</div>
      </div>
      <div class="row">
        <div class="q-mr-xl user-label">Birthday</div>
        <div>{{ birthday }}</div>
      </div>
      <div class="row">
        <div class="q-mr-xl user-label">Age</div>
        <div>{{ age }}</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const $q = useQuasar();
    return {
      showLoading($delay) {
        $q.loading.show({
          delay: $delay, // ms
        });
      },
      hideLoading() {
        $q.loading.hide();
      },
    };
  },
  computed: {
    isLoading: function () {
      return this.loading;
    },
  },
  data() {
    return {
      loading: true,
      username: "",
      email: "",
      age: "",
      birthday: "",
    };
  },

  beforeCreate() {
    this.showLoading();
    this.loading = true;
    let _this = this;

    if (!sessionStorage.getItem("token")) {
      this.$router.push("/login");
    }

    this.$api
      .get("api/user")
      .then(function (response) {
        _this.setData(response);
      })
      .catch(function (error) {
        console.log(error);
        _this.$router.push("/login");
      })
      .then(function () {
        _this.hideLoading();
      });
  },
  methods: {
    setData(response) {
      this.username = response.data.username;
      this.email = response.data.email;
      this.age = response.data.age;
      this.birthday = response.data.birthday;
      this.loading = false;
    },
  },
});
</script>

<style scoped>
.user-label {
  width: 90px;
  font-weight: bold;
  padding-left: 20px;
  padding-bottom: 10px;
}
</style>
