<template>
  <v-toolbar>
    <v-btn id="header-title" flat :to="{ path: '/' }">Authentication</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat depressed :to="{ path: '/' }">Home</v-btn>
      <v-btn flat :to="{ path: 'login' }">Login</v-btn>
      <v-btn flat :to="{ path: 'register' }">Register</v-btn>
      <v-btn flat :to="{ path: 'dashboard' }">Dashboard</v-btn>
      <v-btn flat>Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {}
</script>
<style scoped>
#header-title {
  font-size: 24px;
  margin-left: 40px;
}

</style>
