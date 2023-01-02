<template>
  <div>
    <div class="row flex-center q-pa-md">
      <q-card class="my-card" flat>
        <q-card-section align="center">
          <div class="login-txt">Create an account</div>
        </q-card-section>
        <q-card-section>
          <div>First name</div>
          <div>
            <q-input
              class="my-input"
              dense
              outlined
              v-model="firstName"
            ></q-input>
          </div>
        </q-card-section>
        <q-card-section>
          <div>Last name</div>
          <div>
            <q-input
              class="my-input"
              dense
              outlined
              v-model="lastName"
            ></q-input>
          </div>
        </q-card-section>
        <q-card-section>
          <div>Email</div>
          <div>
            <q-input class="my-input" dense outlined v-model="email"></q-input>
          </div>
        </q-card-section>
        <q-card-section>
          <div>Password</div>
          <div>
            <q-input
              class="my-input"
              dense
              outlined
              v-model="password"
            ></q-input>
          </div>
        </q-card-section>
        <q-card-section align="center">
          <q-btn
            unelevated
            no-caps
            class="my-submit-btn text-white"
            label="Sign up"
          ></q-btn>
        </q-card-section>
        <q-card-section>
          <div class="terms text-center">
            By clicking “Sign up” you agree to our
            <span style="color: #322df0">Terms & Privacy Policy</span>
          </div>
        </q-card-section>

        <q-card-section align="center">
          <div class="row flex-center login-div">
            <div class="register-txt text-grey">Already have an account?</div>
            <q-btn
              label="Log in"
              flat
              no-caps
              dense
              style="color: #322df0"
              to="/"
            ></q-btn>
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
      firstName: ref(null),
      lastName: ref(null),
      email: ref(null),
      password: ref(null),
    };
  },
};
</script>
<style scoped>
.my-card {
  height: 465px;
  width: 400px;
  border-radius: 6px;
  background-color: #f5f5f5;
}
.login-txt {
  font-weight: 700;
  font-size: 23px;
  color: #000000;
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
.register-txt {
  font-weight: 500;
  font-size: 15px;
}
.my-input {
  width: 400px;
}
.terms {
  font-weight: 500;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.64);
}
.login-div {
  width: 400px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}
</style>
