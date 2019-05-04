<template>
  <v-container>
    <form @submit="onSubmit">
      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        v-validate="'required|min:6'"
        :error-messages="errors.collect('password')"
        label="Password"
        type="password"
        data-vv-name="password"
        required
      ></v-text-field>
      <v-btn type="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>

<script>
import VeeValidate from "vee-validate";
export default {
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password
      };
      console.log(user);
      this.$store.dispatch("loginUser", { user }).then(() => {
        this.$router.push("/");
      });
    },
    clear() {
      this.firstName = "";
      this.lastName = "";
      this.username = "";
      this.email = "";
      this.password = "";
      this.$validator.reset();
    }
  }
};
</script>

<style scoped>
</style>
