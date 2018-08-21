<template>
  <div id="app" class="">
    <NavigationBar :producto='producto'></NavigationBar>
    <div  class="contenedor">
      <router-view></router-view>
    </div>
    <footer class="bottom">
      <foot />
    </footer>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/navigationBar'
import Foot from '@/components/footer/foot'
export default {
  name: 'app',
  data: () => ({
    producto : 'Tescom.mx'
  }),
  components: {
    NavigationBar,
    Foot
  }
}
</script>
<style>
.contenedor{
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.tescom-navbar{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
footer{
    margin-top: 1.5rem;
    bottom: 0px;
}
</style>
