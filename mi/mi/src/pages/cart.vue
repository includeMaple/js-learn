<template>
  <div>
    this is cart
    <Order-Header></Order-Header>
    <router-view></router-view>
    <Nav-Footer></Nav-Footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
  data () {
    return {}
  },
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>
