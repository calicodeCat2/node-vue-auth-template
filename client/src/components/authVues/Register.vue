
<template>
  <v-container>
    <form @submit.prevent="onSubmit">
      <v-text-field
        v-model="firstName"
        v-validate="'required|max:20'"
        :counter="10"
        :error-messages="errors.collect('first-name')"
        label="First Name"
        data-vv-name="first-name"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        v-validate="'required|max:20'"
        :error-messages="errors.collect('last-name')"
        label="Last Name"
        data-vv-name="last-name"
        required
      ></v-text-field>
      <v-text-field
        v-model="username"
        v-validate="'required|min:6'"
        :error-messages="errors.collect('username')"
        label="Username"
        data-vv-name="username"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="E-mail"
        type="email"
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
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,        
        email: this.email,
        password: this.password
      }
      console.log(newUser);
      this.$store.dispatch('registerUser', { newUser })
      .then(() => {
        this.$router.push('/login')
      })
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
/* .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  } */
</style>