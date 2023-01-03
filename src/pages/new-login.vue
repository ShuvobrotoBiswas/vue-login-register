<template>
  <div>
    <div class="row flex-center q-pa-md full-width">
      <q-card class="my-card full-width" flat>
        <q-card-section align="center">
          <div class="login-txt">Log in</div>
        </q-card-section>
        <!-- desktop -->
        <div class="my-dex">
          <q-card-section align="center">
            <div class="king-txt">Email</div>
            <div>
              <q-input
                class="my-input"
                dense
                outlined
                v-model="email"
              ></q-input>
            </div>
          </q-card-section>
          <q-card-section align="center">
            <div class="king-txt">Password</div>
            <div>
              <q-input
                class="my-input"
                dense
                outlined
                v-model="password"
              ></q-input>
            </div>
          </q-card-section>
        </div>
        <!-- mobile -->
        <div class="my-mob">
          <q-card-section align="center">
            <div class="text-left my-txt q-ml-md">Email</div>
            <div>
              <q-input
                class="my-input"
                dense
                outlined
                v-model="email"
              ></q-input>
            </div>
          </q-card-section>
          <q-card-section align="center">
            <div class="text-left my-txt q-ml-md">Password</div>
            <div>
              <q-input
                class="my-input"
                dense
                outlined
                v-model="password"
              ></q-input>
            </div>
          </q-card-section>
        </div>
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
        <q-card-section align="center">
          <div class="row flex-center full-width">
            <div class="register-txt text-grey">Don't have an account yet?</div>
            <q-btn
              label="Sign up"
              flat
              color="blue-9"
              no-caps
              dense
              to="/register"
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
      email: ref(null),
      password: ref(null),
    };
  },
};
</script>
<style scoped>
/* for mobile */
@media only screen and (max-width: 768px) {
  .my-dex {
    display: none;
  }
  .my-card {
    height: 465px;
    width: 300px;
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
    width: 300px;
    height: 40px;
    background: #322df0;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 0px 12px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
  }
  .my-forgot-btn {
    width: 300px;
  }
  .register-txt {
    font-weight: 500;
    font-size: 15px;
  }
  .my-input {
    max-width: 300px;
  }
}
/* for desktop */
@media only screen and (min-width: 768px) {
  .my-mob {
    display: none;
  }
  .my-txt {
    margin-left: 0px;
  }
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
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 0px 12px rgba(0, 0, 0, 0.04);
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
    max-width: 400px;
  }
  .king-txt {
    text-align: center;
  }
}
</style>
