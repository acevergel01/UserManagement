<template>
  <q-page class="flex flex-top" v-if="!isLoading">
    <div class="text-h5 absolute-center" v-if="!canAccess">
      You do not have permission to access this page
    </div>
    <div flat class="q-pa-md" v-if="canAccess">
      <q-markup-table>
        <thead class="bg-light-blue">
          <tr>
            <th colspan="6">
              <div class="text-h5 q-my-sm text-left">User Management</div>
            </th>
          </tr>
          <tr>
            <th class="text-center">Username</th>
            <th class="texxt-center" v-if="isAdmin">Admin</th>
            <th class="text-center">User Management</th>
            <th class="text-center">User Information</th>
            <th class="text-center">To-Do</th>
            <th class="text-center" v-if="canModify">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(users, index) in userData" :key="users.id">
            <td class="text-left">{{ users.username }}</td>
            <td v-if="isAdmin">
              <div>
                <input
                  :disabled="!canModify"
                  class="checkbox"
                  type="checkbox"
                  :id="users.id + 'admin'"
                  v-model="users.admin"
                  true-value="1"
                  false-value="0"
                />
                <label class="checkbox-text" :for="users.id + 'admin'"
                  >Admin</label
                >
              </div>
            </td>
            <!-- user management -->
            <td>
              <div>
                <input
                  :disabled="!canModify"
                  class="checkbox"
                  type="checkbox"
                  :id="users.id + 'umaccess'"
                  v-model="users.um_access"
                  true-value="1"
                  false-value="0"
                />
                <label class="checkbox-text" :for="users.id + 'umaccess'"
                  >Access</label
                >
              </div>
              <div>
                <input
                  :disabled="!canModify"
                  type="checkbox"
                  :id="users.id + 'ummodify'"
                  v-model="users.um_modify"
                  true-value="1"
                  false-value="0"
                />
                <label class="checkbox-text" :for="users.id + 'ummodify'"
                  >Modify</label
                >
              </div>
            </td>
            <!-- user information -->
            <td>
              <div class="row">
                <div class="column">
                  <div>
                    <input
                      :disabled="!canModify"
                      class="checkbox"
                      type="checkbox"
                      :id="users.id + 'uiaccess'"
                      v-model="users.ui_access"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="checkbox-text" :for="users.id + 'uiaccess'"
                      >Access</label
                    >
                  </div>
                  <div>
                    <input
                      :disabled="!canModify"
                      type="checkbox"
                      :id="users.id + 'uimodify'"
                      v-model="users.ui_update"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="checkbox-text" :for="users.id + 'uimodify'"
                      >Modify</label
                    >
                  </div>
                </div>

                <div class="column">
                  <div>
                    <input
                      :disabled="!canModify"
                      class="checkbox"
                      type="checkbox"
                      :id="users.id + 'uiadd'"
                      v-model="users.ui_add"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="checkbox-text" :for="users.id + 'uiadd'"
                      >Add</label
                    >
                  </div>
                  <div>
                    <input
                      :disabled="!canModify"
                      type="checkbox"
                      :id="users.id + 'uidelete'"
                      v-model="users.ui_delete"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="checkbox-text" :for="users.id + 'uidelete'"
                      >Delete</label
                    >
                  </div>
                </div>
              </div>
            </td>
            <!-- todo -->
            <td>
              <div class="row">
                <div class="column">
                  <div>
                    <input
                      :disabled="!canModify"
                      class="checkbox"
                      type="checkbox"
                      :id="users.id + 'tdaccess'"
                      v-model="users.todo_access"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="checkbox-text" :for="users.id + 'tdaccess'"
                      >Access</label
                    >
                  </div>
                  <div>
                    <input
                      :disabled="!canModify"
                      type="checkbox"
                      :id="users.id + 'tdmodify'"
                      v-model="users.todo_update"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="checkbox-text" :for="users.id + 'tdmodify'"
                      >Modify</label
                    >
                  </div>
                </div>

                <div class="column">
                  <div>
                    <input
                      :disabled="!canModify"
                      class="checkbox"
                      type="checkbox"
                      :id="users.id + 'tdadd'"
                      v-model="users.todo_add"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="checkbox-text" :for="users.id + 'tdadd'"
                      >Add</label
                    >
                  </div>
                  <div>
                    <input
                      :disabled="!canModify"
                      type="checkbox"
                      :id="users.id + 'tddelete'"
                      v-model="users.todo_delete"
                      true-value="1"
                      false-value="0"
                    />
                    <label class="checkbox-text" :for="users.id + 'tddelete'"
                      >Delete</label
                    >
                  </div>
                </div>
              </div>
            </td>
            <td v-if="canModify">
              <q-btn
                class="q-pa-sm float-right"
                icon="save"
                color="primary"
                @click="save(index)"
                round
                flat
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <div>
        <q-dialog @hide.stop="" ref="permissionDialog">
          <q-card>
            <q-form @submit.stop="">
              <q-card-section class="text-left text-h5">
                Change Permission
              </q-card-section>
              <q-card-section>
                <div>{{ form.username }}</div>
                <q-checkbox
                  v-model="form.um_access"
                  label="User management access"
                />
              </q-card-section>
            </q-form>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import Status from "/src/mixins/ErrorHandling";

export default {
  name: "UserManagement",
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
    isAdmin: function () {
      return this.admin == 1;
    },
  },
  data() {
    return {
      loading: true,
      userData: [],
      canAccess: 1,
      canModify: 0,
      admin: 0,
      form: {
        username: "",
        admin: "",
        um_access: "",
        um_modify: "",
        ui_access: "",
        ui_modify: "",
        ui_add: "",
        ui_delete: "",
        todo_access: "",
        todo_modify: "",
        todo_add: "",
        todo_delete: "",
      },
    };
  },
  beforeCreate() {
    //get
    this.loading = true;
    this.showLoading();
    let _this = this;
    this.$api
      .get("api/permission")
      .then((response) => {
        this.hideLoading();
        _this.setData(response);
      })
      .catch(() => {
        _this.$router.push("/login");
        this.hideLoading();
      });
  },
  methods: {
    updatePermission() {},
    checkValue(value) {
      return value == 1;
    },
    save(index) {
      this.form = this.userData[index];
      let id = this.userData[index].id;
      this.$api
        .put(`api/permission/${id}`, this.form)
        .then((response) => {
          this.userData[index] = response.data.permission;
          Status.show(response);
        })
        .catch((error) => {
          Status.show(error);
        });
    },
    setData(response) {
      this.canAccess = response.data.um_access;
      this.canModify = response.data.um_modify;
      this.userData = response.data.users;
      this.loading = false;
      this.admin = response.data.admin;
    },
  },
};
</script>
<style scoped>
.checkbox {
  align-content: flex-start;
}
.checkbox-text {
  margin-inline: 10px;
  font-size: 14px;
}
</style>
