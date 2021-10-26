<template>
  <div class="row">
    <q-card
      class="LogIn_card q-my-lg q-mx-auto"
      style="width: 600px; height: 750px flex flex-center"
    >
      <q-card-section>
        <div class="col-md-5 col-sm-5 col-lg-5 q-pa-sm">
          <div class="text-h4 text-bold text-left text-black q-pl-lg">
            SIGN UP
          </div>
          <q-separator inset class="q-mb-md q-mt-sm" />
          <q-form @submit="signup()">
            <div class="row q-pa-lg">
              <q-input
                class="col"
                outlined
                type="text"
                v-model="form.username"
                label="Username"
                :rules="[(val) => !!val || 'Field is required']"
              >
                <template v-if="form.username" v-slot:append>
                  <q-icon
                    name="cancel"
                    @click.stop="form.username = null"
                    class="cursor-pointer"
                  />
                </template>

                <template v-slot:prepend>
                  <q-icon round dense flat name="person" />
                </template>
              </q-input>
              <q-input
                class="col"
                outlined
                type="email"
                v-model="form.email"
                label="Email"
                :rules="[(val) => !!val || 'Field is required']"
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
              <div />
              <div class="row">
                <q-input
                  class="col"
                  v-model="form.password"
                  outlined
                  :type="isPwd ? 'password' : 'text'"
                  label="Password"
                  :rules="[(val) => !!val || 'Field is required']"
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
                <q-input
                  class="col"
                  v-model="form.password_confirmation"
                  outlined
                  :type="isPwd ? 'password' : 'text'"
                  label="Confirm"
                  :rules="[(val) => !!val || 'Field is required']"
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
              <div class="row">
                <q-input
                  class="col"
                  style="min-width: 252px"
                  outlined
                  v-model="form.birthday"
                  mask="date"
                  :rules="['date']"
                  label="Birthday YYYY/MM/DD"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="form.birthday">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="q-px-md q-mb-md">
              <q-btn
                label="SIGN UP"
                style="width: 97.5%"
                class="q-mx-sm q-mt-sm bg-primary text-white"
                unelevated
                rounded
                type="submit"
              ></q-btn>
            </div>
          </q-form>

          <q-separator inset class="q-mt-lg" />

          <div class="q-mt-lg text-center">
            <span class="text-black"
              >Already have an Account?<a
                href="/login"
                class="text-blue font text-weight-bold"
                style="text-decoration: none"
              >
                Log in</a
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
  name: "Signup",
  data() {
    return {
      isPwd: true,
      form: {
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        birthday: "",
        age: "",
      },
    };
  },
  methods: {
    signup() {
      let _this = this;
      this.$api
        .post("api/register", this.form)
        .then(function (response) {
          Status.show(response);
          _this.$router.push("/login");
        })
        .catch(function (error) {
          Status.show(error);
        });
    },
  },
};
</script>
