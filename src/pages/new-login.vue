<template>
  <div>
    <div class="row flex-center q-pa-md">
      <q-card class="my-card" flat>
        <q-card-section align="center">
          <div class="login-txt">Login</div>
        </q-card-section>
        <q-card-section>
          <div>Email</div>
          <div>
            <q-input rounded outlined v-model="email"></q-input>
          </div>
        </q-card-section>
        <q-card-section>
          <div>Password</div>
          <div>
            <q-input rounded outlined v-model="password"></q-input>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // name: 'PageName',
  setup() {
    return {
      email: ref(null),
      password: ref(null),
    };
  },
};
</script>
<style scoped>
.my-card {
  height: 465px;
  width: 480px;
  border-radius: 6px;
  background-color: #f5f5f5;
}
.login-txt {
  font-weight: 700;
  font-size: 23px;
}
</style>
