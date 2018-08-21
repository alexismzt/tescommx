<template lang="html">
  <b-navbar toggleable="md" class="shadow bg-white" type="light" variant="light" sticky>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">{{producto}}</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Servicios" left>
          <b-dropdown-item v-for="elem in servicios" :key="elem.key">
            <router-link :to="{ name: 'detalle', params: { tipo: 'NBS', detalleName: elem.nombre}}" class="normalColor">
              {{elem.caption}}
            </router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Productos" left>
          <b-dropdown-item v-for="prod in productos" :key="prod.key">
            <router-link :to="{ name: 'detalle', params: { tipo: 'NBP', detalleName: prod.nombre}}" class="normalColor">
              {{prod.caption}}
            </router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Buscar"/>
          <!--<b-button size="sm" class="my-2 my-sm-0" type="submit">.</b-button>-->
        </b-nav-form>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import JsonStatic from "@/assets/detalleservicios.json"
export default {
  name: 'NavigationBar',
  props : ['producto'],
  data: () => ({
      servicios : {},
      productos : {}
  }),
  created() {
    //do something after creating vue instance
    this.servicios = JsonStatic.navBarServicios;
    this.productos = JsonStatic.navBarProductos;
  }
}
</script>

<style lang="css">
a{
  text-decoration: none;
  color: inherit;
}
.normalColor {
  text-decoration: none;
  color: black;
}
.normalColor:hover{
  text-decoration: none;
  color: black;
}
</style>
