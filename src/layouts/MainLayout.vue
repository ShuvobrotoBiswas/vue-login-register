<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title> logo </q-toolbar-title>
        <div class="my-header">Don't have an account yet?</div>
        <div>
          <q-btn flat no-caps color="blue" class="my-btn-txt" to="/register"
            >Sign up</q-btn
          >
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

//
<script>
// import { defineComponent, ref } from "vue";

// export default defineComponent({
//   name: "MainLayout",

//   components: {},

//   setup() {

//     return {
//       }
//     }
//   },
// });
//
</script>
<style scoped>
.my-header {
  font-weight: 500;
  font-size: 15px;
  color: #000000;
}
.my-btn-txt {
  height: 20px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #322df0;
}
</style>
