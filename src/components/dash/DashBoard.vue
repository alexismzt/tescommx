<template>
  <div class="">
    <carrouselBar></carrouselBar>
    <div id="dashBoard" class="productos">
        <div class="row justify-content-start">
            <productosCard v-for="elem in productos" :key="elem.key"
                :url="elem.img"
                :titulo="elem.caption"
                :detalle = "elem.brief"
                :parametro = "elem.nombre"
            />
          </div>
          <!--<div class="row">
            <Ribbon msg="Un mensaje importante"></Ribbon>
          </div>-->
    </div>
  </div>
</template>
<script>
import productosCard from '@/components/productos/productos'
import carrouselBar from '@/components/carousel/carousel'
import Ribbon from '@/components/ribbon/ribbon'
import JsonStatic from '@/assets/detalleservicios.json'
export default {
  name: "",
  data: () => ({
    productos : []
  }),
  components: {
    productosCard,
    carrouselBar,
    Ribbon
  },
  created() {
    //do something after creating vue instance
    this.productos = JsonStatic.productosDash;
  }
}
</script>
<style lang="css" scoped>
.productos{
  top: 15px;
  width: 80%;
  margin: 0 auto;
}
</style>
