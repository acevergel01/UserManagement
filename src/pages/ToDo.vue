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
              <div class="text-h5 q-my-sm text-left">Todo</div>
            </th>
          </tr>
          <tr>
            <th class="text-center">Task ID</th>
            <th class="text-center">Task</th>
            <th class="text-center">Assigned to</th>
            <th class="text-center">Notes</th>
            <th class="text-center">Status</th>
            <th class="text-center">Update</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todoData" :key="todo.id">
            <td class="text-left">{{ todo.id }}</td>
            <td class="text-right">{{ todo.task }}</td>
            <td class="text-right">{{ todo.assigned_to }}</td>
            <td class="text-right">{{ todo.notes }}</td>
            <td class="text-right">{{ todo.status }}</td>
            <td>
              <q-btn
                v-if="canDelete"
                icon="delete"
                color="negative"
                round
                @click="deleteItem(index)"
                flat
              />
              <q-btn
                v-if="canModify"
                class="q-pa-sm float-right"
                icon="edit"
                color="positive"
                @click="
                  show();
                  setItems(index, 'update');
                "
                round
                flat
              />
            </td>
          </tr>

          <tr v-if="canAdd">
            <td colspan="6">
              <q-btn
                class="float-right"
                color="blue"
                round
                icon="add_circle"
                flat
                outlined
                @click="
                  show();
                  setItems(0, '');
                "
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
    <q-dialog @hide="hide" ref="updateDialog">
      <q-card>
        <q-form @submit="onOKClick">
          <q-card-section>
            <div class="row q-px-lg">
              <q-input
                class="col"
                v-model="form.task"
                outlined
                label="Task"
                :rules="[(val) => !!val || 'Field is required']"
              >
              </q-input>
            </div>
            <div class="row q-px-lg q-mb-md">
              <q-select
                style="min-width: 100%"
                outlined
                v-model="form.assigned_to"
                :options="users"
                label="Assign To"
              ></q-select>
            </div>
            <div class="row q-px-lg">
              <q-input
                class="col"
                v-model="form.notes"
                outlined
                label="Notes"
                type="textarea"
              >
              </q-input>
            </div>
            <div class="row q-px-lg q-mt-md">
              <q-select
                style="min-width: 100%"
                outlined
                v-model="form.status"
                :options="options"
                label="Status"
              />
            </div>
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
import Status from "../mixins/ErrorHandling";
import { ref } from "vue";

export default {
  name: "UserInfo",
  setup() {
    const $q = useQuasar();
    return {
      sendNotification(message, type) {
        $q.notify({
          type,
          message,
          position: "bottom-right",
        });
      },
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
      canDelete: 0,
      canModify: 0,
      action: "",
      todoData: [],
      users: [],
      options: ["On-Going", "Pending", "Finished"],
      form: {
        assigned_to: "",
        task: "",
        notes: "",
        status: ref(null),
      },
    };
  },
  computed: {
    isUpdating: function () {
      return this.action == "update";
    },
    isLoading: function () {
      return this.loading;
    },
  },
  beforeCreate() {
    this.loading = true;
    this.showLoading();
    //get tasks
    this.$api
      .get("api/todo")
      .then((response) => {
        this.hideLoading();
        this.setData(response);
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.$router.push("/login");
        this.hideLoading();
      });
  },
  methods: {
    deleteItem(index) {
      let id = this.todoData[index].id;
      this.$api
        .delete(`api/todo/${id}`)
        .then((response) => {
          this.todoData.splice(index, 1);
          Status.show(response);
        })
        .catch((error) => {
          Status.show(error);
        });
    },
    updateTask() {
      let index = this.index;
      let id = this.todoData[index].id;
      this.$api
        .put(`api/todo/${id}`, this.form)
        .then((response) => {
          this.todoData[index] = response.data.todo;
          Status.show(response);
          this.hide();
        })
        .catch((error) => {
          console.log(error);
          Status.show(error);
        });
    },
    addNewTask() {
      this.$api
        .post("api/todo", this.form)
        .then((response) => {
          this.todoData.push(response.data.todo);
          Status.show(response);
          this.hide();
        })
        .catch((error) => {
          Status.show(error);
        });
    },
    setItems(index, action) {
      this.action = action;
      this.index = index;
      if (this.isUpdating) {
        this.form.assigned_to = this.todoData[index].assigned_to;
        this.form.task = this.todoData[index].task;
        this.form.notes = this.todoData[index].notes;
        this.form.status = this.todoData[index].status;
      } else {
        this.form.assigned_to = null;
        this.form.task = null;
        this.form.notes = null;
        this.form.status = null;
      }
    },
    show() {
      this.$refs.updateDialog.show();
    },
    hide() {
      this.$refs.updateDialog.hide();
      this.action = "";
    },
    onOKClick() {
      if (this.isUpdating) {
        this.updateTask();
      } else {
        this.addNewTask();
      }
    },
    setData(response) {
      this.canAccess = response.data.todo_access;
      this.canAdd = response.data.todo_add;
      this.canModify = response.data.todo_update;
      this.canDelete = response.data.todo_delete;
      this.todoData = response.data.todo;
      if (response.data) {
        let users = response.data.users;
        for (let i = 0; i < users.length; i++) {
          this.users.push(users[i].username);
        }
      }
    },
  },
};
</script>
