<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <async-component></async-component>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoadingComponent from './components/AsyncLoading'
import ErrorComponent from './components/AsyncLoadError'

const AsyncComponent = () => ({
  // The component to load ( should be a Promise )
  component: import('./components/AsyncComponent'),
  // A component to use while the async component is loading
  // loading: import('./components/AsyncLoading'),
  loading: LoadingComponent,
  //  A component to use if the load fails
  //error: import('./components/AsyncLoadError'),
  error: ErrorComponent,
  // Delay before showing the loading component. Default: 200ms
  delay: 200,
  // The error component will be displayed if a timeout is
  // proviced and exceeded. Default: Infinity
  timeout: 3000

})

export default {
  name: 'app',
  components: {
    HelloWorld,
    AsyncComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
