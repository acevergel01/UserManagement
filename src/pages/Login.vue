<template>
  <div class="row">
    <q-card
      class="LogIn_card q-my-lg q-mx-auto"
      style="width: 400px; height: 750px flex flex-center"
    >
      <q-card-section>
        <div class="col-md-5 col-sm-5 col-lg-5 q-pa-sm">
          <div class="text-h4 text-bold text-left text-black q-pl-lg">
            LOG IN
          </div>
          <q-separator inset class="q-mb-md q-mt-sm" />
          <q-form ref="MyForm" @submit="login">
            <div class="q-pa-lg">
              <q-input
                outlined
                type="email"
                v-model="form.email"
                label="Email"
                required
              >
                <template v-if="form.email" v-slot:append>
                  <q-icon
                    name="cancel"
                    @click.stop="form.email = null"
                    class="cursor-pointer"
                  />
                </template>

                <template v-slot:prepend>
                  <q-icon round dense flat name="person" />
                </template>
              </q-input>
              <div class="q-ma-sm" />
              <q-input
                v-model="form.password"
                outlined
                :type="isPwd ? 'password' : 'text'"
                label="Password"
                required
              >
                <template v-slot:append>
                  <q-icon
                    round
                    dense
                    flat
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click.stop="isPwd = !isPwd"
                  />
                </template>
                <template v-slot:prepend>
                  <q-icon round dense flat name="lock" />
                </template>
              </q-input>
            </div>
            <div class="q-px-md">
              <q-btn
                label="LOG IN"
                style="width: 97.5%"
                class="q-mx-sm bg-primary text-white"
                unelevated
                rounded
                type="submit"
              ></q-btn>
            </div>
          </q-form>
          <q-separator inset class="q-mt-lg" />

          <div class="q-mt-lg text-center">
            <span class="text-black"
              >New User?<a
                href="/signup"
                class="text-blue font text-weight-bold"
                style="text-decoration: none"
              >
                Sign Up</a
              ></span
            >
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import Status from "/src/mixins/ErrorHandling";

export default {
  name: "Login",
  setup() {
    sessionStorage.removeItem("token");
  },

  data() {
    return {
      isPwd: false,
      check: false,
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      let _this = this;
      this.$api
        .post("api/login", this.form)
        .then(function (response) {
          _this.setToken(response.data.token);
          Status.show(response);
          _this.$router.push("/");
        })
        .catch(function (error) {
          Status.show(error);
        });
    },
    setToken(token) {
      //store user token
      sessionStorage.setItem("token", token);
      //set deafault
      this.$api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
  },
};
</script>
