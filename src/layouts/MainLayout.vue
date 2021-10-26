<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title> User Management Application </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view :key="$route.params.id" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
