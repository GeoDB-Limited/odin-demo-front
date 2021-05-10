<template>
  <div id="app">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <img alt="Odin logo" src="./assets/odin-logo.png"/>
      </div>
      <router-view/>
    </div>
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
