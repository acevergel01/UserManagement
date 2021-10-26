<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> User Management Application </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              exact
              :to="menuItem.dir"
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
          <q-item exact clickable v-ripple @click.stop="logout">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section> Logout </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Status from "/src/mixins/ErrorHandling";
const menuList = [
  {
    icon: "home",
    label: "Home",
    separator: true,
    dir: "/",
  },
  {
    icon: "settings",
    label: "User Management",
    separator: false,
    dir: "/usermanagement",
  },
  {
    icon: "info",
    label: "User Information",
    separator: false,
    dir: "/userinfo",
  },
  {
    icon: "edit_calendar",
    label: "To-Do",
    separator: true,
    dir: "/todo",
  },
];
export default defineComponent({
  name: "DrawerLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      menuList,
    };
  },
  methods: {
    logout() {
      this.$api.post(`api/logout`).then((response) => {
        Status.show(response);
        sessionStorage.removeItem("token");
        this.$router.push("/login");
      });
    },
  },
});
</script>
