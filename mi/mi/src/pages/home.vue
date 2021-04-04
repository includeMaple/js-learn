<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
import Storage from '../storage/index'
let temp;
let storage = new Storage()
temp = storage.getItem('test')
debugger
storage.setItem('public', 'home', 'dds:dsd');
temp = storage.getItem('public', 'home')
console.log(temp)
export default {
  name: 'nav-home',
  components: {
    NavFooter,
    NavHeader
  }
}
</script>