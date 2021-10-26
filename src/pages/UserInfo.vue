<template>
  <q-page class="flex flex-top" v-if="!isLoading">
    <div class="text-h5 absolute-center" v-if="!canAccess">
      You do not have permission to access this page
    </div>
    <div flat class="q-pa-md" v-if="canAccess">
      <q-markup-table>
        <thead class="bg-light-blue">
          <tr>
            <th colspan="7">
              <div class="text-h5 q-my-sm text-left">User Information</div>
            </th>
          </tr>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Username</th>
            <th class="text-center">Email</th>
            <th class="text-center">Age</th>
            <th class="text-center">Birthday</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(users, index) in userData" v-bind:key="users.id">
            <td class="text-left">{{ users.id }}</td>
            <td class="text-right">{{ users.username }}</td>
            <td class="text-right">{{ users.email }}</td>
            <td class="text-right">{{ users.age }}</td>
            <td class="text-right">{{ users.birthday }}</td>
            <td>
              <q-btn
                v-if="canDelete"
                flat
                icon="delete"
                color="negative"
                round
                @click="deleteItem(index)"
              />
              <q-btn
                v-if="canUpdate"
                class="q-pa-sm float-center"
                @click="
                  show();
                  setItems(index, 'update');
                "
                color="positive"
                round
                flat
                icon="edit"
              />
              <q-btn
                v-if="canUpdate"
                class="q-pa-sm float-right"
                @click="setItems(index, 'changepass')"
                icon="lock"
                color="positive"
                round
                flat
              />
            </td>
          </tr>
          <tr v-if="canAdd">
            <td colspan="7">
              <q-btn
                class="float-right"
                color="blue"
                icon="add_circle"
                flat
                outlined
                round
                @click="
                  show();
                  setItems(0, 'add');
                "
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>

    <!-- dialog -->
    <!-- first row -->
    <q-dialog ref="dialog" @hide="onDialogHide">
      <q-card class="q-dialog-plugin">
        <q-form @submit="onOKClick">
          <div class="row q-px-lg q-pt-md">
            <q-input
              :readonly="isUpdating"
              class="col"
              outlined
              type="text"
              v-model="form.username"
              label="Username"
              :rules="[(val) => !!val || 'Field is required']"
            >
              <template v-if="form.username && !isUpdating" v-slot:append>
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
            <div />
          </div>
          <!-- second row -->
          <div class="row q-px-lg">
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
          </div>

          <!-- third row -->
          <div class="row q-px-lg" v-if="!isUpdating">
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
          </div>
          <!-- 4th row  -->
          <div class="row q-px-lg">
            <q-input
              class="col"
              style="min-width: 50%"
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
                    <q-date v-model="form.birthday" title="Birthday">
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

          <!-- buttons example -->
          <q-card-actions align="right">
            <q-btn label="Save" type="submit" color="primary" />
            <q-btn color="primary" label="Cancel" @click="hide" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

    <q-dialog @hide="onDialogHide" ref="passworddialog">
      <q-card>
        <q-form @submit="changePassword">
          <q-card-section class="text-left text-h5">
            Change Password
          </q-card-section>
          <q-card-section class="row">
            <q-input
              class="col"
              v-model="form.password"
              outlined
              :type="isPwd ? 'password' : 'text'"
              label="New Password"
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
          </q-card-section>
          <q-card-actions align="right">
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn color="primary" label="Cancel" @click="hide" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import Status from "/src/mixins/ErrorHandling";

export default {
  name: "UserInfo",
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
  data() {
    return {
      loading: true,
      canAccess: 1,
      canAdd: 0,
      canUpdate: 0,
      canDelete: 0,
      type: "",
      isPwd: true,
      editDialog: false,
      action: "",
      newPassword: "",
      userData: [],
      form: {
        username: "",
        email: "",
        password: "",
        birthday: "",
        age: "",
      },
    };
  },
  computed: {
    isUpdating: function () {
      return this.action == "update";
    },
    isChangingpass: function () {
      return this.action == "changepass";
    },
    isLoading: function () {
      return this.loading;
    },
  },
  //get info before load
  beforeCreate() {
    this.loading = true;
    this.showLoading();
    let _this = this;
    this.$api
      .get("api/userinfo")
      .then((response) => {
        this.hideLoading();
        _this.setData(response);
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        _this.$router.push("/login");
        this.hideLoading();
      });
  },

  methods: {
    setItems(index, action) {
      this.action = action;
      this.index = index;
      if (this.isUpdating) {
        this.form.username = this.userData[index].username;
        this.form.email = this.userData[index].email;
        this.form.age = this.userData[index].age;
        this.form.birthday = this.userData[index].birthday;
      } else if (this.isChangingpass) {
        this.form.password = null;
        this.$refs.passworddialog.show();
      } else {
        this.form.username = null;
        this.form.email = null;
        this.form.password = null;
        this.form.birthday = null;
      }
    },
    show() {
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
      this.$refs.passworddialog.hide();
    },
    onDialogHide() {
      this.$emit("hide");
      this.action = "";
    },
    onOKClick() {
      if (this.isUpdating) {
        this.editUser(this.index);
      } else {
        this.addItem();
      }
    },
    editUser() {
      let index = this.index;
      let id = this.userData[index].id;
      this.$api
        .put(`api/user/${id}`, this.form)
        .then((response) => {
          this.userData[index] = response.data.user;
          Status.show(response);
          this.hide();
        })
        .catch((error) => {
          Status.show(error);
        });
    },
    changePassword() {
      let index = this.index;
      let id = this.userData[index].id;
      this.$api
        .put(`api/changepass/user/${id}`, this.form)
        .then((response) => {
          Status.show(response);
          this.hide();
        })
        .catch((error) => {
          Status.show(error);
        });
    },
    deleteItem(index) {
      let id = this.userData[index].id;
      this.$api
        .delete(`api/user/${id}`)
        .then((response) => {
          Status.show(response);
          this.userData.splice(index, 1);
        })
        .catch((error) => {
          Status.show(error);
        });
    },
    addItem() {
      this.$api
        .post("api/user", this.form)
        .then((response) => {
          this.userData.push(response.data.user);
          Status.show(response);
          this.hide();
        })
        .catch((error) => {
          Status.show(error);
        });
    },
    setData(response) {
      this.canAccess = response.data.ui_access;
      this.canDelete = response.data.ui_delete;
      this.canUpdate = response.data.ui_update;
      this.canAdd = response.data.ui_add;
      this.userData = response.data.users;
    },
  },
};
</script>
