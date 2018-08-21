<template lang="html">
  <div class="col-auto cardmargin">
    <b-card :title="titulo"
            :img-src="url"
            img-alt="Image"
            img-top
            tag="article"
            class="productoCard shadow-lg ">
      <b-card-body class="cardBody">
          <p class="card-text">
              {{detalle}}
          </p>
          <router-link :to="{ name: 'detalle', params: {tipo: 'PD', detalleName: parametro}}" class="flotante">Ver más</router-link>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name : 'productoCard',
  props : ['titulo','detalle', 'url', 'parametro'],
  created() {

  },
  data: () => ({
  })
}
</script>
<style lang="css" scoped>
.cardBody{
  width: 15rem;
  height: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.flotante
{
  float: right;
  position:absolute;
  bottom:5px;
  right:5px;
}
.cardmargin{
  padding-top: 10px;
  top: 10px;
  bottom: 25px;
}
.productoCard{
  min-width: 20rem;
  max-width: 20rem;

  min-height: 25rem;
  max-height: 25rem;
}
</style>
