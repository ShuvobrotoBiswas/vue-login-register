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
            <q-input outlined v-model="email"></q-input>
          </div>
        </q-card-section>
        <q-card-section>
          <div>Password</div>
          <div>
            <q-input outlined v-model="password"></q-input>
          </div>
        </q-card-section>
        <q-card-section align="center">
          <q-btn
            unelevated
            no-caps
            class="my-submit-btn text-white"
            label="Login"
          ></q-btn>
        </q-card-section>
        <q-card-section align="center">
          <q-btn
            unelevated
            no-caps
            flat
            class="my-forgot-btn"
            color="blue-9"
            label="Forgot your password?"
          ></q-btn>
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
.my-submit-btn {
  padding: 8px 10px;
  width: 400px;
  height: 40px;
  background: #322df0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 0px 12px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}
.my-forgot-btn {
  width: 400px;
}
</style>
