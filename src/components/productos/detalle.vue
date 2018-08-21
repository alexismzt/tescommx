<template>
  <div id="detalleContenido" v-if="itemDetail != emptyItem">
    <div>
      <b-img :src="itemDetail.img" fluid alt="Responsive image" />
    </div>
    <h1>{{itemDetail.detalle.title}}</h1>
    <p>{{itemDetail.detalle.description}}</p>
    <ul :v-if="itemDetail.detalle.items.length > 0">
      <li v-for="elem in itemDetail.detalle.items" :key="elem.caption">{{elem.caption}}</li>
    </ul>
    <router-link to="/">Regresar al home</router-link>
  </div>
</template>
<script>
import JsonStatic from "@/assets/detalleservicios.json";

export default {
  name: "detalle",
  data: () => ({
      emptyItem : {
        detalle : {
          title : '',
          description : '',
          item : []
        }
      },
      itemDetail : {}
  }),
  created() {
    this.itemDetail = this.onchangeRoute();
  },
  updated() {
    this.itemDetail =this.onchangeRoute();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('rote enter');
    this.itemDetail = this.emptyItem;
    next();
  },
  methods: {
    onchangeRoute() {
      var lista = [];
      if(this.$route.params.tipo === "PD")
        lista = JsonStatic.productosDash;
      else if(this.$route.params.tipo === "NBS")
        lista = JsonStatic.navBarServicios;
      else if(this.$route.params.tipo === "NBP")
        lista = JsonStatic.navBarProductos;
      //console.log(lista);
      for(var i = 0; i < lista.length; i++)
      {
        if(lista[i].nombre == this.$route.params.detalleName)
        {
          return lista[i];
        }
      }

      return this.emptyItem;
    }
  }
}
</script>
<style lang="css" scoped>
#detalleContenido{
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 80%;
}
h1 {
  font-size: 3rem;
}
</style>
