<template lang="html">
  <b-navbar toggleable="md" class="shadow bg-white" type="light" variant="light" sticky>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">{{producto}}</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Servicios" left>
          <b-dropdown-item href="#">Fiscales</b-dropdown-item>
          <b-dropdown-item href="#">Infraestructura</b-dropdown-item>
          <b-dropdown-item href="#">Soluciones de Software</b-dropdown-item>
          <b-dropdown-item href="#">Capacitación</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Productos" left>
          <b-dropdown-item href="#">EMR - PatientNOW</b-dropdown-item>
          <b-dropdown-item href="#">Facturación Electronica</b-dropdown-item>
          <b-dropdown-item href="#">Punto de venta</b-dropdown-item>
          <b-dropdown-item href="#">SOFOMes</b-dropdown-item>
          <b-dropdown-item href="#">SOFIPOs</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Bsucar"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">.</b-button>
        </b-nav-form>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavigationBar',
  props : ['producto']
}
</script>

<style lang="css">
</style>
